<template>
  <CenterContainer class="bg-dark-charcoal-gray text-white pt-8">
    <h1 class="font-rubikMonoOne text-metallic-gold text-6xl md:text-8xl text-center">
      Heistle
    </h1>
    <div class=" md:px-48">
      <Status ref="infoOverlay" />
    </div>
    <div class="md:pt-4 md:px-48">
      <WordRows ref="wordRows"></WordRows>
    </div>
    <div class="md:pt-5">
      <Keyboard
      :layout="keyboardLayout"
      @keyClick="onKeyClick"
    />    
    </div>
  </CenterContainer>
</template>

<script setup lang="ts">

import { onMounted } from 'vue'
import CenterContainer from '~/components/layout/CenterContainer.vue'
import Keyboard from '~/components/heistle/Keyboard.vue'
import WordRows from '~/components/heistle/WordRows.vue'
import Status from '~/components/heistle/Status.vue'

const wordRows = ref(null)
const infoOverlay = ref(null)

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
    wordRows.value.backspace()
    return
  }
  if (key === 'ENTER') {
    wordRows.value.error()
    infoOverlay.value.showMessage('Foo Bar!')
    return
  }

  wordRows.value.add(key)
}

</script>