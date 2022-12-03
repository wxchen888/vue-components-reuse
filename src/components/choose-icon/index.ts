import { App } from "vue";
import ChooseIconComp from "./src/index.vue";

// 注册组件
export default {
  install(app: App) {
    app.component("m-choose-icon", ChooseIconComp);
  }
};
