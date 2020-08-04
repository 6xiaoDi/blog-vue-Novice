<template>
    <div>
        <h2>商品列表</h2>
        <select @change="changeSort" :value="sort">
            <option value="desc">从高到低</option>
            <option value="asc">从低到高</option>
        </select>

        <Page :page="page" :pages="pages"></Page>

        <ul class="item-list">
            <li class="head">
                <span>名称</span>
                <span>价格</span>
                <span>操作</span>
            </li>
            <li v-for="item of items" :key="item.id">
                <span>
                    <router-link :to="{name: 'view', params: {id: item.id}}">{{item.name}}</router-link>
                    <button @click="showTip">点击查看详情</button>
                </span>
                <span>{{item.price|RMB}}</span>
                <span>
                    <button>添加到购物车</button>
                </span>
            </li>
        </ul>
        <div class="tip" :style="{left: tip.left, top: tip.top}" v-show="tip.isShow">
            <Detail v-if="tip.isShow"></Detail>
        </div>
    </div>
</template>

<script>
    import * as apis from '@/apis'
    import {RMB} from "@/filters/RMB";
    import Page from "@/components/Page"
    import Detail from '@/views/Detail';

    export default {
        name: "Home",

        data() {
            return {
                sort: 'desc',
                items: [],
                page:1,
                pages:10,
                tip: {
                    left: 0,
                    top: 0,
                    isShow: false
                }
            }
        },

        // 局部过滤器引入，挂载到filters
        filters: {
            RMB
        },

        components:{
            Page,
            Detail
        },

        beforeRouteEnter(to, from, next) {
            next(function(vm) {
                console.log(vm);
                vm.getItems();
            });
        },

        beforeRouteUpdate(to, from, next) {
            console.log('...', this.$route.query.sort)
            next();
            this.getItems();
        },

        methods: {
            changeSort({target: {value}}) {
                this.$router.push({
                    name: 'home',
                    query: {
                        sort: value
                    }
                });
            },

            async getItems() {
                this.page = Number(this.$route.query.page) || 1;
                this.sort = this.$route.query.sort || 'desc';
                let rs = await apis.getItems(this.sort);

                this.items = rs.data;
            },

            showTip(e) {
                console.log(e.target);
                let {left: L, top: T} = e.target.getBoundingClientRect();

                this.tip = {
                    left: L +'px',
                    top: T + e.target.offsetHeight +  'px',
                    isShow: true
                }
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
    .tip {
        position: fixed;
        left: 0;
        top: 0;
        border: 1px solid #000;
        background: #fff;
        padding: 10px;
    }
</style>