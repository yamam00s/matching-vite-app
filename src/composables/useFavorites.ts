import { ref, Ref, provide, inject } from 'vue'
import { Person as PersonType } from '@/services/models/person'

type UseFavorites = {
  favorites: Ref<PersonType[]>
  addFavorites: (addFavoriteData: PersonType) => void
}

export const useFavorites = (): UseFavorites => {
  const favorites = ref<PersonType[]>([])
  const addFavorites = (addFavoriteData: PersonType) => {
    favorites.value = [...favorites.value, addFavoriteData]
  }

  return {
    favorites,
    addFavorites,
  }
}

const key = Symbol('favorites')

export const provideFavoritesStore = (): void => {
  provide(key, useFavorites())
}

export const useFavoritesStore = (): UseFavorites => {
  return inject<UseFavorites>(key) as UseFavorites
}
