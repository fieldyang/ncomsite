/**
 * 初始文件数据
 */
export function getInitFiles() {
  return [
    { id: 1, name: "aaa.jpg", status: "finish", url: "http://aaa.jpg" },
    { id: 2, name: "bbb.txt", status: "uploading" },
    { id: 3, name: "ccc.dat", status: "error" },
  ];
}

/**
 * Upload常量
 */
export const uploadConst = {
  uploadUrl: "http://localhost:3100/file/upload",
  deleteUrl: "http://localhost:3100/file/delete",
};
