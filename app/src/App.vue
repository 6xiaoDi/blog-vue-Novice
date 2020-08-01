<template>
  <div id="app">
    <h1>我的主页</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About</router-link>
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