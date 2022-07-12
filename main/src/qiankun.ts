import { registerMicroApps, start } from 'qiankun';

interface microApp {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
}

const microApps: Array<microApp> = [
  {
    name: 'app-vue',
    entry: 'http://zb.jd.com:9001/',
    activeRule: '/app-vue',
  },
  {
    name: 'react-vue',
    entry: 'http://localhost:9002/',
    activeRule: '/react-vue',
  }
].map(app => {
  return {
    ...app,
    container: '#subapp-viewport',
    props: {
      baseRouter: app.activeRule
    }
  }
})

registerMicroApps(microApps);

function startMain() {
  start();
}
// 启动 qiankun
export { startMain, microApps }