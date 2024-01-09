// services/apiService.js

import axios from 'axios';

const BASE_URL = process.env.STRAPI_BASE_URL;

export const apiService = {
    async getArticles() {
        try {
            const response = await axios.get(`${BASE_URL}/articles`);
            // Assuming the response structure is as you provided
            return response.data.data.map(item => ({
                id: item.id,
                ...item.attributes
            }));
        } catch (error) {
            console.error('Error fetching articles:', error);
            throw error;
        }
    },

    // Other API methods will go here
};
