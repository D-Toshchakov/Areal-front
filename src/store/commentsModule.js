import axios from "axios"

export default {
    state: {
        comments: [],
    },

    mutations: {
        setComments(state, payload) {
            state.comments = payload
        }
    },

    getters: {
        getAllComments(state) {
            return state.comments
        },
    },

    actions: {
        fetchCommentsByArticleId(context, id) {
            axios.get(`http://localhost:3000/article/${id}/comment`)
                .then(response => context.commit('setComments', response.data))
        }
    }
}