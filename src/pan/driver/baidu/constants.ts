// 百度网盘地址
export const BASE_URL = "https://pan.baidu.com";

// 默认请求头
export const HEADERS = {
  Host: "pan.baidu.com",
  Connection: "keep-alive",
  "Upgrade-Insecure-Requests": "1",
  "Sec-Fetch-Dest": "document",
  Accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  "Sec-Fetch-Site": "same-site",
  "Sec-Fetch-Mode": "navigate",
  Referer: BASE_URL,
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-US;q=0.7,en-GB;q=0.6,ru;q=0.5",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
};
