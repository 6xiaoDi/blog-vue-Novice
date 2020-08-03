<template>
    <div>
        <router-link :to="{name: 'book-boy'}">男生</router-link>
        <span> | </span>
        <router-link :to="{name: 'book-girl'}">女生</router-link>
    </div>
</template>

<script>
    export default {
        name: "BookChoose"
    }
</script>

<style scoped>

</style>