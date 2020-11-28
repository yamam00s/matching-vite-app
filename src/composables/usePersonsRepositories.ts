import { Ref, ref } from 'vue'
import axios from 'axios'
import { Person as PersonType } from '@/services/models/person'

type UsePersons = {
  displayPersons: Ref<PersonType[]>
  fetchPersons: (isMale: boolean) => Promise<void>
  setDisplayPersons: (setPersonsData: PersonType[]) => void
  getNameFilteredPersons: (text: string) => PersonType[]
}

export const usePersonsRepositories = (): UsePersons => {
  const persons = ref<PersonType[]>([])
  const displayPersons = ref<PersonType[]>([])

  const fetchPersons = async (isMale: boolean) => {
    let endPoint: string
    if (isMale) {
      endPoint = '/src/static/json/male.json'
    } else {
      endPoint = '/src/static/json/females.json'
    }
    const res = await axios.get<PersonType[]>(endPoint)
    persons.value = res.data
    setDisplayPersons(persons.value)
  }

  const setDisplayPersons = (setPersonsData: PersonType[]) => {
    displayPersons.value = setPersonsData
  }

  const getNameFilteredPersons = (text: string) => {
    return persons.value.filter((person) => person.name === text)
  }

  return {
    displayPersons,
    fetchPersons,
    setDisplayPersons,
    getNameFilteredPersons,
  }
}
