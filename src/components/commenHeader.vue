<template>
  <div id="app">
    <div class="topBar">
      <yd-navbar :title="biao" fixed bgcolor="#09bb07" color="#fff">
        <div slot="left" v-if="left" onclick="history.back()">
            <yd-navbar-back-icon color="#fff"></yd-navbar-back-icon>
        </div>
        <div slot="right" v-if='right'>
            <yd-icon :name="name" size="25px" color="#fff"></yd-icon>
        </div>
      </yd-navbar>
    </div>
    <div class="bai">
      
    </div>
  </div>
</template>

<script>
export default {
  props:['biao','left','right',"name"],
  name: 'app',
  data(){
    return{

    }
  },
  methods:{
  }
}
</script>

<style>
  .bai{
    height: 40px;
    width: 100%;
  }
</style>
