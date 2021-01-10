<template>
  <TextForm
    v-model:text.capitalize="formText"
    button-text="探す"
    @submit="searchNamePersons"
  />
  <Suspense>
    <template #default>
      <Persons
        :persons="displayPersons"
        :is-male="isMale"
        :fetch-persons="fetchPersons"
        @select-person="selectPerson"
      />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
  <teleport to="#app">
    <Modal v-if="isShowModal" @close="isShowModal = false">
      <template #body>
        <Person :person="displayPersons[selectIndex]" :is-male="isMale" />
      </template>
    </Modal>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Persons from '@/components/Persons.vue'
import Person from '@/components/Person.vue'
import TextForm from '@/components/TextForm.vue'
import Modal from '@/components/Modal.vue'
import { usePersonsRepositories } from '@/composables/usePersonsRepositories'
// import { Person as PersonType, blankPerson } from '@/services/models/person'

export default defineComponent({
  name: 'Home',
  components: {
    Persons,
    TextForm,
    Modal,
    Person,
  },
  setup() {
    const {
      displayPersons,
      fetchPersons,
      nameFilterPersons,
    } = usePersonsRepositories()
    const formText = ref<string>('')
    const isMale = ref<boolean>(true)
    const isShowModal = ref<boolean>(false)
    const selectIndex = ref<number>(0)

    const searchNamePersons = () => {
      nameFilterPersons(formText.value)
    }

    const selectPerson = (selectIndexValue: number) => {
      selectIndex.value = selectIndexValue
      isShowModal.value = true
    }

    return {
      displayPersons,
      fetchPersons,
      searchNamePersons,
      formText,
      isMale,
      isShowModal,
      selectIndex,
      selectPerson,
    }
  },
})
</script>

<style lang="scss" scoped></style>
