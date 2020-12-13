const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
	chainWebpack: config => {
		const svgRule = config.module.rule('svg')

		svgRule.uses.clear()
		// 添加要替换的 loader
		svgRule.use('vue-svg-loader').loader('vue-svg-loader')
		config.module
			.rule('svg')
			.exclude.add(resolve('@/assets/icons'))
			.end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('@/assets/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				sysmbolId: 'icon-[name]'
			})
			.end()
	}
}
