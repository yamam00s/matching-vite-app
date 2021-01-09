<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header" />
          <button class="modal-default-button" @click="$emit('close')">
            ×
          </button>
        </div>

        <div class="modal-body">
          <slot name="body" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  emits: ['close'],
})
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-body {
  margin: 20px 0;
}
</style>
