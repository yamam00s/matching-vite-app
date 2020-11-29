import { usePersonsRepositories } from '@/composables/usePersonsRepositories'
import { Person as PersonType } from '@/services/models/person'
import mockPersonsJson from '@/specs/mocks/persons.json'

describe('usePersonsRepositories', () => {
  let mockPersons: PersonType[]
  const {
    displayPersons,
    setPersons,
    setDisplayPersons,
    nameFilterPersons,
  } = usePersonsRepositories()

  beforeEach(() => {
    mockPersons = mockPersonsJson
    setPersons(mockPersons)
    setDisplayPersons(mockPersons)
  })

  it('setDisplayPersons displayPersonsが更新される', () => {
    setDisplayPersons(mockPersons)
    expect(displayPersons.value).toEqual(mockPersons)
  })

  describe('nameFilterPersons', () => {
    it('指定した名前でdisplayPersonsがフィルタリングされる', () => {
      const nameText = '田中一郎'
      nameFilterPersons(nameText)
      displayPersons.value.forEach((person) => {
        expect(person.name).toBe(nameText)
      })
    })
    it('存在しない名前を指定した場合displayPersonsは空になる', () => {
      const nameText = 'テスト太郎'
      nameFilterPersons(nameText)
      expect(displayPersons.value.length).toBe(0)
    })
  })
})
