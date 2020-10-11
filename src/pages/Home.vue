<template>
  <TextForm button-text="探す" @emit-text="searchName" />
  <Suspense>
    <template #default>
      <Persons :get-persons="getPersons" :persons="persons" />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Persons from '@/components/Persons.vue'
import TextForm from '@/components/TextForm.vue'
import { usePersonsRepositories } from '@/composables/usePersonsRepositories'

export default defineComponent({
  name: 'Home',
  components: {
    Persons,
    TextForm,
  },
  setup() {
    const { persons, getPersons, filterPersons } = usePersonsRepositories()

    const searchName = (text) => {
      console.log(text.value)
      filterPersons(text)
    }
    return {
      persons,
      getPersons,
      searchName,
    }
  },
})
</script>

<style lang="scss" scoped>
.persons {
  display: flex;
  flex-wrap: wrap;
}
.person-item {
  width: 25%;
}
</style>
