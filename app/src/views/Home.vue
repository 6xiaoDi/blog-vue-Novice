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
                url:'http://localhost:7777/items'
            });

            this.items = rs.data;

            console.log(this.items);
        }
    }
</script>