
// 百度网盘地址
export const BASE_URL = 'https://pan.baidu.com'

// 默认请求头
export const HEADERS = {
    'Host': 'pan.baidu.com',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Sec-Fetch-Site': 'same-site',
    'Sec-Fetch-Mode': 'navigate',
    'Referer': BASE_URL,
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7,en-GB;q=0.6,ru;q=0.5',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
}
// 错误代码对应错误信息字典
export const ERROR_CODES = {
    [-1]: '链接错误，链接失效或缺少提取码',
    [-4]: '转存失败，无效登录。请退出账号在其他地方的登录',
    [-6]: '转存失败，请用浏览器无痕模式获取 Cookie 后再试',
    [-7]: '转存失败，转存文件夹名有非法字符，不能包含 < > | * ? \\ :，请改正目录名后重试',
    [-8]: '转存失败，目录中已有同名文件或文件夹存在',
    [-9]: '链接错误，提取码错误',
    [-10]: '转存失败，容量不足',
    [-12]: '链接错误，提取码错误',
    [-62]: '转存失败，链接访问次数过多，请手动转存或稍后再试',
    [0]: '转存成功',
    [2]: '转存失败，目标目录不存在',
    [4]: '转存失败，目录中存在同名文件',
    [12]: '转存失败，转存文件数超过限制',
    [20]: '转存失败，容量不足',
    [105]: '链接错误，所访问的页面不存在',
    [404]: '转存失败，秒传无效',
};



