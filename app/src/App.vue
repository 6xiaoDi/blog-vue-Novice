<template>
  <div id="app">
    <h1>我的主页</h1>
    <div id="nav">
      <router-link exact to="/">Home</router-link>
      <span> | </span>
      <router-link  to="/about">About</router-link>
      <span> | </span>
      <router-link to="/user">User</router-link>
      <span> | </span>
      <router-link to="/book-choose">小说</router-link>
      <span> | </span>
      <router-link to="/login">Login</router-link>
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
  .router-link-active {
    color: red;
  }
</style>