<template>
  <div class="text-form">
    <input
      type="text"
      :value="text"
      @input="$emit('update:text', $event.target.value)"
    />
    <button type="button" @click="$emit('submit')">{{ buttonText }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  },
  emits: ['update:text', 'submit'],
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
