<template>
  <div class="absolute">
    <div
      v-if="visible"
      class="relative top-0 right-0 transition-opacity duration-500 pointer-events-none"
      :class="{ 'opacity-100': visible, 'opacity-0': !visible }"
    >
      <div class="bg-slate-200 text-black py-2 px-4 rounded-lg shadow-lg">
        <p class="text-center">{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

const message = ref('')
const visible = ref(false)

const showMessage = (newMessage: string) => {
  message.value = newMessage
  visible.value = true

  setTimeout(() => {
    visible.value = false
  }, 2500)
};

defineExpose({
  showMessage,
})

</script>
