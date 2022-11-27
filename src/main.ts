import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import camelToLine from "./utils/camel-to-line";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(camelToLine(key), component); // el-user el-warning-filled 使用中杠线连接
}
app.use(router).mount("#app");
