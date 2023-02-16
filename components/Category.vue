<script setup>
import { useTopTapStore } from '~~/stores/toptap';
import { NScrollbar } from 'naive-ui'

const toptap = useTopTapStore()

defineProps({
    channels: {
        type: Array,
        default: () => []
    }
})

</script>

<template>
  <nav class="nav-wrapper">
    <div class="nav-main" :class="[toptap.isShowTopTap ? '' : 'nav-sticky']">
      <ul class="nav-list" v-if="toptap.windowWidth > 1000">
        <li class="nav-item" v-for="nav in channels" :key="nav.id">{{ nav.name }}</li>
        <NuxtLink class="navs-manager">标签管理</NuxtLink>
      </ul>    
    </div>
  </nav>
</template>

<style scoped lang="scss">
.nav-wrapper {
    height: 15%;
}
.nav-main {
    z-index: 900;
    position: fixed;
    left: 0;
    top: 4em;
    width: 100%;
    background: #fff;
    border-bottom: 2px solid #eee;
    transform: all 0.2s;

    &.nav-sticky {
        top: 0;
    }
}
.nav-list {
    display: flex;
    flex-shrink: 0;
    width: 80%;
    margin: 0px auto;
    font-size: 0.9em;
    line-height: 2em;

    .nav-item {
        padding: 0 1rem;
        cursor: pointer;
    }
    .navs-manager {
        position: absolute;
        right: 5%;
    } 
}
</style>