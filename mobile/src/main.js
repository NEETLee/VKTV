import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueFloatingBall from 'vue-floating-ball';
import 'ionicons/dist/css/ionicons.min.css';
import {Tabbar, TabbarItem, NoticeBar, Icon, Search, Swipe, SwipeItem, Lazyload, Image} from 'vant';

Vue.use(VueFloatingBall).use(Tabbar).use(TabbarItem).use(NoticeBar).use(Icon).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(Image);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
