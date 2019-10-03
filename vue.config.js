'use strict';
const path = require('path');

function resolve(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : './',
	devServer: {},
	pages: {
		index: {
			entry: 'src/main.js',
			filename: 'index.html'
		}
	},
	//配置目录别名
	configureWebpack: {
		name: '',
		resolve: {
			alias: {
				'@': resolve('src'),
				_c: resolve('src/components')
			}
		}
	},
	chainWebpack(config) {
		// set preserveWhitespace
		config.module
			.rule('vue')
			.use('vue-loader')
			.loader('vue-loader')
			.tap(options => {
				options.compilerOptions.preserveWhitespace = true;
				return options;
			})
			.end();

		config
			// https://webpack.js.org/configuration/devtool/#development
			.when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-source-map'));

		config.when(process.env.NODE_ENV !== 'development', config => {
			config.optimization.splitChunks({
				chunks: 'all',
				cacheGroups: {
					libs: {
						name: 'chunk-libs',
						test: /[\\/]node_modules[\\/]/,
						priority: 10,
						chunks: 'initial'
					},
					elementUI: {
						name: 'chunk-elementUI',
						priority: 20,
						test: /[\\/]node_modules[\\/]_?element-ui(.*)/
					},
					commons: {
						name: 'chunk-commons',
						test: resolve('src/components'),
						minChunks: 3,
						priority: 5,
						reuseExistingChunk: true
					}
				}
			});
			config.optimization.runtimeChunk('single');
		});
	}
};
