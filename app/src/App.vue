<template>
  <div id="app">
    <h1>我的主页</h1>
    <ul id="nav">
      <router-link tag="li" to="/">Home</router-link>
      <li> | </li>
      <router-link tag="li" to="/about">About</router-link>
    </ul>
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