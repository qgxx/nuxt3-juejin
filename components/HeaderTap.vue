<script setup>
import { link } from 'fs';
import {useTopTapStore } from '../stores/toptap'

const navs = reactive([
  {
    name: '首页',
    link: '/'
  },
  {
    name: '沸点',
    link: '/point'
  },
  {
    name: '课程',
    link: '/lesson'
  },
  {
    name: '直播',
    link: '/zhibo'
  },
  {
    name: '活动',
    link: './action'
  },
  {
    name: '商城',
    link: './shop'
  },
  {
    name: 'App',
    link: './app'
  },
  {
    name: '插件',
    link: './plugin'
  }
])

const toptap = useTopTapStore()
toptap.isShow = true
</script>

<template>
  <header class="tap-wrapper">
    <div class="tap" :class="[toptap.isShow ? 'tap-show' : 'tap-hidden']">
      <div class="tap-main">
        <NuxtLink to="/" class="logo">
          <img src="/juejin.ico" alt="juejin" />
        </NuxtLink>
        <ul class="taps-pc">
          <li v-for="nav in navs" :key="nav.id" class="tap-item"><NuxtLink :to="nav.link">{{ nav.name }}</NuxtLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.tap-wrapper {
  z-index: 1000;
  position: relative;
  height: 60px;
}
.tap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 4px #eee;
  transition: all .2s;

  &.tap-show {
    transform: translateY(0);
  }
  &.tap-hidden {
    transform: translateY(-100%);
  }
}
.tap-main {
  display: flex;
  align-items: center;
  max-width: 960px;
  height: 100%;
  margin: 0 auto;

  .logo {
    margin-right: 20px;
  }
}
.taps-pc {
  display: flex;
  line-height: 60px;
  font-size: 16px;
  color: #71777c;

  .tap-item {
    padding: 0 20px;
    cursor: pointer;
  }
}
</style>