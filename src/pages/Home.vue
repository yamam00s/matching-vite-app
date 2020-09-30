<template>
  <Suspense>
    <template #default>
      <ul>
        <li v-for="person in persons" :key="person.id">
          <Person :person="person" :is-male="isMale" />
        </li>
      </ul>
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { Person as PersonType } from '@/services/models/person'
import Person from '@/components/atoms/Person.vue'
import { usePersonsRepositories } from '@/composables/usePersonsRepositories'

export default defineComponent({
  name: 'Home',
  components: {
    Person,
  },
  setup() {
    const isMale = ref<boolean>(true)
    const { persons } = usePersonsRepositories(isMale.value)

    return {
      persons,
    }
  },
})
</script>
