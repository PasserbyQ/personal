<template>
  <top-nav-bar />
  <router-view />
  <bottom-bar style="margin-top: 50px" />
</template>
<script lang="ts">
import TopNavBar from "@/components/TopNavBar.vue"; // @ is an alias to /src
import BottomBar from "@/components/BottomBar/index.vue"; // @ is an alias to /src
export default {
  components: {
    TopNavBar,
    BottomBar,
  },
};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
