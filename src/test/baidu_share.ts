// 分享主函数，流程为：
// 0.弹出设置窗口，设置分享参数；
// 1.获取用户输入，更新按钮和标签状态；
// 2.检查用户输入，有问题则终止并发送日志；
// 3.获取 bdstoken，如果获取失败则终止；
// 4.获取目标目录文件列表，如果为空则终止；
// 5.批量分享文件。先向链接框插入文件名，再创建分享，插入结果到日志框。

import Network from "../pan/driver/baidu/network";



const cookieStr = '';
(async () => {
    const forlderName = '/html6';
    const pwd = '1234';
    const expiry = '0';

    const network = new Network(cookieStr)
    const bdstoken = await network.getBdstoken()
    console.log('bdstoken=' + bdstoken)


    const dirList = await network.getDirList(forlderName)
    if (typeof dirList === 'number') {
        return;
    }

    console.log('dirList', dirList)

    network.createShare(dirList.pop().fs_id, expiry, pwd)
})()