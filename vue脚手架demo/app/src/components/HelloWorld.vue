<template>
  <div class="hello">
    <p>这里是hello - {{msg}}</p>
    <img src="/logo.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>


<style  scoped>
  p {
    color: red;
  }
</style>