import { ElMessage } from "element-plus";

export default function useCopy(text: string) {
  const input = document.createElement("input");
  document.body.appendChild(input);
  input.value = text;
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
  ElMessage.success("复制成功");
}
