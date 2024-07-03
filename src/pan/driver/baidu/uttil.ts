import { BASE_URL } from "./constants"


export function parseShareUrl(url: string) {
    const urlObj = new URL(url)
    if (urlObj.origin != BASE_URL) {
        throw new Error('连接不合法')
    }

    let surl = '';
    if (urlObj.pathname === '/share/init') {
        surl = urlObj.searchParams.get('surl') ?? '';
    } else if (urlObj.pathname.indexOf('/s/1') >= 0) {
        surl = urlObj.pathname.replace('/s/1', '')
    }
    if (surl.length <= 0) {
        throw Error('无法提取surl')
    }
    return surl;
}