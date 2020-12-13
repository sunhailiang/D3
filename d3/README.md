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
