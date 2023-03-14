<template>
    <v-container>
        <v-text-field placeholder="Title" v-model="title" />
        <v-textarea placeholder="Text" v-model="text" />
        <v-btn class="mr-2" @click="addArticle">Create</v-btn>
        <v-btn class="mr-2" @click="addArticle">Close</v-btn>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        title: '',
        text: '',
    }),
    methods: {
        addArticle() {
            let article = {
                articleName: this.title,
                articleText: this.text,
            }
            axios.post('http://localhost:3000/article', article)
        }

    }
}
</script>