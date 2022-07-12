<template>
  <div class="layout-wrapper">
    <div class="layout-header">
      <div class="logo">QIANKUN-PROJECT</div>
        <ul class="sub-apps">
          <li @click="goto({activeRule: '/'})">基座Home</li>
          <li v-for="item in microApps" :class="{active: item.activeRule === current}" :key="item.name" @click="goto(item)">{{ item.name }}</li>
        </ul>
      <div class="userinfo">主应用的state：{{ JSON.stringify(state) }}</div>
    </div>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref } from 'vue'
import { microApps } from '../qiankun'
export default defineComponent({
  setup() {
    console.log(microApps);
    
    const current = ref('/');
    const state = ref('');
    function goto (item: any) {
      history.pushState(null, item.activeRule, item.activeRule)
      // this.current = item.name
    }
    return {
      microApps,
      current,
      state,
      goto
    }
  }
})
</script>
<style>
 .layout-header{
    height: 50px;
    width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    line-height: 50px;
    position: relative;
  }
  .layout-header .logo {
    float: left;
    margin: 0 50px;
  }
  .layout-header .sub-apps {
    list-style: none;
    margin: 0;
  }
  .layout-header .sub-apps li{
    list-style: none;
    display: inline-block;
    padding: 0 20px;
    cursor: pointer;
  }
  .layout-header .sub-apps li.active{
    color: #42b983;
    text-decoration: underline;
  }
  .layout-header .userinfo{
    position: absolute;
    right: 100px;
    top: 0;
  }
</style>
