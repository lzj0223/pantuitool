import { url } from 'inspector';
import { config } from "process";

/**
 * 所有和网络请求相关函数。
 */
import axios, { AxiosInstance } from "axios";
import { HEADERS, BASE_URL } from "./constants";
import { Cookie, CookieJar } from "tough-cookie";

type TranferParams = { shareid: string, share_uk: string, fsIds: string[], files: { id: string, name: string }[], dirs: { id: string, name: string }[] }


/**
 * 网络请求相关类。
 * 注意，此类函数用 retry 来处理网络问题，达到重试次数则由主函数来捕获异常，中断运行。只要请求能返回数据，都可以正确处理。
 * 请求地址没有取全参数（params），只留关键参数。
 */
export default class Network {
  private request: AxiosInstance;
  private bdstoken: string;

  protected cookieJar: CookieJar;

  constructor(config: string) {
    // 初始化会话、请求头和 bdstoken。
    this.request = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
      headers: HEADERS,
    });

    this.cookieJar = new CookieJar();
    this.parseCookies(config);

    this.request.interceptors.request.use((config) => {
      config.headers["Cookie"] = this.cookieJar.getCookieStringSync(BASE_URL);
      config.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";

      return config;
    });

    this.request.interceptors.response.use(resp => {
      // console.log('Response:', {
      //   url: resp.config.url,
      //   method: resp.config.method,
      //   headers: resp.config.headers,
      //   data: resp.config.data,
      //   params: resp.config.params,
      //   status: resp.status,
      //   statusText: resp.statusText,
      //   //responseData: resp.data,
      // });
      return resp
    });

    this.bdstoken = "";
  }

  /**
   * 获取 bdstoken，用于创建、转存等操作，是所有其他请求的先决条件。
   * 获取到的 token 在整个会话中通用。
   * @returns  获取成功返回 bdstoken，获取失败返回错误代码
   */
  async getBdstoken(): Promise<string | number> {
    const url = `${BASE_URL}/api/gettemplatevariable`;
    const params = {
      clienttype: "0",
      app_id: "38824127",
      web: "1",
      fields: '["bdstoken","token","uk","isdocuser","servertime"]',
    };

    try {
      const response = await this.request.get(url, { params });
      if (response.data.errno !== 0) {
        return response.data.errno;
      }
      return (this.bdstoken = response.data.result.bdstoken);
    } catch (error) {
      console.error("Error in getBdstoken:", error);
      throw error;
    }
  }

  /**
   * 获取指定目录下的文件或目录列表。
   * 用于创建目录前，检查目录是否已存在；
   * 用于批量分享时，生成任务列表。
   * @param folderName 指定要获取列表的目录名
   * @returns 获取成功时返回文件列表，获取失败时返回错误代码
   */
  async getDirList(folderName: string): Promise<any[] | number> {
    const url = `${BASE_URL}/api/list`;
    const params = {
      order: "time",
      desc: "1",
      showempty: "0",
      web: "1",
      page: "1",
      num: "1000",
      dir: folderName,
      bdstoken: this.bdstoken,
    };

    try {
      const response = await this.request.get(url, { params });
      if (response.data.errno !== 0) {
        return response.data.errno;
      }
      return response.data.list;
    } catch (error) {
      console.error("Error in getDirList:", error);
      throw error;
    }
  }

  /**
   * 新建指定目录。
   * 用于批量转存前，建立缺失的目标目录。
   * @param folderName 指定要建立的目录名
   * @returns 获取请求返回的代码，成功时返回 0
   */
  async createDir(folderName: string): Promise<number> {
    const url = `${BASE_URL}/api/create`;
    const params = {
      a: "commit",
      bdstoken: this.bdstoken,
    };
    const data = {
      path: folderName,
      isdir: "1",
      block_list: "[]",
    };

    try {
      const response = await this.request.post(url, data, { params });
      return response.data.errno;
    } catch (error) {
      console.error("Error in createDir:", error);
      throw error;
    }
  }

  /**
   * 验证提取码是否正确。
   * 如果正确，则会返回转存所必须的 randsk，也就是 bdclnd 参数。
   * @param surl 网盘地址
   * @param passCode 提取码
   * @returns
   */
  async verifyPassCode(
    surl: string,
    passCode: string
  ): Promise<string | number> {
    const url = `${BASE_URL}/share/verify`;
    const params = {
      surl: surl,
      bdstoken: this.bdstoken,
    };
    const data = {
      pwd: passCode,
    };

    try {
      const response = await this.request.post(url, data, {
        params,
        headers: {
          Referer: `${BASE_URL}/share/init?surl=${surl}&pwd=${passCode}`,
        }
      });
      if (response.data.errno !== 0) {
        return response.data.errno;
      }
      return response.data.randsk;
    } catch (error) {
      console.error("Error in verifyPassCode:", error);
      throw error;
    }
  }

  /**
   * 更新 bdclnd 到 cookie 后，再次请求网盘链接，获取响应内容。
   * 请求需要允许跳转。
   * 请求不再需要提取码。
   * @param surl 网盘地址
   * @returns 返回原始请求内容，丢给 parse_response 函数取处理
   */
  async getTransferParams(surl: string): Promise<number | TranferParams> {
    try {
      const url = `${BASE_URL}/s/1${surl}`
      const response = await this.request.get(url);

      const matchResult = [...response.data.matchAll(/locals\.mset\((\{.*\})\)/g)];
      if (matchResult.length < 1) {
        return -1;
      }

      const data = JSON.parse(matchResult[0][1])
      const files: { id: string, name: string }[] = [];
      const dirs: { id: string, name: string }[] = [];
      const fsIds: string[] = [];

      data.file_list.forEach((element: any) => {
        const item = { id: element.fs_id, name: element.server_filename }
        if (element.isDir) {
          dirs.push(item)
        } else {
          files.push(item)
        }
        fsIds.push(item.id)
      });

      return { shareid: data.shareid, share_uk: data.share_uk, files, dirs, fsIds }
    } catch (error) {
      console.error("Error in getTransferParams:", error);
      throw error;
    }
  }

  /**
   * 转存百度网盘文件。
   * @param paramsList 带有 shareid、share_uk 和 fs_id 的列表
   * @param folderName 转存目标目录
   * @returns 返回转存请求结果代码
   */
  async transferFile(
    paramsList: TranferParams,
    folderName: string,
    surl: string,
    pwd: string
  ): Promise<number> {
    const url = `${BASE_URL}/share/transfer`;
    const params = {
      shareid: paramsList.shareid,
      from: paramsList.share_uk,
      ondup: 'newcopy',
      async: 1
    };

    const data = {
      fsidlist: JSON.stringify(paramsList.fsIds),
      path: `/${folderName}`,
    };

    try {
      const response = await this.request.post(url, data, {
        params,
        headers: {
          Referer: `${BASE_URL}/s/1${surl}?pwd=${pwd}`,
        }
      });
      return response.data.errno;
    } catch (error) {
      console.error("Error in transferFile:", error);
      throw error;
    }
  }

  /**
   * 生成百度网盘分享链接。
   * @param fsId 文件或目录独一无二的id
   * @param expiry 自定义失效时长
   * @param password 自定义提取码
   * @returns 成功时返回生成的分享链接，失败时返回错误代码
   */
  async createShare(
    fsId: number,
    expiry: string,
    password: string
  ): Promise<string | number> {
    const url = `${BASE_URL}/share/set`;
    const params = {
      channel: "chunlei",
      bdstoken: this.bdstoken,
      clienttype: "0",
      app_id: "250528",
      web: "1",
    };
    const data = {
      period: expiry,
      pwd: password,
      eflag_disable: "true",
      channel_list: "[]",
      schannel: "4",
      fid_list: `[${fsId}]`,
    };

    try {
      const response = await this.request.post(url, data, { params });
      if (response.data.errno !== 0) {
        return response.data.errno;
      }
      return response.data.link;
    } catch (error) {
      console.error("Error in createShare:", error);
      throw error;
    }
  }

  parseCookies(cookieStr: string) {
    if (cookieStr.length <= 0) {
      return;
    }
    cookieStr.split(";").forEach((i) => {
      const co = Cookie.parse(i);
      if (!co) {
        return;
      }
      this.cookieJar.setCookieSync(co, BASE_URL);
    });
  }

  updateCookies(key: string, val: string | number) {
    this.cookieJar.setCookieSync(`${key}=${val}`, BASE_URL);
  }
}
