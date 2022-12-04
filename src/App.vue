<script setup lang="ts">
import { ChooseIconComp } from "./components/index";

const currentComp = shallowRef(ChooseIconComp);
const isShowChooseArea = ref(false);
const isShowChooseIcon = ref(false);
const isShowTrend = ref(false);

function changeComp(compName: string) {
  if (compName === "ChooseIconComp") {
    currentComp.value = ChooseIconComp;
    isShowChooseArea.value = isShowTrend.value = false;
    isShowChooseIcon.value = true;
  } else if (compName === "ChooseAreaComp") {
    isShowChooseIcon.value = isShowTrend.value = false;
    isShowChooseArea.value = true;
  } else if (compName === "ChooseTrend") {
    isShowChooseIcon.value = isShowChooseArea.value = false;
    isShowTrend.value = true;
  }
}

function chooseArea(vals: string[]) {
  console.log("已选择的省市区: ", vals);
}
</script>

<template>
  <p>
    <el-button type="primary" @click="changeComp('ChooseIconComp')"
      >图标选择</el-button
    >
    <el-button type="primary" @click="changeComp('ChooseAreaComp')"
      >省市区选择</el-button
    >
    <el-button type="primary" @click="changeComp('ChooseTrend')"
      >趋势选择</el-button
    >
  </p>
  <div class="async-comp" v-show="isShowChooseIcon">
    <keep-alive>
      <component :is="currentComp" />
    </keep-alive>
  </div>
  <m-choose-area v-show="isShowChooseArea" @choose-area="chooseArea" />
  <m-trend v-show="isShowTrend">
    <template #default> 插槽 </template>
  </m-trend>
</template>

<style scoped lang="scss"></style>
