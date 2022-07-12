import './public-path';
import Vue from "vue";
import VueRouter from 'vue-router';
import routes from "./router";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#container-vue");

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#container-vue') : '#container-vue');
}

// 独立运行时
console.log('window.__POWERED_BY_QIANKUN__', window.__POWERED_BY_QIANKUN__);
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}
