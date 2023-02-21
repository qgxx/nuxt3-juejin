<script setup lang="ts">
import { useArtcileListStore } from '../stores/articleList'

const articleList = useArtcileListStore()

onMounted(() => {
    for (let i = articleList.articList.length; i < 10; i++)
        articleList.addList()
})
</script>

<template>
  <div>6</div>
</template>