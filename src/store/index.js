import { createStore } from "vuex";
import articleModule from './articleModule'
import commentsModule from "./commentsModule";
import analyticModule from "./analyticModule";

export default createStore({
    modules: {
        articleModule, commentsModule, analyticModule
    }
})

