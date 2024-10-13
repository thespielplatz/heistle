<template>
  <ModalOverlay
    ref="modal"
    size="small"
  >
    <template #header>
      Impressum
    </template>
    Philipp Horwath<br>
    UNESCO-Esplanade 12<br>
    8020 Graz<br>
    Österreich<br>
    <br>
    Telefon: +43 650 530 65 65<br>
    E-Mail: hallo@der-fil.at<br>
    UID: ATU66058801<br>
  </ModalOverlay>
</template>

<script setup lang="ts">

import ModalOverlay from '~/components/layout/ModalOverlay.vue'

const modal = ref()

defineExpose({
  openModal: () => modal.value.openModal(),
})

</script>
