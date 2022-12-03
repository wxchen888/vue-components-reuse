import { App } from "vue";
import ChooseAreaComp from "./src/index.vue";

// 注册组件
export default {
  install(app: App) {
    app.component("m-choose-area", ChooseAreaComp);
  }
};
