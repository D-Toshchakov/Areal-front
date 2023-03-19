import axios from "axios"

export default {
    state: {
        comments: [],
    },

    mutations: {
        setComments(state, payload) {
            state.comments = payload
        },
    },

    getters: {
        getAnalyticComments(state) {
            return state.comments
        },
        getAnalyticCommentsByArticleId: (state) => (id) => {
            const comms = []
            for (let comm of state.comments) {
                if (comm.articleId === id) {
                    comms.push(comm)
                }
            }
            return comms
        }
    },

    actions: {
        fetchCommentsByTimeRange(context, { dateFrom, dateTo }) {
            console.log(`http://localhost:3000/analytic/comments/?dateFrom=${dateFrom}&dateTo=${dateTo}`);
            axios.get(`http://localhost:3000/analytic/comments/?dateFrom=${dateFrom}&dateTo=${dateTo}`)
                .then(response => context.commit('setComments', response.data))
        },
    }
}