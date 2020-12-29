<template>
  <TextForm
    v-model:text.capitalize="formText"
    button-text="探す"
    @submit="searchNamePersons"
  />
  <!-- <Suspense>
    <template #default>
      <Persons :fetch-persons="fetchPersons" :persons="displayPersons" />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    const {
      displayPersons,
      fetchPersons,
      nameFilterPersons,
    } = usePersonsRepositories()
    const formText = ref<string>('')

    const searchNamePersons = () => {
      nameFilterPersons(formText.value)
    }

    return {
      displayPersons,
      fetchPersons,
      searchNamePersons,
      formText,
    }
  },
})
</script>

<style lang="scss" scoped></style>
