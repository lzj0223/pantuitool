import Network from "../pan/driver/baidu/network";


const cookieStr = "";
(async () => {
    const url = 'https://pan.baidu.com/share/init?surl=4RO2L0F8kvbp7XwYliEDBw';
    const password = 'k5D6';

    const linkUrlObj = new URL(url);
    const surl = linkUrlObj.searchParams.get('surl');

    const network = new Network(cookieStr)
    const bdstoken = await network.getBdstoken()
    console.log(bdstoken)


    const rootDir = '//html6'
    const dirList = await network.getDirList(rootDir)
    if (typeof dirList === 'number') {
        const reuslt = await network.createDir(rootDir)
        if (reuslt !== 0) {
            console.error('文件夹创建失败', reuslt)
        }
    }


    // 验证链接是否有效，返回的数字为错误代码，反之返回参数列表
    // 对于有提取码的链接先验证提取码，试图获取更新 bdclnd
    let bdclnd: number | string = 'UdDFh6GpHIAV47dUsmIEGg7gOonmG1ZzqEQ29M5ivJA%3D';
    // if (password) {
    //     bdclnd = await network.verifyPassCode(surl as string, password)
    //     if (typeof bdclnd === 'number') {
    //         // 如果 bdclnd 是错误代码，直接返回
    //         console.error('提取码验证失败', bdclnd)
    //         return;
    //     }
    // }

    //bdclnd = decodeURIComponent(bdclnd);
    console.log('bdclnd=' + bdclnd)

    // 更新 bdclnd 到 cookie
    network.updateCookies('bdclnd', bdclnd)


    // 直接访问没有提取码的链接，或更新 bdclnd 后再次访问，获取转存必须的 3 个参数
    const params = await network.getTransferParams(surl as string)
    if (typeof params === 'number') {
        console.error('转存参数获取失败', params)
        return;
    }

    console.log(params)


    // # 如果开启安全转存模式，对每个转存链接建立目录
    // if self.custom_mode:
    //     folder_name = self.creat_user_dir(folder_name)
    // 终于轮到发送转存请求
    const tranferTesult = network.transferFile(params, rootDir, bdclnd)
    // 这里不考虑网络异常了，假设请求一定会返回页面内容，对其进行解析

})()


