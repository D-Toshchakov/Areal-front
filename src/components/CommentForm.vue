<template>
    <v-textarea
        auto-grow 
        padding-left="30px" 
        placeholder="Comment" 
        v-model="text"
    />
    <v-btn class="mb-8" @click="addComment">Post Comment</v-btn>
</template>

<script>
import axios from 'axios'

export default {    
    data() {
        return {
            text: '',
        }
    },
    methods: {
        addComment() {
            let comment = {
                commentText: this.text,
            }
            console.log('TEXT', this.text);
            axios.post(`http://localhost:3000${this.$route.fullPath}/comment`, comment)
        }
    }
}
</script>