<template>
  <CenterContainer class="bg-dark-charcoal-gray text-white pt-8">
    <h1 class="font-rubikMonoOne text-metallic-gold text-6xl md:text-8xl text-center">
      Heistle
    </h1>
    <div class="md:pt-8 md:px-48">
      <WordRow ref="activeRow"></WordRow>
    </div>
    <div class="md:pt-5">
      <Keyboard
      :layout="keyboardLayout"
      @keyClick="onKeyClick"
    />    </div>
  </CenterContainer>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import CenterContainer from '~/components/layout/CenterContainer.vue'
import LinkDefault from '~/components/typography/LinkDefault.vue'
import WordRow from '~/components/heistle/WordRow.vue'
import Keyboard from '~/components/heistle/Keyboard.vue'

const activeRow = ref(null)

const keyboardLayout = ref([
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE']
])

onMounted(() => {
  document.title = 'Heistle'
})

const onKeyClick = (key: string) => {
  if (key === 'BACKSPACE') {
    activeRow.value.backspace()
    return
  }
  if (key === 'ENTER') {
    return
  }

  activeRow.value.add(key)
}

</script>