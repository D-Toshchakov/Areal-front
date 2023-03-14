<template>
    <v-container fluid>
        <v-app-bar color="indigo">
            <v-app-bar-title>
                <RouterLink 
                    to="/"
                    tag="span" 
                    style="text-decoration: none; color: inherit;"
                >
                    Articles about everything
                </RouterLink>
            </v-app-bar-title>
            <RouterLink 
                to="/form"
                class="mr-5"
                style="text-decoration: none; color: inherit;"
            >
                Create Article
            </RouterLink>
        </v-app-bar>
    </v-container>
</template>

<script>
export default {

}
</script>