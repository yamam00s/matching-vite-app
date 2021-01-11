<template>
  <ul>
    <li v-for="favorite in favorites" :key="favorite.id">
      {{ favorite.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePersons } from '@/composables/usePersons'
import { useFavoritesStore } from '@/composables/useFavorites'
// import { Person as PersonType } from '@/services/models/person'

export default defineComponent({
  name: 'Favorites',
  setup() {
    const { displayPersons } = usePersons()
    const { favorites } = useFavoritesStore()

    return {
      favorites,
      displayPersons,
    }
  },
})
</script>

<style lang="scss" scoped></style>
