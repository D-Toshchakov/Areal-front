<template>
    <v-card 
        border 
        class="mb-2" 
        density="compact" 
        variant="text" 
        :text="comment.commentText" 
        max-width="70%"
    >
    <v-card-actions>
        <EditCommentModal :comment="comment"></EditCommentModal>
        <DeleteCommentModal :comment="comment"></DeleteCommentModal>
    </v-card-actions>
    </v-card>
</template>

<script>
import EditCommentModal from './EditCommentModal.vue';
import DeleteCommentModal from './DeleteCommentModal.vue';

export default {
    props: {
        comment: {
            type: Object,
        }
    },

    components: { EditCommentModal, DeleteCommentModal }
}
</script>