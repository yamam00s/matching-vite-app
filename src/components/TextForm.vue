<template>
  <div class="text-form">
    <input type="text" :value="text" @input="updateText" />
    <button type="button" @click="$emit('submit')">{{ buttonText }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Props = {
  buttonText: string
  text: string
  textModifiers: any // 型は何を定義するのか
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
    text: {
      type: String,
      default: '',
    },
    textModifiers: {
      type: Function,
      default: () => ({}),
    },
  },
  emits: ['update:text', 'submit'],
  setup(props: Props, { emit }) {
    const updateText = (event: Event) => {
      if (!(event.target instanceof HTMLInputElement)) {
        return
      }
      let textValue = event.target.value
      if (props.textModifiers.capitalize) {
        textValue = textValue.charAt(0).toUpperCase() + textValue.slice(1)
      }
      emit('update:text', textValue)
    }
    return {
      updateText,
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
