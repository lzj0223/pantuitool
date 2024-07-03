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


const ErrorCode2 = {
  0: "成功",
  "-1": "由于您分享了违反相关法律法规的文件，分享功能已被禁用，之前分享出去的文件不受影响。",
  "-2": "用户不存在,请刷新页面后重试",
  "-3": "文件不存在,请刷新页面后重试",
  "-4": "登录信息有误，请重新登录试试",
  "-5": "host_key和user_key无效",
  "-6": "请重新登录",
  "-7": "该分享已删除或已取消",
  "-8": "该分享已经过期",
  "-9": "访问密码错误",
  "-10": "分享外链已经达到最大上限100000条，不能再次分享",
  "-11": "验证cookie无效",
  "-14": "对不起，短信分享每天限制20条，你今天已经分享完，请明天再来分享吧！",
  "-15": "对不起，邮件分享每天限制20封，你今天已经分享完，请明天再来分享吧！",
  "-16": "对不起，该文件已经限制分享！",
  "-17": "文件分享超过限制",
  "-21": "预置文件无法进行相关操作",
  "-30": "文件已存在",
  "-31": "文件保存失败",
  "-33": "一次支持操作999个，减点试试吧",
  "-32": "你的空间不足了哟",
  "-70": "你分享的文件中包含病毒或疑似病毒，为了你和他人的数据安全，换个文件分享吧",
  2: "参数错误",
  3: "未登录或帐号无效",
  4: "存储好像出问题了，请稍候再试",
  108: "文件名有敏感词，优化一下吧",
  110: "分享次数超出限制，可以到“我的分享”中查看已分享的文件链接",
  114: "当前任务不存在，保存失败",
  115: "该文件禁止分享",
  112: '页面已过期，请<a href="javascript:window.location.reload();">刷新</a>后重试',
  9100: '你的帐号存在违规行为，已被冻结，<a href="/disk/appeal" target="_blank">查看详情</a>',
  9200: '你的帐号存在违规行为，已被冻结，<a href="/disk/appeal" target="_blank">查看详情</a>',
  9300: '你的帐号存在违规行为，该功能暂被冻结，<a href="/disk/appeal" target="_blank">查看详情</a>',
  9400: '你的帐号异常，需验证后才能使用该功能，<a href="/disk/appeal" target="_blank">立即验证</a>',
  9500: '你的帐号存在安全风险，已进入保护模式，请修改密码后使用，<a href="/disk/appeal" target="_blank">查看详情</a>',
  90003: "暂无文件夹管理权限"
}


const TranferErrorCode = {
  4: "转存出错了，请稍后重试",
  "-30": "文件已存在",
  "-31": "转存出错了，请稍后重试",
  "-32": "空间不足，转存失败",
  "-33": "所选文件数量超出上限，无法保存",
  111: "当前有其他保存任务正在进行，请稍后重试",
  120: "所选文件数量超出上限，无法保存",
  130: "所选文件数量超出上限，无法保存",
  31061: "文件已存在",
  31069: "转存出错了，请稍后重试",
  31112: "空间不足，转存失败",
  31075: "所选文件数量超出上限，无法保存",
  31171: "当前有其他保存任务正在进行，请稍后重试",
  31174: "所选文件数量超出上限，无法保存",
  31175: "所选文件数量超出上限，无法保存",
  90003: "暂无文件夹管理权限，不支持转存",
}
