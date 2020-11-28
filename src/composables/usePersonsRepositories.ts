import { Ref, ref } from 'vue'
import axios from 'axios'
import { Person as PersonType } from '@/services/models/person'

type UsePersons = {
  persons: Ref<PersonType[]>
  fetchPersons: (isMale: boolean) => Promise<void>
  setPersons: (setPersonsData: PersonType[]) => void
  filterPersons: (text: string) => void
}

export const usePersonsRepositories = (): UsePersons => {
  const persons = ref<PersonType[]>([])

  const fetchPersons = async (isMale: boolean) => {
    let endPoint: string
    if (isMale) {
      endPoint = '/src/static/json/male.json'
    } else {
      endPoint = '/src/static/json/females.json'
    }
    const res = await axios.get<PersonType[]>(endPoint)
    setPersons(res.data)
  }

  const setPersons = (setPersonsData: PersonType[]) => {
    persons.value = setPersonsData
  }

  const filterPersons = (text: string) => {
    persons.value = persons.value.filter((person) => {
      console.log(person.name)
      return person.name === text
    })
  }

  return {
    persons,
    fetchPersons,
    setPersons,
    filterPersons,
  }
}
