<template>
  <div class="text-form">
    <input v-model="inputText" type="text" />
    <button type="button" @click="submitText">{{ buttonText }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, SetupContext } from 'vue'

type Props = {
  buttonText: string
}

export default defineComponent({
  name: 'TextForm',
  props: {
    buttonText: {
      type: String,
      default() {
        return '確定'
      },
    },
  },
  emits: ['emit-text'],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props: Props, context: SetupContext) {
    const inputText = ref<string>('')
    const submitText = () => {
      context.emit('emit-text', inputText.value)
    }

    return {
      inputText,
      submitText,
    }
  },
})
</script>

<style lang="scss" scoped>
.text-form {
  display: flex;

  input {
    flex: 1;
    border-radius: 5px;
  }

  button {
    padding: 0px 30px;
    background: #fff;
    border-radius: 5px;
  }
}
</style>
