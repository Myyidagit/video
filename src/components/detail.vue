<template>
  <div class="detail">
  <topbar :biao="title" :left="true" :right="true" :name="name"></topbar>
	<h2>详情</h2>
  </div>
</template>

<script>
import Topbar from "./commenHeader.vue"
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
	name: 'detail',
	components: {
		Topbar
	},
	data() {
		return {
			title:"详情"
		}
	},
	methods: {
		...mapMutations([
			'CHANGELOADING'
			]),
	},
	created() {
		setTimeout(() => {
			this.CHANGELOADING()
		}, 1000)
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
