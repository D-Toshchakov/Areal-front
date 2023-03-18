<template>
    <v-dialog 
        v-model="dialog" 
        persistent
        width="auto"
    >
    <template v-slot:activator="{ props }">
        <v-btn color="red-darken-2" v-bind="props">
            Delete
        </v-btn>
    </template>
        <v-card>
            <v-card-title class="text-h5">
                Delete Comment
            </v-card-title>
            <v-card-text>
                Are you sure you want to delete this comment?
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
                    @click="deleteComment(); dialog = false"
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
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteComment() {
            axios.delete(`http://localhost:3000${this.$route.fullPath}/comment/${this.comment.id}`);
        }
    }
}
</script>