import Layout from '@/layout';
/**
 * path: 路径
 * name: 路由名称
 * meta: {
 *   title: 菜单名称
 * 	 icon: 菜单图标
 *   lazyload: 是否懒加载
 * 	 noCache: 是否缓存
 * 	 hidden: 是否在菜单栏显示
 * }
 */
const routes = [
	{
		path: '/',
		name: 'home',
		component: Layout,
		meta: {
			title: '首页',
			icon: 'el-icon-user-solid',
			lazyLoad: false,
			noCache: false,
			breadcrumb: false,
			hidden: false
		},
		children: []
	}
];

export default routes;
