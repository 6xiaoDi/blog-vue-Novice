<template>
    <div>
        <!--        商品详情-->
        <template v-if="item">
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
        </template>
        <template v-else>
            <h2>没有该商品信息</h2>
        </template>
    </div>
</template>

<script>
    import * as apis from '@/apis'
    import {RMB} from "@/filters/RMB";

    export default {
        name: "Detail",

        props: ['id'],

        data() {
            return {
                item: null
            }
        },

        filters: {
            RMB
        },

        async created() {
            let id = this.id;
            let rs = await apis.getItem(id);

            this.item = rs.data;
        }
    }
</script>

<style scoped>

</style>