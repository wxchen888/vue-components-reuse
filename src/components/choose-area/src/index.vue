<template>
  <div class="container">
    <el-select v-model="provinceData" clearable placeholder="选择省份">
      <el-option
        v-for="geojson in geojsons"
        :key="geojson.name"
        :value="geojson.name"
        :label="geojson.name"
      />
    </el-select>
    <el-select
      v-model="cityData"
      clearable
      placeholder="选择城市"
      :disabled="!provinceData"
    >
      <el-option
        v-for="(city, index) in geojsons.find(
          (item) => item.name === provinceData
        )?.city"
        :key="index"
        :value="city.name"
        :label="city.name"
      />
    </el-select>
    <el-select
      v-model="areaData"
      clearable
      placeholder="选择区域"
      :disabled="!provinceData || !cityData"
    >
      <el-option
        v-for="(area, index) in geojsons
          .find((item) => item.name === provinceData)
          ?.city.find((j) => j.name === cityData)?.districtAndCounty"
        :key="index"
        :value="area"
        :label="area"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import geojsons from "../use-areas";

const provinceData = ref("");
const cityData = ref("");
const areaData = ref("");
const emits = defineEmits(["choose-area"]);
watch(
  () => [provinceData.value, cityData.value, areaData.value],
  (vals, pres) => {
    if (!vals[0]) {
      provinceData.value = cityData.value = areaData.value = "";
    } else if (!vals[1]) {
      cityData.value = areaData.value = "";
    } else if (!vals[2]) {
      areaData.value = "";
    } else {
      if (vals[0] !== pres[0]) {
        cityData.value = areaData.value = "";
      } else if (vals[1] !== pres[1]) {
        areaData.value = "";
      }
      if (vals[0] && vals[1] && vals[2]) {
        emits("choose-area", {
          provinceData: provinceData.value,
          cityData: cityData.value,
          areaData: areaData.value
        });
      }
    }
  }
);
</script>
<script lang="ts">
export default {
  name: "ChooseArea"
};
</script>
<style scoped lang="scss"></style>
