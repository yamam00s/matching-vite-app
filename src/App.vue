<template>
  <div id="app">
    <div class="container">
      <ul class="menu">
        <li><p>メニュー</p></li>
        <li><router-link to="/">探す</router-link></li>
        <li><router-link to="/favorites">いいねした人</router-link></li>
      </ul>
      <div class="contens">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { provideFavoritesStore } from '@/composables/useFavorites'

export default defineComponent({
  name: 'App',
  setup() {
    provideFavoritesStore()
  },
})
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin: 0 30px;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  /* padding-top: 30px; */
  /* justify-content: center; */
}

.contens,
.menu {
  padding-top: 30px;
}

.contens {
  padding-left: 30px;
}

.menu {
  min-width: 20%;
  border-right: 1px solid #333;
  padding-top: 30px;

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  li {
    margin-bottom: 20px;
  }
}
</style>
