<template>
    <v-container>
        <div class="mb-8">
            <h1>{{ $store.getters.getCurrentArticle.articleName }}</h1>
        </div>
        <div class="mb-4">
            {{ $store.getters.getCurrentArticle.articleText }}
        </div>
       
        <EditArticleModal></EditArticleModal>
        <DeleteArticleModal></DeleteArticleModal>

        <div class="mb-4 mt-4">
            <h3>
                Comments
            </h3>
        </div>
        <CommentForm />
        <v-row dense v-if="$store.getters.getAllComments.length > 0">
            <v-col
                v-for="comment in $store.getters.getAllComments" 
                :key="comment.id"
                cols="12"
                >
                <Commentary :comment="comment"></Commentary>
            </v-col>
        </v-row>
        <div v-else>There are no comments yet</div>
    </v-container>
</template>


<script>
import Commentary from '../components/Commentary.vue';
import CommentForm from '../components/CommentForm.vue';
import EditArticleModal from '@/components/EditArticleModal.vue';
import DeleteArticleModal from '@/components/DeleteArticleModal.vue';

export default {
    beforeMount() {
        this.$store.dispatch('fetchArticleById', this.$route.params["id"]);
        this.$store.dispatch('fetchCommentsByArticleId', this.$route.params['id'])
    },
    
    components: { Commentary, CommentForm, EditArticleModal, DeleteArticleModal }
}
</script>