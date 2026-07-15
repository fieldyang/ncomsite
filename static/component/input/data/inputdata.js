/**
 * 生成下拉框数据源
 */
export function genDomainData() {
  return [
    { value: "com", label: ".com" },
    { value: "cn", label: ".cn" },
    { value: "org", label: ".org" },
    { value: "net", label: ".net" },
  ];
}

/**
 * 生成模拟表单数据
 */
export function genFormData() {
  return {
    username: "",
    password: "",
    email: "",
    address: "",
  };
}
