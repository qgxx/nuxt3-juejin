<script setup lang="ts">
import { useArtcileListStore } from '../stores/articleList'

const articleList = useArtcileListStore()

onMounted(() => {
    for (let i = articleList.articList.length; i < 10; i++)
        articleList.addList()
    if (articleList.isAdd) {
        articleList.addList();
        articleList.isAdd = false;
    }
})
</script>

<template>
  <div class="artic-list">
    <template v-for="arc in articleList.articList">
      <div class="arc-item">
        <div class="title">
            {{ arc.title }}
        </div>
        <div class="arc-cat">
           <ul>
              <li v-for="cat in arc.category">{{ cat }}</li>
           </ul>
        </div>
        <div class="arc-data">
          {{ arc.date }}
        </div>
        <div class="arc-title">
          {{ arc.title }}
        </div>
        <div class="arc-desc">
          {{ arc.describe }}
        </div>
        <div class="arc-view">
          {{ arc.view }}
        </div>
        <div class="arc-like">
          {{ arc.like }}
        </div>
        <div>
          {{ arc.comment }}
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.artic-list {
    .arc-item {
        border-top: 1px solid #7f7f7f;
    }
}
</style>