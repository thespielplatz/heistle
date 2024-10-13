<template>
  <WordRow
    v-for="(item, index) in 5"
    :key="index"
    ref="wordRows"
    class="pb-2"
    :index="index"
  />
</template>

<script setup lang="ts">

import WordRow from '~/components/heistle/WordRow.vue'

const wordRows = ref<InstanceType<typeof WordRow>[]>([])
const activeIndex = ref(0)

const add = (char: string) => {
  if (activeIndex.value >= wordRows.value.length) {
    return
  }
  wordRows.value[activeIndex.value].add(char)
}

const backspace = () => {
  if (activeIndex.value >= wordRows.value.length) {
    return
  }
  wordRows.value[activeIndex.value].backspace()
}

const error = () => {
  if (activeIndex.value >= wordRows.value.length) {
    return
  }
  wordRows.value[activeIndex.value].error()
}

defineExpose({
  add,
  backspace,
  error,
})

</script>
