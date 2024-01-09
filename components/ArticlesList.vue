<template>
  <div>
    <h2>Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <p>{{ article.body }}</p>
        <!-- You can add more details like createdAt here -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useArticleStore } from '@/stores/articles';

const articleStore = useArticleStore();
const articles = computed(() => articleStore.articles);

onMounted(async () => {
  await articleStore.fetchArticles();
});
</script>
