<script setup>
import { useTopTapStore } from '../stores/toptap'
const taps = reactive([
  {
    name: '首页',
    link: '/'
  },
  {
    name: '沸点',
    link: '/essay'
  },
  {
    name: '课程',
    link: '/lessons'
  },
  {
    name: '直播',
    link: '/live'
  },
  {
    name: '活动',
    link: '/actions'
  },
  {
    name: '商城',
    link: '/shop'
  },
  {
    name: 'App',
    link: '/apps'
  },
  {
    name: '插件',
    link: '/plugins'
  }
])

const toptap = useTopTapStore()
toptap.isShow = true
console.log('header-tap is show: ' + toptap.isShow)

onMounted(() => {
  toptap.windowWidth = document.documentElement.clientWidth
  console.log('Width: ' + toptap.windowWidth)
  console.log(toptap.windowWidth > 600 ? 'pc' : 'mobile')
})
</script>

<template>
  <header class="tap-wrapper">
    <div class="tap" :class="[toptap.isShow ? 'tap-show' : 'tap-hidden']">
      <div class="tap-left">
        <NuxtLink to="/" class="logo">
          <img src="/juejin.ico" alt="juejin" />
        </NuxtLink> 
        <ul class="taps-pc" v-if="toptap.windowWidth > 600">
          <li v-for="tap in taps" :key="tap.id" class="tap-item"><NuxtLink :to="tap.link">{{ tap.name }}</NuxtLink></li>
        </ul>
        <div v-else class="tap-mobile-wrapper">
          <button class="button-taps">{{ $route.name }}</button>
          <ul class="taps-mobile">
            <li v-for="tap in taps" :key="tap.id" class="tap-item-mobile"><NuxtLink>{{ tap.name }}</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.tap-wrapper {
  z-index: 1000;
  position: relative;
  height: 4em;
}
.tap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 4px #e2dfdf;
  transition: all .2s;

  &.tap-show {
    transform: translateY(0);
  }
  &.tap-hidden {
    transform: translateY(-100%);
  }
}
.tap-left {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;

  .logo {
    margin: 0 1em;
    
    img {
      display: block;
      width: 2em;
      height: 2em;
    }
  }
}
.taps-pc {
  display: flex;
  line-height: 4em;
  font-size: 0.9em;
  color: #000;

  .tap-item {
    padding: 0 1em;
    cursor: pointer;
  }
}
.taps-mobile-wrapper {
  position: relative;
}
.taps-mobile {
  display: none;
  position: absolute;
}
</style>