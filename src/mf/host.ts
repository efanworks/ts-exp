/**
 * 加载远程模块
 */
export async function load() {
  await import("./remote.js");

  mf_employee.mount("hello world");
}
