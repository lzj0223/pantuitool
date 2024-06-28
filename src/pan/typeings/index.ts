export interface Driver {
  /**
   * init
   */
  init(): void;

  /**
   * 生成分享链接
   * @param path 需要生成分享链接的文件
   */
  createShareLink(path: string): string;

  /**
   * 转存
   * @param from 转存来的
   * @param code 提取码
   */
  transferSave(from: string, code: string): Promise<string>;
}
