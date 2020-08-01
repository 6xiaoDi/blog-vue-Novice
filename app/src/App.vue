<template>
  <div id="app">
    <h1>我的主页</h1>
    <div id="nav">
      <router-link tag="button" to="/">Home</router-link>
      <span> | </span>
      <router-link tag="button" to="/about">About</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>
  .router-link-exact-active{
    color: red;
  }
</style>