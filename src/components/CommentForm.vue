<template>
    <v-textarea
        auto-grow 
        padding-left="30px" 
        placeholder="Comment" 
        v-model="text"
    />
    <v-btn 
        class="mb-8" 
        color="indigo" 
        @click="addComment"
    >
        Post Comment
    </v-btn>
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
            if (this.text === '') {
                return
            }
            let comment = {
                commentText: this.text,
            }
            axios.post(`http://localhost:3000${this.$route.fullPath}/comment`, comment)
        }
    }
}
</script>