<template>
	<el-aside width="200px">
		<el-menu mode="vertical" background-color="#ea6262" router default-active="0" @select="handleSelect">
			<el-submenu v-for="(submenus, index) in menus" :index="submenus.path" :key="index">
				<template slot="title">
					<i :class="submenus.meta.icon"></i>
					<span>{{ submenus.meta.title }}</span>
				</template>
				<el-menu-item
					v-for="(item, subIndex) in submenus.children"
					:key="subIndex"
					:index="index + 1 + '-' + (subIndex + 1)"
				>
					{{ item.title }}
				</el-menu-item>
			</el-submenu>
		</el-menu>
	</el-aside>
</template>

<script>
import routes from '@/router/routes';
export default {
	name: 'sidebar',

	components: {},

	data() {
		return {
			menus: routes
		};
	},

	methods: {
		handleSelect() {}
	},

	computed: {},

	created() {},

	mounted() {}
};
</script>
