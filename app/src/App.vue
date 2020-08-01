<template>
  <div id="app">
    <h1>我的主页</h1>
    <div id="nav">
      <router-link exact tag="button" to="/">
        <span> Home </span>
      </router-link>
      <span> | </span>
      <router-link tag="button" to="/about">
        <span> About </span>
      </router-link>
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