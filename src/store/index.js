import { createStore } from "vuex";
import articleModule from './articleModule'

export default createStore({
    modules: {
        articleModule
    }
})

