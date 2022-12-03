<script setup lang="ts">
import { ChooseIconComp } from "./components/index";

const currentComp = shallowRef(ChooseIconComp);
const isShowChooseArea = ref(false);
function chooseArea(vals: string[]) {
  console.log("已选择的省市区: ", vals);
}

function changeComp(compName: string) {
  if (compName === "ChooseIconComp") {
    currentComp.value = ChooseIconComp;
    isShowChooseArea.value = false;
  } else if (compName === "ChooseAreaComp") {
    isShowChooseArea.value = true;
  }
}
</script>

<template>
  <p>
    <el-button @click="changeComp('ChooseIconComp')">图标选择</el-button>
    <el-button @click="changeComp('ChooseAreaComp')">省市区选择</el-button>
  </p>
  <div class="async-comp" v-show="!isShowChooseArea">
    <keep-alive>
      <component :is="currentComp" />
    </keep-alive>
  </div>
  <m-choose-area v-show="isShowChooseArea" @choose-area="chooseArea" />
</template>

<style scoped lang="scss"></style>
