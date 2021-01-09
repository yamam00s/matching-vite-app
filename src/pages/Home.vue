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
        :fetch-persons="fetchPersons"
        @select-person="setSelectPerson"
      />
    </template>
    <template #fallback>
      <p>Loading...</p>
    </template>
  </Suspense>
  <teleport to="#app">
    <Modal v-if="isShowModal" @close="isShowModal = false">
      <Person :person="displayPersons[selectIndex]" :is-male="true" />
    </Modal>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Persons from '@/components/Persons.vue'
import Person from '@/components/Person.vue'
import TextForm from '@/components/TextForm.vue'
import Modal from '@/components/Modal.vue'
import { usePersonsRepositories } from '@/composables/usePersonsRepositories'
import { Person as PersonType, blankPerson } from '@/services/models/person'

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
    const isShowModal = ref<boolean>(true)
    const selectIndex = ref<number>(0)

    const searchNamePersons = () => {
      nameFilterPersons(formText.value)
    }

    const setSelectPersonIndex = (selectIndexValue: number) => {
      selectIndex.value = selectIndexValue
    }

    return {
      displayPersons,
      fetchPersons,
      searchNamePersons,
      formText,
      isShowModal,
      selectIndex,
      setSelectPersonIndex,
    }
  },
})
</script>

<style lang="scss" scoped></style>
