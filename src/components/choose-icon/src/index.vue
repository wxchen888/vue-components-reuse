<template>
  <el-button primary @click="isShowDialog = true"> 点击选择图标 </el-button>
  <el-dialog v-model="isShowDialog" title="选择图标">
    <div class="containter">
      <div
        class="item"
        v-for="item in iconComps.keys()"
        :key="item"
        @click="handleClick(item)"
      >
        <div class="icon">
          <component :is="iconComps.get(item)" />
        </div>
        <div class="text">{{ item }}</div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { iconComps } from "@/utils/use-icon";
import useCopy from "../use-copy";

const isShowDialog = ref(false);

function handleClick(text: string) {
  let value = `<${text} />`;
  useCopy(value);
  isShowDialog.value = false;
}
</script>
<script lang="ts">
export default {
  name: "ChooseIcon"
};
</script>

<style scoped lang="scss">
.containter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.item {
  width: 25%;
  font-size: 16px;
  .icon {
    display: flex;
    justify-content: center;
  }
  .text {
    text-align: center;
    margin-top: 10px;
  }
  svg {
    width: 3em;
    height: 3em;
  }
}
</style>
