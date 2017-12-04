// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/reset.css"
Vue.config.productionTip = false
import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import axios from 'axios'
Vue.prototype.axios = axios
import store from './vuex/store'
Vue.use(YDUI)
//引入高德地图的插件
import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
  // 高德的key
  key: '59515b8ed25394b3423131a723fb22c0',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0' // 版本号
});
    // import VueLazyload from "vue-lazyload"
    // Vue.use(VueLazyload, {
    //         error: 'static/error.png', //这个是请求失败后显示的图片
    //         loading: 'http://www.huacolor.com/article/UploadPic/2011-6/2011613102336550.gif', //这个是加载的loading过渡效果
    //         try: 1 // 这个是加载图片数量
    //     })
import VueViewload from 'vue-viewload'
Vue.use(VueViewload, {
        defaultPic: 'http://www.huacolor.com/article/UploadPic/2011-6/2011613102336550.gif',
        errorPic: 'http://a0.att.hudong.com/77/31/20300542906611142174319458811.jpg',
        threshold: 50,
        effectFadeIn: true,
        // callback: function(ele, src) {
        //     console.log(ele.nodeName + '...' + src);
        // }
    })
    /* eslint-disable no-new */
router.beforeEach((route, redirect, next) => {
    /* 显示加载中动画 */
    store.commit('CHANGELOADING');
    next();
})
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})
