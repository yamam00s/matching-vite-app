import { usePersonsRepositories } from '@/composables/usePersonsRepositories'
import { Person as PersonType } from '@/services/models/person'
import mockPersonsJson from '@/specs/mock/persons.json'

describe('usePersonsRepositories', () => {
  let mockPersons: PersonType[]
  beforeEach(() => {
    mockPersons = mockPersonsJson
  })
  const { persons, setPersons } = usePersonsRepositories()

  it('setしたDataと取得したDataが同一である', () => {
    setPersons(mockPersons)
    expect(persons.value).toEqual(mockPersons)
  })
})
