<template>
  <div ref="base">
    <p></p>
    <p class="p2"></p>
    <p></p>
    <p></p>
    <bar />
  </div>
</template>
<script>
import * as d3 from 'd3'
// import icon from '@/assets/svgs/circle.svg'
import bar from '@/components/bar.vue'
export default {
  components: {
    bar
  },
  mounted() {
    // this.$nextTick(() => {
    // 	d3.select(this.$refs.base)
    // 		.selectAll('p')
    // 		.datum('绑定的内容')
    // 		.text((d, i) => {
    // 			console.log(i)
    // 			return d
    // 		})
    // })

    this.$nextTick(() => {
      let arr = ['内容1', '内容2', '内容3', '内容4']
      d3.select(this.$refs.base)
        .selectAll('p')
        .data(arr)
        .text((d, i) => {
          console.log(i)
          return d
        })
      d3.select(this.$refs.base)
        .select('.p2')
        .append('h1')
        .text('插入')

      d3.select(this.$refs.base)
        .insert('h3', '.p2')
        .text('干')

      // d3.select(this.$refs.base).remove('p')
    })
  }
}
</script>
