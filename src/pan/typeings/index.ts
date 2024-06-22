
export interface Driver {
    /**
     * 生成分享链接
     * @param path 需要生成分享链接的文件
     */
    genShareLink(path: string): string;


    /**
     * 转存
     * @param from 转存来的 
     */
    saveTransfer(from: string): string;
}