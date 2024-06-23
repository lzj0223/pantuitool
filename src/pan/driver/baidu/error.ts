export class BaiduError {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }
}

// 错误代码对应错误信息字典
export enum ErrorCode {
  unknown = -99999,
  LinkError = -1,
  InvalidLogin = -4,
  UseIncognito = -6,
  InvalidCharacter = -7,
  DuplicateName = -8,
  WrongCode = -9,
  InsufficientStorage = -10,
  AnotherWrongCode = -12,
  TooManyAttempts = -62,
  Success = 0,
  DirectoryNotFound = 2,
  ExistingFileName = 4,
  FileLimitExceeded = 12,
  AnotherInsufficientStorage = 20,
  PageNotFound = 105,
  InvalidFastTransfer = 404,
}

export const ErrorMessage: { [key in ErrorCode]: string } = {
  [ErrorCode.unknown]: "未知错误",
  [ErrorCode.LinkError]: "链接错误，链接失效或缺少提取码",
  [ErrorCode.InvalidLogin]: "转存失败，无效登录。请退出账号在其他地方的登录",
  [ErrorCode.UseIncognito]: "转存失败，请用浏览器无痕模式获取 Cookie 后再试",
  [ErrorCode.InvalidCharacter]:
    "转存失败，转存文件夹名有非法字符，不能包含 < > | * ? \\ :，请改正目录名后重试",
  [ErrorCode.DuplicateName]: "转存失败，目录中已有同名文件或文件夹存在",
  [ErrorCode.WrongCode]: "链接错误，提取码错误",
  [ErrorCode.InsufficientStorage]: "转存失败，容量不足",
  [ErrorCode.AnotherWrongCode]: "链接错误，提取码错误",
  [ErrorCode.TooManyAttempts]:
    "转存失败，链接访问次数过多，请手动转存或稍后再试",
  [ErrorCode.Success]: "转存成功",
  [ErrorCode.DirectoryNotFound]: "转存失败，目标目录不存在",
  [ErrorCode.ExistingFileName]: "转存失败，目录中存在同名文件",
  [ErrorCode.FileLimitExceeded]: "转存失败，转存文件数超过限制",
  [ErrorCode.AnotherInsufficientStorage]: "转存失败，容量不足",
  [ErrorCode.PageNotFound]: "链接错误，所访问的页面不存在",
  [ErrorCode.InvalidFastTransfer]: "转存失败，秒传无效",
};
