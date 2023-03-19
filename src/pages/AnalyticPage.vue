<template>
    <v-container>
        <div><h4>Pick two dates</h4></div>
        <VueDatePicker
            v-model="dateFrom"
            model-type="yyyy-MM-dd hh:mm:ss"
        
        />
        <VueDatePicker 
            v-model="dateTo" 
            model-type="yyyy-MM-dd hh:mm:ss" 
        />
        <v-btn
            @click="logDates(); getComments()"
        >
            Show comments for the period</v-btn>
    </v-container>
    <v-container>
        <v-row v-if="$store.getters.getAnalyticComments.length > 0">
            <v-col v-for="article in $store.getters.getAllArticles" :key="article.id" cols="12">
                <GroupedComments :article="article"/>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import Commentary from '@/components/Commentary.vue';
import GroupedComments from '@/components/GroupedComments.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: { VueDatePicker, Commentary, GroupedComments },
    data() {
        return {
            dateFrom: null,
            dateTo: null
        };
    },
    mounted() {
        this.$store.dispatch('fetchAllArticles')
    },
    methods: {
        // handleDate(modelData) {
        //     this.date = modelData;
        // },
        logDates() {
            console.log(this.dateFrom, this.dateTo);
        },

        getComments() {
            const dates = {
                dateFrom: this.dateFrom,
                dateTo: this.dateTo
            }
            this.$store.dispatch('fetchCommentsByTimeRange', dates)
        }
    }
}
</script>