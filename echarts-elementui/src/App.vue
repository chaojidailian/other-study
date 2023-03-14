import DemoEcharts from './views/demo-echarts.vue';

<template>
  <nav>
    <el-button type="primary" size="default">按钮</el-button>
    <demo-echarts></demo-echarts>
  </nav>
</template>
<script lang="ts" setup>
import demoEcharts from './views/demo-echarts.vue'
import { defineComponent } from 'vue'
defineComponent({
  demoEcharts
})
</script>
<style></style>
