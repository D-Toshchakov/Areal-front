<template>
 <v-container>
    <div class="mb-8"><h1>{{ $store.getters.getCurrentArticle.articleName }}</h1></div>
    <div>{{ $store.getters.getCurrentArticle.articleText }}</div>
 </v-container>
</template>


<script>
import store from '@/store'

export default {
    data() {
        return {
            title: '',
            text: '',
        }
    },

    methods: {
        displayArticle() {
        }
    },
    beforeMount() {
        this.$store.dispatch('fetchArticleById', this.$route.params['id'])
    },
    // mounted() { 
    // },
    computed: {
        // article() {
        //     const article = this.$store.getters.getArticleById(this.$state, this.$route.params['id'])
        //     title = article.articleName
        //     text =  article.articleText
        //     return {title, text}
        // }
    }
}
</script>