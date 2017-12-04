<template>
  <div class="mine">
    <topbar :biao="title" :left="true" :right="true" :name="name"></topbar>
    <div class="amap-page-container">
      <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
      </el-amap>
    </div>
    <div class="video">
      <video class="myVideo" id="video" @click="showplayBtn()">
        <source src="../assets/movie.ogg">
      </video>
      <transition name="fade" mode='out-in'>
        <div class="control" v-show="controlShow">
          <li></li>
          <li>
            <div class="timeline"></div>
            <div class="qiu"></div>
          </li>
          <li>
            <span class="currentTime">{{currentTime}}</span>/
            <span class="allTime">{{allTime}}</span>
          </li>
          <li></li>
        </div>
      </transition>
      <transition name="fade" mode='out-in'>
        <div :class="playorpluse ? 'bofangBtn' : 'pluseBen' " @click="play()" v-show="controlShow">
        </div>
      </transition>
    </div>
    <div class="bai"></div>

  </div>
</template>

<script>
// import AMap from 'AMap'
// import AMapUI from 'AMapUI'
import Topbar from "./commenHeader.vue";
import { amapManager } from "vue-amap";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "mine",
  components: {
    Topbar
  },
  data() {
    return {
      // 播放器的功能
      playorpluse: true, //切换视频中的播放暂停样式
      controlShow: true, //控制播放器控制器的显示隐藏
      allTime:"00:00",
      currentTime:"00:00",
      name: "home",
      title: "mine",
      msg: "mine",
      amapManager,
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init: o => {
          console.log(o.getCenter());
          console.log(this.$refs.map.$$getInstance());
          o.getCity(result => {
            console.log(result);
          });
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          alert("map clicked");
        }

      },
      plugin: [
        "ToolBar",
        {
          pName: "MapType",
          defaultType: 0,
          events: {
            init(o) {
              console.log(o);
            }
          }
        }
      ]
    };
  },
  methods: {
    showplayBtn() {
      if (this.controlShow == false) {
        this.controlShow = true;
      }
    },
    play() {
      this.playorpluse = !this.playorpluse;
      var video = document.getElementById("video");
      if (this.playorpluse != true) {
        video.play();
      } else {
        video.pause();
      }
      setTimeout(() => {
        this.controlShow = false;
      }, 1000)
    },
    ...mapMutations(["CHANGELOADING"]),
    addMarker: function() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    }
  },
  watch: {},
  computed: {
    ...mapState(["obj"])
  },
  created() {
    this.$store.dispatch("gethomeaData");
    setTimeout(() => {
      this.CHANGELOADING();
    }, 1000);
  },
  mounted() {
    window.onload = function() {
      var myVideo = document.getElementById("video")
      console.log(myVideo.duration)
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.amap-demo {
  height: 300px;
}
.video {
  position: relative;
}
.myVideo {
  width: 100%;
  height: 300px;
  margin: 0;
  padding: 0;
}
.bofangBtn {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: url(../assets/ios/1@3x.png) no-repeat center center;
  background-size: 100%;
  z-index: 99;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.pluseBen {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: url(../assets/ios/2@3x.png) no-repeat center center;
  background-size: 100%;
  z-index: 99;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.control {
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  color: #fff;
  overflow: hidden;
}
.control li {
  height: 40px;
  line-height: 40px;
}
.control li:first-child {
  width: 10%;
  background: url(../assets/ios/3@3x.png) no-repeat 15px center;
  background-size: 15px;
  text-align: center;
}
.firstLiZan {
  width: 10%;
  background: url(../assets/ios/4@3x.png) no-repeat 10px center;
  background-size: 15px;
  text-align: center;
}
.control li:nth-child(2) {
  width: 60%;
  margin-left: 3px;
  position: relative;
}
.timeline {
  width: 100%;
  height: 2px;
  background: white;
  margin-top: 20px;
}
.qiu {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 13px;
  left: 0;
}
.control li:nth-child(3) {
  width: 20%;
  text-align: center;
  font-size: 12px;
  margin-left: 5px;
}
.control li:nth-child(4) {
  width: 10%;
  /* margin-left: 2px; */
  text-align: center;
  font-size: 12px;
  background: url(../assets/ios/5@3x.png) no-repeat 9px center;
  background-size: 20px;
}
.xiaoping {
  width: 10%;
  margin-left: 2px;
  text-align: center;
  font-size: 12px;
  background: url(../assets/ios/6@3x.png) no-repeat 9px center;
  background-size: 20px;
}
.bai {
  width: 100%;
  height: 300px;
}
</style>
