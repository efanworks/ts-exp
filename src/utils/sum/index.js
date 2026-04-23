/**
 * 求和
 * @param  {number[]} args 待求和项
 * @returns {number} 和
 */
export function sum(...args) {
  return args.reduce((pre, cur) => {
    return pre + cur;
  }, 0);
}

sum(1, "2");
