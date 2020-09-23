<template>
  <div id="app">
    <div class="contents">
      <div class="menu">
        <p>メニュー</p>
      </div>
      <Home />
    </div>
  </div>
</template>

<script lang="ts">
import Home from './pages/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 30px;
}

.contents {
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* padding-top: 30px; */
  /* justify-content: center; */
}

.menu {
  width: 30%;
  border-right: 1px solid #000;
  padding-top: 30px;
}
</style>
