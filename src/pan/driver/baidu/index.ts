import { ErrorCode } from './error';
import { Driver } from "../../typeings";
import Network from "./network";
import { BASE_URL } from './constants';
import { url } from 'inspector';

export default class BaiduDriver implements Driver {
  private network: Network;

  private rootDir = "/pantuitool";

  public constructor(config: string) {
    this.network = new Network(config);
  }

  async init(): Promise<void> {
    await this.network.getBdstoken();
    const res = await this.network.getDirList(this.rootDir);
    if (res === ErrorCode.WrongCode) {
      this.network.createDir(this.rootDir);
    }
  }

  createShareLink(path: string): string {
    throw new Error("Method not implemented.");
  }

  async transferSave(from: string, code: string = ""): Promise<string> {
    await this.init();

    if (from.indexOf(BASE_URL) < 0) {
      console.error('非百度分享链接')
      return '';
    }

    // 验证链接和转存文件

    // 对于有提取码的链接先验证提取码，试图获取更新 bdclnd
    if (code) {
      const verifyResult = await this.network.verifyPassCode(from, code)
      if (typeof verifyResult === 'number') {
        throw new Error('提取码验证失败')
      }
      this.network.updateCookies('BDCLND', verifyResult)
    }

    // 直接访问没有提取码的链接，或更新 bdclnd 后再次访问，获取转存必须的 3 个参数
    const paramResp = await this.network.getTransferParams(from);

    return '';
  }
}
