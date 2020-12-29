<template>
  <ul class="persons">
    <li v-for="person in persons" :key="person.id" class="person-item">
      <Person :person="person" :is-male="isMale" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue'
import Person from '@/components/Person.vue'
import { Person as PersonType } from '@/services/models/person'

type Props = {
  persons: PersonType[]
  fetchPersons: (isMale: boolean) => Promise<void>
}

export default defineComponent({
  name: 'Persons',
  components: {
    Person,
  },
  props: {
    persons: {
      type: Array as PropType<PersonType[]>,
      required: true,
    },
    fetchPersons: {
      type: Function as PropType<(isMale: boolean) => Promise<void>>,
      required: true,
    },
  },
  setup(props: Props) {
    const isMale = ref<boolean>(true)
    onMounted(async () => {
      await props.fetchPersons(isMale.value)
    })
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
