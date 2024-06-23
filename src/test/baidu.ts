import Network from "../pan/driver/baidu/network";


const cookieStr = '';
(async () => {
    const network = new Network(cookieStr)
    const bdstoken = await network.getBdstoken()
    console.log(bdstoken)

    const dirList = await network.getDirList('/资源分享77777')
    console.log(dirList)
})()


