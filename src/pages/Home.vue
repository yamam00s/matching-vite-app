<template>
  <ul v-if="!isLoading">
    <li v-for="preson in persons" :key="preson.id">
      {{ preson.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { Person } from '../services/models/person'

export default defineComponent({
  name: 'Home',
  setup() {
    const isLoading = ref<boolean>(false)
    const isMale = ref<boolean>(true)
    const persons = ref<Person[]>([])

    const getPersons = async () => {
      isLoading.value = true
      let endPoint: string
      if (isMale.value) {
        endPoint = '/src/static/json/male.json'
      } else {
        endPoint = '/src/static/json/females.json'
      }
      const res = await axios.get<Person[]>(endPoint)
      persons.value = res.data
      isLoading.value = false
    }

    onMounted(getPersons)

    return {
      persons,
    }
  },
})
</script>
