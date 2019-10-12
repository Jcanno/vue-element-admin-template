<template>
	<Siderbar />
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
