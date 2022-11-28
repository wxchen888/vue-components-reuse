import { createApp } from "vue";
import router from "@/router";
import "element-plus/dist/index.css";
import App from "./App.vue";
import { iconComps } from "./utils/use-icon";
import camelToLine from "./utils/camel-to-line";

const app = createApp(App);

console.log("iconComps", iconComps);

iconComps.forEach((comp, key) => {
  app.component(camelToLine(key), comp); // elIcon-user elIcon-warning-filled 使用中杠线连接
});
app.use(router).mount("#app");
