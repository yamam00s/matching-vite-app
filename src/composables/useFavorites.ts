import { Ref, ref } from 'vue'
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
