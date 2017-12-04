<template>
  <div class="home">
    <topbar :biao="title" :left="true" :right="true" :name="name"></topbar>
    <timedao></timedao>
    <h1 @click="tiaotiao()">{{ msg }}</h1>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
      <polygon points="100,10 40,180 190,60 10,60 160,180" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
    </svg>
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="50" r="40" stroke="black" stroke-width="2" fill="red" />
    </svg>
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">

      <polygon points="220,100 300,210 170,250" style="fill:#cccccc;
  stroke:#000000;stroke-width:1" />

    </svg>
    <p>这是一个标题</p>
    <div class="pay" @click="pay()">
      微信支付
    </div>
    <ul>
      <!-- <li v-for="item in getdata">{{item.name}}</li> -->

    </ul>
    <a href='weixin://wap/pay?appid%3Dwxf5b5e87a6a0fde94%26noncestr%3D123%26package%3DWAP%26prepayid%3Dwx201412101630480281750c890475924233%26sign%3D53D411FB74FE0B0C79CC94F2AB0E2333%26timestamp%3D1417511263'>微信支付2</a>
    <ul>
      <ul>
        <li v-for="(item,index) in obj" :key="index">
          <img v-view="item.img" alt="" style="width:100%" @click="toDetail()">
          <p v-if="item.count>0">{{ item.count }}</p>
          <div class="addData" @click="changeNum(item)">+</div>
          <div class="addData" @click="reduceNum(item)" v-if="item.count>0">-</div>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import Topbar from "./commenHeader.vue"
import Timedao from "./time.vue"
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'home',
  components: {
    Topbar, Timedao
  },
  data() {
    return {
      name: "share2",
      title: "首页",
      msg: 'home',
      dataList: []
    }
  },
  methods: {
    ...mapMutations([
      "changeList",
      "changeNum",
      'CHANGELOADING'
    ]),
    toDetail(){
      this.$router.push({
        name:"detail"
      })
    },
    tiaotiao(){
      window.location.href = "http://www.baidu.com"
    },
    reduceNum(item) {
      item.count--
    },
    getdataHome() {
      // this.dataList = this.$store.state.obj
      this.$store.dispatch("")
    },
    isWeiXin() {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
      } else {
        return false;
      }
    },
    pay() {
      if (this.isWeiXin()) {
        if (typeof WeixinJSBridge == "undefined") {
          if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
          } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
          }
        } else {
          this.onBridgeReady();
        }
      } else {
        window.location = "https://wx.tenpay.com/cgi-bin/mmpayweb-bin/checkmweb?prepay_id=wx20161110163838f231619da20804912345&package=1037687096&redirect_url=https%3A%2F%2Fwww.wechatpay.com.cn"
      }
    },
    add() {
      this.$store.commit("JIA", 1)
    },
    getAddress() {
    },
    onBridgeReady() {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": "wx2421b1c4370ec43b",     //公众号名称，由商户传入
          "timeStamp": "1395712654",         //时间戳，自1970年以来的秒数
          "nonceStr": "e61463f8efa94090b1f366cccfbbb444", //随机串
          "package": "prepay_id=u802345jgfjsdfgsdg888",
          "signType": "MD5",         //微信签名方式：
          "paySign": "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
        },
        function(res) {
          console.log(res)
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            alert("支付成功")
          }     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }
      );
    }
  },
  computed: {
    ...mapState([
      'obj'
    ]),
    getdata() {
      return this.$store.state.num
    }
  },
  created() {
    this.$store.dispatch('gethomeaData');
    setTimeout(() => {
      this.CHANGELOADING()
    }, 1000)
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  font-size: 16px;
}

.pay {
  display: block;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: #44b549;
  color: #fff;
}

.addData {
  width: 50px;
  height: 50px;
  background: red;
  color: #fff;
  text-align: center;
  line-height: 50px;
}
/* .home{
  img{
    width: 100px;
    height: 100px;
  }
} */
</style>
