<template>
  <div id="app">

      <load v-show="loading"></load>
      <router-view v-show="!loading"></router-view>
    <div class="bottomBar">
      <yd-tabbar bgcolor="#fff" :fixed='true' :exact="false" activeColor="#ccc" activeClass="aa">
        <yd-tabbar-item title="首页" link="/home" active>
            <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="购物车" link="/cart" active>
            <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
            <yd-badge slot="badge" type="danger" v-if="allNum>0">{{ allNum }}</yd-badge>
        </yd-tabbar-item>
        <yd-tabbar-item title="发现" active link="/discover">
            <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
            <yd-badge slot="badge" type="danger" v-if="index">{{ index }}</yd-badge>
        </yd-tabbar-item>
        <yd-tabbar-item title="我的" active link="/mine">
            <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
        </yd-tabbar-item>
      </yd-tabbar>
    </div>
    <div class="bai"></div>
  </div>
</template>

<script>
import load from "./components/loading.vue"
import {mapState} from "vuex"
export default {
  name: 'app',
  components:{
    load
  },
  data(){
    return{
      activea_flag:true,
      activeb_flag:false,
      activec_flag:false,
      index:1
    }
  },
  methods:{

  },
  computed:{
    ...mapState([
      'loading',
      'allNum'
    ])
  }
}
</script>

<style>
  #app{
    font-size: 16px;
  }
  .bai{
    height: 50px;
    width:100%;
  }
  .bottomBar{
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .aa{
    color: #09bb07;
  }
  .bai{
    height: 40px;
    width: 100%;
  }
</style>
