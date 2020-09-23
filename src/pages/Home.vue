<template>
  <ul>
    <li v-for="preson in displayPersons" :key="preson.id">
      {{ preson.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from 'vue'
import { Person } from '../services/models/person'
import maleList from '../static/json/male.json'
import femaleList from '../static/json/female.json'

export default defineComponent({
  name: 'Home',
  setup() {
    const isMale = ref<boolean>(true)
    const males = reactive<Person[]>(maleList)
    const females = reactive<Person[]>(femaleList)

    const displayPersons = computed(() => {
      return isMale.value ? males : females
    })

    return {
      displayPersons,
    }
  },
})
</script>
