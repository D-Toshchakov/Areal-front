<template>
    <v-dialog 
        v-model="dialog" 
        persistent 
        width="1024"
    >
    <template v-slot:activator="{ props }">
        <v-btn color="indigo" v-bind="props">
            Edit
        </v-btn>
    </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Edit Article</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <div>Title</div>
                            <v-text-field 
                            v-model="title" 
                            :model-value="title"
                        >
                    </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <div>Text</div>
                            <v-textarea 
                            v-model="text"
                            :model-value="text"
                        >
                    </v-textarea>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                    color="indigo" 
                    variant="text" 
                    @click="dialog = false"
                >
                    Close
                </v-btn>
                <v-btn 
                    color="indigo" 
                    variant="text" 
                    @click="editArticle(); dialog = false"
                >
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        title: '',
        text: '',
        dialog: false,
    }),

    beforeUpdate() {
        let article = this.$store.getters.getCurrentArticle
        this.title = article.articleName
        this.text = article.articleText
    },

    methods: {
        editArticle() {
            let article = {
                articleName: this.title,
                articleText: this.text,
            }
            axios.patch(`http://localhost:3000${this.$route.fullPath}`, article)
        }
    }
}
</script>