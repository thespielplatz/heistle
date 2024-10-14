<template>
  <div class="w-full border-2 border-gray-500">
    <div
      class="transition-opacity duration-500 pointer-events-none"
      :class="{ 'opacity-100': visible, 'opacity-0': !visible }"
    >
        <p class="text-center font-rubikMonoOne">{{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'

const message = ref('Error')
const visible = ref(true)

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
