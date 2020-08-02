<template>
    <div>
        Home
    </div>
</template>

<script>
    import * as apis from '@/apis'

    export default {
        name: "Home",

        data() {
            return {
                items: []
            }
        },

        async created() {
            let rs = await apis.getItems();

            this.items = rs.data;
        }
    }
</script>