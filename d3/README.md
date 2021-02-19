# D3js

2d 数据展示渲染库，本质通过 js 操作 svg,css,在数据可视化自定义图表领域大放异彩

## 特征

- 可链式调用
- 语法神似 jquery
- 学习方式也类似 jquery

## 使用方式

- vue 或者 react 等框架引用
  - cnpm i d3 --serve-dev
- 按需加载
  `import {} from 'd3'`
- 接下来就想用 jquery 一样用 api
  - 不过是操作 dom
    > 以 vue 为例

```js
;<div ref="base">index</div>

import * as d3 from 'd3'
export default {
  mounted() {
    this.$nextTick(() => {
      d3.select(this.$refs.base)
        .text('fuck')
        .style('font-size', '30px')
        .style('color', 'red')
    })
  }
}
```

## 基本语法

### 选择元素

- select
- selectAll

### 数据绑定

**d3:可以将数据绑定到 dom 上，绑定完成后当需要依靠这个数据才能操作 dom 时会很方便**

- datum() 绑定一个数据到选择集上
- data() 绑定一个数组到选择集上，数组的各项值与选择集的各项元素绑定

> datum()

```js
;<div ref="base">
  <p></p>
  <p></p>
  <p></p>
  <p></p>
</div>
this.$nextTick(() => {
  d3.select(this.$refs.base)
    .selectAll('p')
    .datum('绑定的内容')
    .text((d, i) => {
      console.log(i)
      return d
    })
})
```

> data()

```js
this.$nextTick(() => {
  let arr = ['内容1', '内容2', '内容3', '内容4']
  d3.select(this.$refs.base)
    .selectAll('p')
    .data(arr)
    .text((d, i) => {
      console.log(i)
      return d
    })
})
```

### 插入元素

> append() 后面追加一个元素

```js
d3.select(this.$refs.base)
  .select('.p2')
  .append('h1')
  .text('插入')
```

> insert() 在某元素之前插入一个元素

```js
d3.select(this.$refs.base)
  .insert('h3', '.p2')
  .text('干')
```

### 删除元素

> remove()

```js
d3.select(this.$refs.base).remove('p')
```

## SVG(核心)

### demo

```html
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C/DTD SVG 1.1 //EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="50" r="40" stroke="black" stroke-width="0" fill="blue" />
</svg>
```

```js
// cx：x轴的位置
// vy: y轴的位置
// r: 圆的半径
// stroke: 边框颜色
// stroke-width： 边框粗细
// fill：填充颜色
```

- 在 vue 等框架中引用
  - import icon from '@/assets/svgs/circle.svg'
  - 当做组件引用
- 在 html 中使用
  - <embed src="svg的路径" type="image/svg+xml" />

### svg 可以画哪些图形

```js
// 矩形
<rect/>
// 圆形
<circle/>
// 椭圆
<ellipse/>
// 线
<line/>
// 折线
<polyline/>
// 多边形
<polygon/>
// 路径
<path/>
```

### svg DEMO

#### 矩形

```html
<rect
  width="100"
  height="100"
  stroke="red"
  stroke-width="1"
  fill="yellow"
  fill-opacity="0.2"
  x="30"
  y="30"
  stroke-opacity="0.3"
/>
```

> 基本属性，注意这些属性可以单独写，也可以在 style 中写

```js
// 基本属性
width = '100' // 宽度
height = '100' // 高度
stroke = 'red' // 边框颜色
stroke - width = '1' // 边框宽度
fill = 'yellow' // 填充颜色
fill - opacity = '0.2' // 填充颜色透明度
x = '30' // x轴位移
y = '30' // y轴位移
stroke - opacity = '0.3' // 边框透明度
```

#### 圆形

```html
<circle cx="100" cy="50" r="40" stroke="black" stroke-width="0" fill="blue" />
```

> 属性

```js
// r:指的圆的半径
// cx：圆心x轴坐标
// cy: 圆心y轴坐标
```

#### 椭圆

```html
<ellipse
  width="100"
  height="100"
  rx="100"
  ry="50"
  stroke="red"
  stroke-width="1"
  fill="yellow"
  fill-opacity="0.2"
  cx="150"
  cy="100"
  stroke-opacity="0.3"
/>
```

> 属性

```js
// X轴
rx = '100'
// y轴
ry = '50'
```

#### 直线

```html
<line x1="0" x2="100" y1="0" y2="100" stroke="red" stroke-width="5" />
```

> 属性

