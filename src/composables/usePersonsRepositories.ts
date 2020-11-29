import { Ref, ref } from 'vue'
import axios from 'axios'
import { Person as PersonType } from '@/services/models/person'

type UsePersons = {
  displayPersons: Ref<PersonType[]>
  fetchPersons: (isMale: boolean) => Promise<void>
  setPersons: (setPersonsData: PersonType[]) => void
  setDisplayPersons: (setPersonsData: PersonType[]) => void
  nameFilterPersons: (text: string) => void
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
    setPersons(res.data)
    setDisplayPersons(persons.value)
  }

  const setPersons = (setPersonsData: PersonType[]) => {
    persons.value = setPersonsData
  }

  const setDisplayPersons = (setPersonsData: PersonType[]) => {
    displayPersons.value = setPersonsData
  }

  const nameFilterPersons = (name: string) => {
    const filteredPersons = persons.value.filter(
      (person) => person.name === name
    )
    setDisplayPersons(filteredPersons)
  }

  return {
    displayPersons,
    fetchPersons,
    setPersons,
    setDisplayPersons,
    nameFilterPersons,
  }
}
