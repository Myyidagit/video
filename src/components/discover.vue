<template>
  <div class="discover">
    <topbar :biao="title" :left="true" :right="true" :name="name"></topbar>
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item,index) in obj" :key="index">
        <p>{{ item.firstCatName }}</p>
        <!-- <img v-lazy="item.img" alt="" style="width:100%"> -->
        <img v-view="item.img" alt="" style="width:100%">

        <div>
          <span>_</span>
          <span>{{item.count}}</span>
          <span>+</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Topbar from "./commenHeader.vue"
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'discover',
  components: {
    Topbar
  },
  data() {
    return {
      name: "home",
      title: "discover",
      msg: 'discover'
    }
  },
  methods: {
    ...mapMutations([
      'CHANGELOADING',
    ]),
    ...mapActions([
      'gethomeaData'
    ])
  },
  computed: {
    ...mapState([
      'obj'
    ])
  },
  created() {
    // this.$store.dispatch('gethomeaData');
    this.gethomeaData()
    setTimeout(()=>{
      this.CHANGELOADING()
    },1000)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
