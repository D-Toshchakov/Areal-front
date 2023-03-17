<template>
    <v-card 
        border 
        class="mb-2" 
        density="compact" 
        :title="article.articleName" 
        variant="text" 
        :text="article.articleText"
    >
        <template v-slot:actions>
            <RouterLink 
                style="text-decoration: none; padding-left: 8px;" 
                :to="{ name: 'article', params: { id: article.id }}"
            >
                View More
            </RouterLink>
        </template>
    </v-card>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        article: {
            type: Object,
            required: true,
        }
    },
    // components: { RouterLink }
}
</script>