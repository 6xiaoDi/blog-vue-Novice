<template>
    <div>
        <template v-if="error">
            <h2>没有该商品信息</h2>
        </template>
        <template v-else>
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
                <h2>加载中……</h2>
            </template>
        </template>
    </div>
</template>

<script>
    import * as apis from '@/apis'
    import {RMB} from "@/filters/RMB";

    export default {
        name: "Detail",

        props: ['id','a'],

        data() {
            return {
                item: null,
                error: false
            }
        },

        filters: {
            RMB
        },

        async created() {
            console.log(this);
            let id = this.id;
            try {
                let rs = await apis.getItem(id);

                this.item = rs.data;
            } catch (e) {
                this.error = true;
            }
        }
    }
</script>

<style scoped>

</style>