```js
// 起始点x轴位置
x1
// 结束点x轴位置
x2
// 起始点y轴位置
y1
// 结束点y轴位置
y2
```

#### 多边形

```html
<polygon
  points="100,100 400,100 400,400 100,400"
  fill="green"
  stroke="red"
  stroke-width="3"
/>
```

```js
//  点绘制
points = '100,100 400,100 400,400 100,400'
//  每逗号为一组，绘制一个点，绘制顺序为顺时针
```

#### path

```html
<path d="M150 0 L75 200 L225 200 Z" />
```

```js
 M=moveTo //起始点
 L=lineTo //线起始点
 H=horizontal lineto //水平线位置
 V=vertical lineto //垂直线
 C=curveto //曲线
 S=smooth curveto //平滑曲线
 Q=quadratic bezier  curve  //贝塞尔曲线
 T= smooth quadratic bezier  curve //贝塞尔平滑曲线
 A= elliptical acr //椭圆弧度
 Z= closepath //关闭路径
```

#### 文本

```html
<text x="50" y="50" fill="red">
  aaaa
</text>
```

#### svg 和 canvas 的区别（面试常问）

- **区别一:**绘制图片格式不同，canvas 的工具 getContext 绘制出来的都能以 png 或者 jpg 格式保存存储图像可以叫做位图
- **区别二:**svg 在 html5 中直接绘制，但是绘制的是矢量图
- **区别三:**位图依赖分辨率，矢量图则不依赖所以区别在于他俩绘制出来的图片格式不同所造成
- **区别四:**canvas 不支持事件处理，svg 支持事件处理
- **区别五:** canvas 绘制的元素都在画布内，不能用 js 获取
- **区别六:** canvas 是逐像素绘制，绘制完成浏览器就不再关注， svg 是通过 dom 操作显示的，所以 canvas 文本渲染能力弱，所以 svg 更适合大型渲染任务，比如地图，而 canvas 适合被频繁重绘渲染的场景，比如游戏

#### 一个简单的柱状图

```js
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
      var dataSet = [250, 210, 170, 173, 200, 100]
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
          return d //宽度按照数组大小
        })
        .attr('height', rectHeight - 2)
        .attr('fill', 'blue')
    })
  }
}
```

#### 比例尺的应用

- 如果上面的 demo，用数据表示绘制图形，总有些不妥。过大和过小都不合适。如：

```js
var dataSet = [2.5, 2.1, 2.6, 0.5, 1]
var dataSet = [1000, 2000, 3000, 5000, 5500]
```

- 如上所示，数据太小不合适，数据太大，画布都没那么长
- 怎么解决这个问题？
- **比例尺 Scale**

> 使用了比例尺的 DEMO

```js
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
      //   var dataSet = [1, 2, 3, 4, 5, 6]
      var dataSet = [100, 200, 300, 400, 500, 600]

      // 设置比例尺
      var min = d3.min(dataSet)
      var max = d3.max(dataSet)
      var linear = d3
        .scaleLinear()
        .domain([min, max])
        .range([1, 300])
      // 结束比例尺
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
          return linear(d) //使用比例尺
        })
        .attr('height', rectHeight - 2)
        .attr('fill', 'blue')
    })
  }
}
```

- 是不是发现一个问题？少一个图？？
  - 这是因为在分段时，有一个坐标轴起点默认为 0
  - 将 domain([min, max]) => domain([0, max])

#### 叙述比例尺应用

- 解决什么问题，比如你想将你写的图标颜色渲染成你想要的眼色

```js
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
      //   var dataSet = [1, 2, 3, 4, 5, 6]
      var dataSet = [100, 200, 300, 400, 500, 600]

      // 比例尺
      var min = d3.min(dataSet)
      var max = d3.max(dataSet)
      var linear = d3
        .scaleLinear()
        .domain([min, max])
        .range([100, 200])

      // 序数比例尺
      var index = [0, 1, 2, 3, 4, 5, 6, 7]
      // 你想要的颜色
      var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'green']
      var ordinal = d3
        .scaleOrdinal()
        .domain(index)
        .range(colors)

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
          return linear(d) //使用比例尺
        })
        .attr('height', rectHeight - 2)
        .attr('fill', function(d, i) {
          return ordinal(i) // 使用序数比例尺
        })
    })
  }
}
```

#### 添加坐标轴

```js
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
        .attr('transform', 'translate(0,50)') // 调整画图的位置
    })
  }
}
```
