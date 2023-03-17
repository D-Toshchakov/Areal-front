<template>
    <v-card 
        border 
        class="mb-2" 
        density="compact" 
        variant="text" 
        :text="comment.commentText" 
        max-width="70%"
    >
    </v-card>
</template>

<script>
export default {
    props: {
        comment: {
            type: Object,
        }
    },
}
</script>