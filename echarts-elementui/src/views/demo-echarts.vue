<template>
  <div class="demo-echarts">
    <div
      class="echarts-box"
      style="width: 600px; height: 400px; border: 1px solid red"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'

// const options: echarts.EChartsOption = {
//   // dataset: {
//   //   source: [
//   //     ['e', '2015', '2016', '2017'],
//   //     ['就业率', 50, 40, 95],
//   //     ['就业人数', 500, 300, 454],
//   //     ['就业比', 40, 39, 58]
//   //   ]
//   // },
//   dataset: {
//     // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
//     // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
//     // 如果不指定 dimensions，也可以通过指定 series.encode
//     // 完成映射，参见后文。
//     dimensions: ['product', '2015', '2016', '2017'],
//     source: [
//       { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
//       { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
//       { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
//       { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
//     ]
//   },
//   xAxis: {
//     type: 'category'
//     // data: ['吃饭', '喝茶', '聊天']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     // { type: 'bar', name: '2015', data: [60, 70, 90] },
//     // { type: 'bar', name: '2016', data: [89, 43, 54] },
//     // { type: 'bar', name: '2017', data: [52, 135, 89] }
//     {
//       type: 'bar',
//       label: { formatter: 'aaa{@product}bbb{@2015}ccc{@[2]}ddd' }
//     },
//     { type: 'bar' }
//   ]
// }

var options = {
  dataset: {
    source: [
      [12, 323, 11.2],
      [23, 167, 8.3],
      [81, 284, 12],
      [91, 413, 4.1],
      [13, 287, 13.5]
    ]
  },
  visualMap: {
    show: false,
    dimension: 2, // 指向第三列（列序号从 0 开始记，所以设置为 2）。
    min: 2, // 需要给出数值范围，最小数值。
    max: 15, // 需要给出数值范围，最大数值。
    inRange: {
      // 气泡尺寸：5 像素到 60 像素。
      symbolSize: [5, 60]
    }
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {},
  series: {
    type: 'scatter'
  }
}

onMounted(() => {
  const ech = echarts.init(
    document.querySelector('.echarts-box') as HTMLElement,
    '',
    {}
  )
  ech.setOption(options)
})
</script>

<style lang="less" scoped></style>
