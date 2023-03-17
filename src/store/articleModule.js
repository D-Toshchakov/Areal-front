import axios from "axios"

export default {
    state: {
        articles: [],
        currentArticle: {}
    },

    mutations: {
        setArticles(state, payload) {
            state.articles = payload
        },
        
        setCurrentArticle(state, payload){
            state.currentArticle = payload
        }
    },

    getters: {
        getAllArticles(state) {
            return state.articles
        },

        getCurrentArticle(state) {
            return state.currentArticle
            // for (let article in state.articles) {
            //     if (article.id === id) {
            //         return article
            //     }
            // }
        }
    },

    actions: {
        fetchAllArticles(context) {
            axios.get('http://localhost:3000/article')
                .then(response => context.commit('setArticles', response.data))
        },

        fetchArticleById(context, id) {
            console.log('article id is', id);
            axios.get(`http://localhost:3000/article/${id}`)
                .then(response => context.commit('setCurrentArticle', response.data))
        }
    }
}