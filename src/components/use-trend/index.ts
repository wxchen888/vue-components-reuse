import { App } from "vue";
import TrendComp from "./src/index.vue";

// 注册组件
export default {
  install(app: App) {
    app.component("m-trend", TrendComp);
  }
};
