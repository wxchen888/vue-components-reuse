import { App } from "vue";
import chooseArea from "./choose-area";
import chooseIcon from "./choose-icon";
import ChooseIconComp from "./choose-icon/src/index.vue";

export { ChooseIconComp };
/** 也可以全局(可以全部或按需)注册   */
const components = [chooseArea, chooseIcon];
export default {
  install(app: App) {
    components.map((componnet) => {
      app.use(componnet);
    });
  }
};
