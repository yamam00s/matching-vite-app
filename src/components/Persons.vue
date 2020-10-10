<template>
  <ul class="persons">
    <li v-for="person in persons" :key="person.id" class="person-item">
      <Person :person="person" :is-male="isMale" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Person from '@/components/Person.vue'
import { usePersonsRepositories } from '@/composables/usePersonsRepositories'

export default defineComponent({
  name: 'Home',
  components: {
    Person,
  },
  async setup() {
    const isMale = ref<boolean>(true)
    const { persons } = await usePersonsRepositories(isMale.value)

    return {
      isMale,
      persons,
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
