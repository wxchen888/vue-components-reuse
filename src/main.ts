import { createApp } from "vue";
import router from "@/router";
import "element-plus/dist/index.css";
import App from "./App.vue";
import { iconComps } from "./utils/use-icon";
import camelToLine from "./utils/camel-to-line";
import chooseArea from "./components/choose-area"; //在全局按需注册区域选择组件
// import mUI from "./components"; //在全局注册全部的自定义组件

const app = createApp(App);

iconComps.forEach((comp, key) => {
  app.component(camelToLine(key), comp); // elIcon-user elIcon-warning-filled 使用中杠线连接
});
app.use(router).use(chooseArea).mount("#app");
