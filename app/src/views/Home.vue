<template>
    <div>
        <nav>
            <div v-for="nav of navs">
                <router-link :to="nav.path">{{nav.meta.navName}}</router-link>
                <span> | </span>
            </div>
        </nav>
        <hr>
        <ul>
            <li v-for="i of 100">{{i}}</li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: "Home",

        data() {
            return {
                navs: []
            }
        },

        created() {
            console.log(this.$router);
            // this.$router.options.routes 所有路由的信息
            // this.navs = this.$router.options.routes;
            this.navs = this.$router.options.routes.filter(route => {
                // 无meta标签
                if (route.meta === undefined || route.meta.isNav === undefined) {
                    return true;
                }
                // 有meta标签 => 需要显示就显示
                if (route.meta.isNav === true) {
                    return true;
                }
            });
        }
    }
</script>

<style>
</style>