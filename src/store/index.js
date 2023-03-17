import { createStore } from "vuex";
import articleModule from './articleModule'
import commentsModule from "./commentsModule";

export default createStore({
    modules: {
        articleModule, commentsModule
    }
})

