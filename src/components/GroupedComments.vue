<template>
    <v-container>
        <div>
            <h3>
                <RouterLink
                    style="text-decoration: none;"
                    :to="{ name: 'article', params: { id: article.id }}">
                    Article: {{ article.articleName }}
                </RouterLink>
            </h3>
        </div>
        <v-row 
            dense 
            v-if="$store.getters.getAnalyticComments.length > 0"
        >
            <v-col 
                v-model="comments"
                v-for="comment in comments" 
                :key="comment.id" 
                cols="12"
            >
                <Commentary :comment="comment" />
            </v-col>
        </v-row>
        <div v-else>There are no comments yet</div>
    </v-container>
</template>
    
<script>
import Commentary from './Commentary.vue';
export default {
    data: () => ({
        comments: []
    }),
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    mounted() {
        this.comments = this.$store.getters.getAnalyticCommentsByArticleId(this.article.id)
        console.log(this.comments);
    },
    components: {
        Commentary
    }
}
</script>