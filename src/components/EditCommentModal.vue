<template>
    <v-dialog v-model="dialog" persistent width="512">
        <template v-slot:activator="{ props }">
            <v-btn color="indigo" v-bind="props">
                Edit
            </v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="text-h5">Edit Comment</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <div>Text</div>
                            <v-textarea v-model="text" :model-value="text">
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
                    @click="editComment(); dialog = false"
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
        text: '',
        dialog: false,
    }),
    props: {
        comment: {
            type: Object,
            required: true
        }
    },

    beforeUpdate() {
        this.text = this.comment.commentText
    },

    methods: {
        editComment() {
            const comm = {
                commentText: this.text
            }
            axios.patch(`http://localhost:3000${this.$route.fullPath}/comment/${this.comment.id}`, comm);
        }
    }
}
</script>