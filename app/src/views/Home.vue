<template>
    <div>
        <h2>商品列表</h2>
        <select @change="changeSort" :value="sort">
            <option value="desc">从高到低</option>
            <option value="asc">从低到高</option>
        </select>

        <ul class="item-list">
            <li class="head">
                <span>名称</span>
                <span>价格</span>
                <span>操作</span>
            </li>
            <li v-for="item of items" :key="item.id">
                <span>
                    <router-link :to="{name: 'view', params: {id: item.id}}">{{item.name}}</router-link>
                </span>
                <span>{{item.price|RMB}}</span>
                <span>
                    <button>添加到购物车</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    import * as apis from '@/apis'
    import {RMB} from "@/filters/RMB";

    export default {
        name: "Home",

        data() {
            return {
                sort: 'desc',
                items: []
            }
        },

        async created() {
            this.sort = this.$route.query.sort || 'desc';
            let rs = await apis.getItems(this.sort);

            this.items = rs.data;
        },

        // 局部过滤器引入，挂载到filters
        filters: {
            RMB
        },

        watch: {
            async $route(to, from) {
                this.sort = this.$route.query.sort || 'desc';
                let rs = await apis.getItems(this.sort);

                this.items = rs.data;
            }
        },

        methods: {
            changeSort({target: {value}}) {
                this.$router.push({
                    name: 'home',
                    query: {
                        sort: value
                    }
                });
            }
        }
    }
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        list-style: none;
    }

    .item-list li {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px dotted #333;
    }
    .item-list li.head {
        font-weight: bold;
    }
    .item-list li span {
        min-width: 200px;
    }
</style>