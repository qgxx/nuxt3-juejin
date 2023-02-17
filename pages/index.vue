<script setup>
import Category from '../components/Category.vue'
import ArticleList from '~~/components/ArticleList.vue'
import AuthorRank from '../components/AuthorRank.vue'
import RecommendBook from '../components/RecommendBook.vue'

const List = reactive([])
</script>

<template>
  <div>
    <Category />
    <div class="index-wrapper">
      <div class="index-main">
        <div class="list-header">
          <ul class="list-nav">
            <li class="list-nav-item"></li>
          </ul>
        </div>
        <ArticleList lists="List"></ArticleList>
      </div>
      <div class="index-side">
        <AuthorRank></AuthorRank>
        <RecommendBook></RecommendBook>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-wrapper {
  display: flex;
  .index-main {
    width: 70%;
    margin-right: 2em;
    background-color: #fff;
    border-radius: 2px;
  }
  .index-side {
    width: 20%;
  }
}
.list-header {
  padding: 1em 2em;
  border-bottom: 1px solid #eee;
}
.list-nav {
  height: 3em;
  display: flex;
  align-items: center;

  .list-nav-item {
    display: inline-block;
    font-size: 0.9em;
    color: #8c8383;
  }
}
</style>