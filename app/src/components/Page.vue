<template>

    <div class="pages">
        <span class="current">1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
    </div>

</template>

<script>
    export default {
        name: "Page"
    }
</script>

<style scoped>
    .pages {
        margin: 20px 0;
    }

    span {
        text-align: center;
        cursor: pointer;
        padding: 10px 20px;
        margin: 10px;
        border: 1px solid #000000;
    }
    /*高亮当前页*/
    span.current {
        cursor: default;
        background: rgba(0,255,255, .5);
    }
</style>