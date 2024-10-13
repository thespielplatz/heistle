<template>
  <div class="grid grid-cols-5 gap-2">
    <div
      v-for="(square, index) in squares"
      :key="index"
      class="aspect-square border-2 flex justify-center items-center text-3xl font-bold"
      :class="square ? 'border-white' : 'border-gray-400'"
    >
      {{ square }}
    </div>
  </div>
</template>

<script lang="ts" setup>

import { reactive } from "vue"

const squares = reactive<string[]>(["", "", "", "", ""]);

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

defineExpose({
  add,
  backspace,
})

</script>
