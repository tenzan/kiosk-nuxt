<!-- pages/articles/index.vue -->

<script setup>
import { useArticleStore } from '@/stores/articles';
import ArticlesList from '@/components/ArticlesList.vue';

const articleStore = useArticleStore();

// Fetch articles on server-side if not already loaded
if (process.server) {
  await articleStore.fetchArticles();
}
</script>

<template>
  <div>
    <ArticlesList />
  </div>
</template>
