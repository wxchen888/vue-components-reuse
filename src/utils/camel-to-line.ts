//驼峰转连线
export default function (value: string) {
  return "el-" + value.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
}
