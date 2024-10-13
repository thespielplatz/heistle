<template>
  <div class="grid grid-cols-5 gap-2">
    <div
      v-for="(square, index) in squares"
      :key="index"
      class="aspect-square border-2 flex justify-center items-center text-3xl font-bold"
      :class="[
        square ? 'border-white' : 'border-gray-400',
        jiggleActive ? 'animate-jiggle' : ''
      ]"
    >
      {{ square }}
    </div>
  </div>
</template>

<script lang="ts" setup>

import { reactive } from "vue"

const squares = reactive<string[]>(["", "", "", "", ""]);
const jiggleActive = ref(false)

const add = (char: string) => {
  const index = squares.findIndex((square) => square === "")
  if (index !== -1 && char.length === 1) {
    squares[index] = char
  }
}

const backspace = () => {
  const index = squares.slice().reverse().findIndex((square) => square !== "")
  if (index !== -1) {
    squares[squares.length - 1 - index] = ""
  }
}

const error = () => {
  jiggleActive.value = true;
  setTimeout(() => {
    jiggleActive.value = false;
  }, 500)
}

defineExpose({
  add,
  backspace,
  error,
})

</script>
