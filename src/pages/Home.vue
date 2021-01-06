<template>
  <TextForm
    v-model:text.capitalize="formText"
    button-text="探す"
    @submit="searchNamePersons"
  />
  <Suspense>
    <template #default>
      <Persons :fetch-persons="fetchPersons" :persons="displayPersons" />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
  <teleport to="#app">
    <Modal
      v-if="isShowModal"
      :persons="displayPersons[0]"
      @close="isShowModal = false"
    />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Persons from '@/components/Persons.vue'
import TextForm from '@/components/TextForm.vue'
import Modal from '@/components/Modal.vue'
import { usePersonsRepositories } from '@/composables/usePersonsRepositories'

export default defineComponent({
  name: 'Home',
  components: {
    Persons,
    TextForm,
    Modal,
  },
  setup() {
    const {
      displayPersons,
      fetchPersons,
      nameFilterPersons,
    } = usePersonsRepositories()
    const formText = ref<string>('')
    const isShowModal = ref<boolean>(true)

    const searchNamePersons = () => {
      nameFilterPersons(formText.value)
    }

    return {
      displayPersons,
      fetchPersons,
      searchNamePersons,
      formText,
      isShowModal,
    }
  },
})
</script>

<style lang="scss" scoped></style>
