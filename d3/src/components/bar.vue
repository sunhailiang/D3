<template>
  <div class="bar" id="bar"></div>
</template>
<script>
import * as d3 from 'd3'
export default {
  mounted() {
    this.$nextTick(() => {
      // 添加画布
      var height = 300
      var width = 300
      var svg = d3
        .select('#bar')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      // 添加内容
      var dataSetY = [1, 2, 3, 4, 5, 6]
      var dataSet = [100, 200, 300, 400, 500, 600]

      // 比例尺

      var max = d3.max(dataSet)
      var linear = d3
        .scaleLinear()
        .domain([0, max])
        .range([0, 200])

      // 序数比例尺
      var index = [0, 1, 2, 3, 4, 5, 6, 7]
      var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'green']
      var ordinal = d3
        .scaleOrdinal()
        .domain(index)
        .range(colors)

      // 添加坐标
      var axis = d3.axisBottom(linear)

      // 处理y轴数据
      var maxY = d3.max(dataSetY)
      var yData = d3
        .scaleLinear()
        .domain([0, maxY])
        .range([180, 0])
      var ayis = d3.axisLeft(yData)

      // 追加x轴
      svg
        .append('g')
        .attr('transform', 'translate(50,230)')
        .attr('color', 'gray')
        .call(axis)

      // 追加y轴
      svg
        .append('g')
        .attr('transform', 'translate(48,50)')
        .attr('color', 'gray')
        .call(ayis)

      // 添加坐标轴
      var rectHeight = 30 // 矩形高度
      svg
        .selectAll('rect')
        .data(dataSet)
        .enter()
        .append('rect')
        .attr('x', 50)
        .attr('y', function(d, i) {
          return i * rectHeight // y轴的位置
        })
        .attr('width', function(d) {
          return linear(d) //宽度按照数组大小->使用比例尺
        })
        .attr('height', rectHeight - 2)
        .attr('fill', function(d, i) {
          return ordinal(i)
        })
        .attr('transform', 'translate(0,50)')
    })
  }
}
</script>
