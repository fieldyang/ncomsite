export default [
  { key: "1", name: "insertRow", desc: "插入行，在key对应行前插入一行，如果key不存在，则添加到最后", params: "data: Record<string, unknown>(行数据), key?: string(行key)", returns: "void" },
  { key: "2", name: "updateRow", desc: "修改一行数据，", params: "data: Record<string, unknown>(行数据)", returns: "void" },
  { key: "3", name: "updateCell", desc: "更新一个单元格数据，只能更新带name的单元格，对自定义单元格无效", params: "key: string(行key), name: string(列对应名称), value: string(值)", returns: "void" },
  { key: "4", name: "removeRow", desc: "删除一行或多行", params: "key: string | string[](key或key数组)", returns: "void" },
  { key: "5", name: "setRecords", desc: "重置表格数据", params: "data: Record<string, number | string>[](数据数组)", returns: "void" },
  { key: "6", name: "getRecords", desc: "获取表格数据", params: "-", returns: "表格数据" },
  { key: "7", name: "getSelectedRows", desc: "获取选中数据", params: "-", returns: "选中行数据" },
  { key: "8", name: "selectRow", desc: "选中/取消选中行", params: "key: string | string[](key或key数组), unSelect?: boolean(false:选中,true:取消选中)", returns: "void" },
];
