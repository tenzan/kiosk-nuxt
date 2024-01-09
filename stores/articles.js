// stores/articles.js

import {defineStore} from 'pinia';
import {apiService} from '@/services/apiService';

export const useArticleStore = defineStore('articles', {
    state: () => ({
        articles: [],
    }),

    actions: {
        async fetchArticles() {
            try {
                this.articles = await apiService.getArticles(); // Adjusted to use the new data format
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        },
    },
});
