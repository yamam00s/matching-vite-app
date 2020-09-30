<template>
  <div class="person">
    <img class="person-image" :src="imagePathName" />
    <p class="person-name">{{ person.name }}</p>
  </div>
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

<style lang="scss" scoped>
.person {
  margin: 10px;

  .person-image {
    width: 100%;
    border-radius: 50px;
  }
}
</style>
