<script setup>
defineProps({
    Lists: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
  <div class="article-list">
    <template v-for="(item, idx) in Lists">
      <div v-if="Lists.item_type == 2" class="article-item-borer" :key="idx">
        
      </div>
      <div v-else-if="item.item_type == undefined" class="article-item-border">

      </div>
    </template>
  </div>
</template>