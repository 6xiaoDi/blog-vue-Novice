<template>
  <div id="app">
    <h1>我的主页</h1>
    <div id="nav">
      <router-link exact to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
      <span> | </span>
      <router-link to="/view">Detail</router-link>
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

  #nav {
    padding: 10px 0;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background: rgba(0,255,0,.3);
  }
</style>