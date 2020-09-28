<template>
  <Suspense>
    <ul>
      <li v-for="person in persons" :key="person.id">
        <Person :person="person" :is-male="isMale" />
      </li>
    </ul>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import axios from 'axios'
import { Person as PersonType } from '@/services/models/person'
import Person from '@/components/atoms/Person.vue'

export default defineComponent({
  name: 'Home',
  components: {
    Person,
  },
  setup() {
    const isMale = ref<boolean>(true)
    const persons = ref<PersonType[]>([])

    const getPersons = async () => {
      let endPoint: string
      if (isMale.value) {
        endPoint = '/src/static/json/male.json'
      } else {
        endPoint = '/src/static/json/females.json'
      }
      const res = await axios.get<PersonType[]>(endPoint)
      persons.value = res.data
    }

    getPersons()

    return {
      persons,
    }
  },
})
</script>
