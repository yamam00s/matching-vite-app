<template>
  <img :src="imagePathName" />
  <p>{{ person.name }}</p>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { Person } from '@/services/models/person'

type Props = {
  person: Person
  isMale: boolean
}

export default defineComponent({
  name: 'Person',
  props: {
    person: {
      type: Object as PropType<Person>,
      default() {
        return {}
      },
    },
    isMale: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
  setup(props: Props) {
    const imagePathName = computed(
      () =>
        `/src/assets/person/${props.isMale ? 'male' : 'female'}/${
          props.person.image
        }`
    )

    return {
      imagePathName,
    }
  },
})
</script>
