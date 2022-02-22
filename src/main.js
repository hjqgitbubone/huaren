import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css';
import Vant from 'vant';
// import VueI18n from 'vue-i18n';
Vue.use(Vant);
// Vue.use(VueI18n);
Vue.config.productionTip = false
// const i18n=new VueI18n({
//   locale:localStorage.getItem('languageSet')||'zh',   //从localStorage里获取用户中英文选择，没有则默认中文
//   messages:{
//       'zh':require('./components/language/zh'),
//       'en':require('./components/language/en')
//   }
// })
new Vue({
   // i18n,   //把 i18n 挂载到 vue 根实例上
    router,
    store,
    render: h => h(App)
  }).$mount('#app')


