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
            <v-btn color="indigo">
                <RouterLink 
                    style="text-decoration: none; color: inherit;" 
                    :to="{ name: 'article', params: { id: article.id }}"
                >
                    View More
                </RouterLink>
            </v-btn>
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
    components: { RouterLink }
}
</script>