/**
 * 挂载函数
 * @param root 挂载点
 */
export function mount(root: string) {
  console.log(root);
}

globalThis.mf_employee = {
  id: "mf_employee",
  mount
};
