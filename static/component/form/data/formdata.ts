/** 基础表单示例数据 */
export function genBasicFormData() {
  return {
    name: "张三",
    email: "zhangsan@example.com",
    mobile: "13800138000",
    remark: "这是备注信息",
  };
}

/** 布局示例数据 */
export function genLayoutFormData() {
  return {
    project: "New Component",
    owner: "开发组",
    budget: 120,
  };
}

/** 内置校验示例数据 */
export function genValidateFormData() {
  return {
    amount: 10,
    score: 85,
    nickname: "ncom",
    website: "example",
    contactEmail: "dev@example.com",
    contactMobile: "18681262848",
    idno: "511621199805113111",
    workDate: "2025-02-08",
    workTime: "09:30:00",
  };
}

/** 自定义校验示例数据 */
export function genCustomFormData() {
  return {
    username: "zhangsan",
    role: "dev",
    password: "",
    confirmPassword: "",
    agree: false,
  };
}

/** 学历选项 */
export function genEduOptions() {
  return [
    { value: 1, label: "专科" },
    { value: 2, label: "本科" },
    { value: 3, label: "硕士" },
  ];
}

/** 域名后缀选项 */
export function genDomainOptions() {
  return [
    { value: "com", label: ".com" },
    { value: "cn", label: ".cn" },
    { value: "org", label: ".org" },
    { value: "net", label: ".net" },
  ];
}

/** 角色选项 */
export function genRoleOptions() {
  return [
    { value: "dev", label: "开发" },
    { value: "qa", label: "测试" },
    { value: "pm", label: "产品" },
  ];
}
