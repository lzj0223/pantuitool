// 导出一个函数，用于获取一个随机整数
export function getRandomInt(): number {
  // 使用Math.random()获取一个0到1之间的随机数，然后乘以1_000_000_000_000，得到一个0到1_000_000_000_000之间的随机数
  // 再使用Math.floor()向下取整，得到一个0到1_000_000_000_000之间的随机整数
  return Math.floor(Math.random() * 1_000_000_000_000);
}

// 导出一个函数，用于模拟异步操作，等待指定的毫秒数
export function tick(milliseconds: number): Promise<void> {
  // 返回一个Promise对象，在指定的毫秒数后执行resolve()函数，从而实现异步操作
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}
