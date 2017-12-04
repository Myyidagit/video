<template>
	<div class="center">
		<topbar :biao="title" :left="true" :right="true" :name="name"></topbar>
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
	import Topbar from "./commenHeader.vue"
	export default {
		name: 'center',
		components:{
			Topbar
		},
		data () {
			return {
				name:"home",
				title:"购物车",
				msg: 'center'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
