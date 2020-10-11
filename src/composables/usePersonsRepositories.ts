import { Ref, ref } from 'vue'
import axios from 'axios'
import { Person as PersonType } from '@/services/models/person'

type UsePersons = {
  persons: Ref<PersonType[]>
  getPersons: (isMale: boolean) => Promise<void>
  filterPersons: (text: string) => void
}

export const usePersonsRepositories = (): UsePersons => {
  const persons = ref<PersonType[]>([])

  const getPersons = async (isMale: boolean) => {
    let endPoint: string
    if (isMale) {
      endPoint = '/src/static/json/male.json'
    } else {
      endPoint = '/src/static/json/females.json'
    }
    const res = await axios.get<PersonType[]>(endPoint)
    persons.value = res.data
  }

  const filterPersons = (text: string) => {
    persons.value = persons.value.filter((person) => {
      console.log(person.name)
      return person.name === text
    })
  }

  return {
    persons,
    getPersons,
    filterPersons,
  }
}
