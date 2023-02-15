<script setup>
import { useTopTapStore } from '~~/stores/toptap';
const toptap = useTopTapStore()

const navs = reactive([
    {
        name: '综合'
    },
    {
        name: '关注'
    },
    {
        name: '后端'
    },
    {
        name: '前端'
    },
    {
        name: 'Android'
    },
    {
        name: 'iOS'
    },
    {
        name: '人工智能'
    },
    {
        name: '开发工具'
    },
    {
        name: '代码人生'
    },
    {
        name: '阅读'
    }
])
</script>

<template>
  <nav class="nav-wrapper">
    <div class="nav-main" :class="[toptap.isShowTopTap ? '' : 'nav-sticky']">
      <ul class="nav-list" v-if="toptap.windowWidth > 1000">
        <li class="nav-item" v-for="nav in navs" :key="nav.id">{{ nav.name }}</li>
        <NuxtLink></NuxtLink>
      </ul>    
      <ul v-else>
        
      </ul>  
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-wrapper {
    height: 10%;
}
.nav-main {
    z-index: 900;
    position: fixed;
    left: 0;
    top: 4em;
    width: 100%;
    background: #fff;
    border-bottom: 3px solid #eee;
    transform: all 0.2s;

    &.nav-sticky {
        top: 0;
    }
}
.nav-list {
    display: flex;
    width: 80%;
    margin: 0px auto;
    font-size: 0.9em;
    line-height: 2em;

    .nav-item {
        padding: 0 1rem;
        cursor: pointer;
    }
}
</style>