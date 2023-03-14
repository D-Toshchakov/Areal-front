<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="article in articles" :key="article.id" cols="12">
        <Article :article="article"></Article>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Article from '../components/Article.vue';
import axios from 'axios'
import ArticleForm from '@/pages/ArticleFormPage.vue';

export default {
  components: {
    Article, ArticleForm
  },

  data: () => ({
    articles: [],
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