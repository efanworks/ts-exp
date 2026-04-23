// import { type Person } from "./types/global.js";
// import { getArrayLength, maxInterval } from "./utils/interval/index.js";
// import helloWorld from "./utils/timeout/index.js";

// getArrayLength([1, 2]);
// console.log(maxInterval);

// helloWorld.test("hello");

// const p: Person = {
//   name: "f"
// };
// console.log(p);

// MathIt.say();

// const pel = new MathIt.People("fg");
// console.log(MathIt.PI);
import interval from "./utils/interval/index.cjs";
import { sum } from "./utils/sum/index.js";

// TypeScript: Restart TS server 来重启server，如果类型提示没生效的话
// console.log(sum(1, 2));

const { getArrayLength, maxInterval } = interval;

export { getArrayLength, maxInterval };
