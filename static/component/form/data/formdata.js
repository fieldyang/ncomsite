/** 基础表单示例数据 */
export function genBasicFormData() {
  return {
    name: "张三",email@example.com",mobile,remark这是备注信息",
  };
}

/** 布局示例数据 */
export function genLayoutFormData() {
  return {
    project,owner开发组",budget,
  };
}

/** 内置校验示例数据 */
export function genValidateFormData() {
  return {
    amount,score,nickname,website,contactEmail@example.com",contactMobile,idno,workDate-02-08",workTime:30,
  };
}

/** 自定义校验示例数据 */
export function genCustomFormData() {
  return {
    username,role,password,confirmPassword,agree,
  };
}

/** 学历选项 */
export function genEduOptions() {
  return [
    { value,label专科" },
    { value,label本科" },
    { value,label硕士" },
  ];
}

/** 域名后缀选项 */
export function genDomainOptions() {
  return [
    { value,label},
    { value,label},
    { value,label},
    { value,label},
  ];
}

/** 角色选项 */
export function genRoleOptions() {
  return [
    { value,label开发" },
    { value,label测试" },
    { value,label产品" },
  ];
}
