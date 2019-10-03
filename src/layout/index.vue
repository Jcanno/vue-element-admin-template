<template>
	<el-container class="container">
		<siderbar class="siderbar" />
		<el-container>
			<el-header height>
				<h1>我是头部</h1>
			</el-header>
			<el-main height>
				<h1>我是内容</h1>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import Siderbar from './components/SideBar.vue';
export default {
	name: 'layout',

	components: {
		Siderbar
	},

	data() {
		return {};
	},

	methods: {},

	computed: {},

	created() {},

	mounted() {}
};
</script>

<style lang="scss">
.container {
	height: 100%;
	width: 100%;
}

.siderbar {
	height: 100%;
}
</style>
