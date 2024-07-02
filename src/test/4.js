const fs = require("fs");

const content = fs
  .readFileSync("/Users/linzhijun/wwwroot/pantuitool/src/test/1.html")
  .toString();

const matchResult = [...content.matchAll(/locals\.mset\((\{.*\})\)/g)];

console.log(JSON.parse(matchResult[0][1]));
