<template>
    <v-dialog 
        v-model="dialog" 
        persistent 
        width="auto"
    >
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
                Delete
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5">
                Delete Article
            </v-card-title>
                <v-card-text>
                    Are you sure you want to delete this article?
                </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                    color="green-darken-1" 
                    variant="text" 
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                <v-btn 
                    color="green-darken-1" 
                    variant="text" 
                    @click="deleteArticle(); dialog = false"
                >
                    Delete
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>


<script>
import axios from 'axios';
export default {
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        deleteArticle() {
            axios.delete(`http://localhost:3000${this.$route.fullPath}`);
        }
    }
}
</script>