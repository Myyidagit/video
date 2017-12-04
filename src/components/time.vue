<template>
  <div class="time">
    <yd-cell-group>
    <yd-cell-item>
    <yd-icon slot="icon" name="phone3" size=".45rem"></yd-icon>
    <input type="text" slot="right" placeholder="请输入手机号码">

    <!-- ↓↓关键代码是这里↓↓ -->
    <yd-sendcode slot="right" 
    v-model="start1" 
    @click.native="sendCode1" 
    type="warning"
    ></yd-sendcode>
    <!-- ↑↑关键代码是这里↑↑ -->

  </yd-cell-item>
</yd-cell-group>
</div>
</template>

<script>
  export default {
    name: 'time',
    data () {
      return {
        start1: false
      }
    },
    methods: {
      sendCode1() {
        this.$dialog.loading.open('发送中...');
        setTimeout(() => {

          this.start = true;
          this.$dialog.loading.close();

          this.$dialog.toast({
            mes: '已发送',
            icon: 'success',
            timeout: 1500
          });

        }, 1000);
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
	font-size: 16px;
}
.time{
  
}
</style>
