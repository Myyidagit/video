<template>
  <div class="cart">
    <topbar :biao="title" :left="true" :right="true" :name="name"></topbar>
      <div v-if="cartList.length<=0">
        购物车暂无数据
      </div>
      <ul v-if="cartList.length>0">
        <li v-for="(item,index) in cartList" :key="index">
          <img v-view="item.img" alt="" style="width:100%">

          <div class="add" @click="addd(item)">+</div>
          <p>{{ item.count }}</p>
          <div class="add" @click="jian(item)">-</div>
        </li>
      </ul>
    </yd-infinitescroll>
  </div>
</template>

<script>
import Topbar from "./commenHeader.vue"
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'cart',
  data() {
    return {
      name: "home",
      title: "购物车",
      msg: '购物车'
    }
  },
  methods: {
    ...mapMutations([
      'CHANGELOADING',
      "changeallNum"
    ]),
    add(item){
      item.count++
    }
  },
  computed: {
    ...mapState([
      'cartList'
    ])
  },
  created() {
    // this.$store.dispatch('gethomeaData');
    setTimeout(()=>{
      this.CHANGELOADING()
    },1000)
  },
  components: {
    Topbar
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add{
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>
