<template>
    <v-app>
        <v-card color="grey-lighten-3">
            <Navbar/>
            <v-main>
                <RouterView></RouterView>
            </v-main>
        </v-card>
    </v-app>
</template>

<script>
import ArticlesPage from './pages/ArticlesPage.vue';
import Navbar from './components/Navbar.vue';


export default {
    name: 'App',

    components: { ArticlesPage, Navbar }
}
</script>
