import { Ref, ref, onMounted } from 'vue'
import axios from 'axios'
import { Person as PersonType } from '@/services/models/person'

type UsePersons = {
  persons: Ref<PersonType[]>
}

export const usePersonsRepositories = (isMale: boolean): UsePersons => {
  const persons = ref<PersonType[]>([])

  const getPersons = async () => {
    let endPoint: string
    if (isMale) {
      endPoint = '/src/static/json/male.json'
    } else {
      endPoint = '/src/static/json/females.json'
    }
    const res = await axios.get<PersonType[]>(endPoint)
    persons.value = res.data
  }

  onMounted(getPersons)

  return {
    persons,
  }
}
