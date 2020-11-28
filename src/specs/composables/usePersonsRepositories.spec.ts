import { usePersonsRepositories } from '@/composables/usePersonsRepositories'
import { Person as PersonType } from '@/services/models/person'
import mockPersonsJson from '@/specs/mocks/persons.json'

describe('usePersonsRepositories', () => {
  let mockPersons: PersonType[]
  beforeEach(() => {
    mockPersons = mockPersonsJson
  })
  const {
    displayPersons,
    setDisplayPersons,
    getNameFilteredPersons,
  } = usePersonsRepositories()

  it('setDisplayPersons displayPersonsが更新される', () => {
    setDisplayPersons(mockPersons)
    expect(displayPersons.value).toEqual(mockPersons)
  })
  it('getNameFilteredPersons 指定したテキストでdisplayPersonsがフィルタリングされる', () => {
    const name = '田中一郎'
    getNameFilteredPersons(name)
    displayPersons.value.forEach((person) => {
      expect(person.name).toBe(name)
    })
  })
})
