<template>
    <div>
        <h3>{{ article.articleName }}</h3>   
        {{ article.articleText }}
    </div>
</template>

<script>
export default {
    props: {
        article: {
            type: Object,
            required: true,
        }
    }
}
</script>