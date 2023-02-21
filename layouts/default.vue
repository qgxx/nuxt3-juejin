<script setup>
import HeaderTap from '~~/components/HeaderTap.vue';
</script>

<template>
  <HeaderTap />
  <main>
    <slot/>
  </main>
</template>

<style scoped lang="scss">
main {
  background-color: #f4f4f4;
  min-height: 1000vh;
}
</style>