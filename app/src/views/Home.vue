<template>
    <div>
        Home
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Home",

        data() {
            return {
                items: []
            }
        },

        async created() {
            let rs= await axios({
                url:'/items'
            });

            this.items = rs.data;

            console.log(this.items);
        }
    }
</script>