<template>
  <v-container>
    <Article v-for="article in articles" v-bind:article="article"/>
  </v-container>
</template>

<script>
import Article from './Article.vue';
import axios from 'axios'

export default {
  components: {
    Article
  },
  
  data: () => ({
    articles: []
  }),
  
  mounted() {
    this.fetchAllArticles()
  },

  methods: {
    fetchAllArticles() {
      axios.get('http://localhost:3000/article')
        .then(response => this.articles = response.data)
    }
  }
}
</script>