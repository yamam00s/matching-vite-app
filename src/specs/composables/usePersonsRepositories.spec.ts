import { usePersonsRepositories } from '@/composables/usePersonsRepositories'
import { Person as PersonType } from '@/services/models/person'
import mockPersonsJson from '@/specs/mock/persons.json'

describe('usePersonsRepositories', () => {
  let mockPersons: PersonType[]
  beforeEach(() => {
    mockPersons = mockPersonsJson
  })
  const { displayPersons, setDisplayPersons } = usePersonsRepositories()

  it('setDisplayPersons displayPersons', () => {
    setDisplayPersons(mockPersons)
    expect(displayPersons.value).toEqual(mockPersons)
  })
})
