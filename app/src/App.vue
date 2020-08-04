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
      <router-link to="/book">小说</router-link>
      <span> | </span>
      <router-link to="/login">Login</router-link>
    </div>
    <hr />
    <transition name="fade">
      <router-view></router-view>
    </transition>
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


  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave-active {
    transition: none;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>