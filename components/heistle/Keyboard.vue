<template>
  <div class="keyboard w-full" ref="keyboardRef" :style="{ width: containerWidth + 'px' }">
    <div v-for="(row, rowIndex) in layout" :key="rowIndex" class="flex justify-center mb-2">
      <button
        v-for="(char, charIndex) in row"
        :key="charIndex"
        @click="handleClick(char)"
        class="keyboard-key bg-button-background text-button-text font-bold py-2 px-4 rounded-sm mx-1 hover:bg-gray-400 active:bg-gray-500"
      >
        {{ char }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  layout: {
    type: Array as () => string[][],
    required: true
  }
});

const emit = defineEmits(['keyClick']);

const containerWidth = ref<number>(0);
const keyboardRef = ref<HTMLElement | null>(null);

const handleClick = (char: string) => {
  emit('keyClick', char)
}

const updateContainerWidth = () => {
  if (keyboardRef.value) {
    containerWidth.value = keyboardRef.value.parentElement?.clientWidth || 0
  }
}

onMounted(() => {
  updateContainerWidth()
  window.addEventListener('resize', updateContainerWidth)
})

watch(
  () => containerWidth.value,
  () => {
    updateContainerWidth()
  }
)
</script>
