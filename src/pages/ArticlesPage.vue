<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="article in $store.getters.getAllArticles" :key="article.id" cols="12">
        <Article :article="article"></Article>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Article from '../components/Article.vue';
import ArticleForm from '@/pages/ArticleFormPage.vue';

export default {
  components: {
    Article, ArticleForm
  },

  data() {
    return {articles: [],} 
  },

  mounted() {
    this.$store.dispatch('fetchAllArticles')
  },

  methods: {
  }
}
</script>