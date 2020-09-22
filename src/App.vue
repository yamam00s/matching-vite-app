<template>
  <div id="app">
    <div class="menu">
      <p>メニュー</p>
    </div>
    <Home />
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
