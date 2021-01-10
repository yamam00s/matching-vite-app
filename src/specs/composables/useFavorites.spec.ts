import { useFavorites } from '@/composables/useFavorites'
import { Person as PersonType } from '@/services/models/person'
import mockPersonsJson from '@/specs/mocks/persons.json'
import mockPersonJson from '@/specs/mocks/person.json'

describe('UseFavorites', () => {
  let mockInitialFavorites: PersonType[]
  let mockPerson: PersonType
  const { favorites, addFavorites } = useFavorites()

  beforeEach(() => {
    mockInitialFavorites = mockPersonsJson
    mockPerson = mockPersonJson
    mockInitialFavorites.forEach((person) => {
      addFavorites(person)
    })
  })

  it('addFavorites favoritesが更新される', () => {
    const mockFavorites = [...mockInitialFavorites, mockPerson]
    addFavorites(mockPerson)
    expect(favorites.value).toEqual(mockFavorites)
  })
})
