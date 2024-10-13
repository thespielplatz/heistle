<template>
  <ModalOverlay
    ref="modal"
    size="large"
  >
    <template #header>
      Datenschutz
    </template>
    <p>
      Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
    </p>
    <div class="flex flex-col md:flex-row pt-4">
      <div class="md:w-1/2">
        <div class="font-medium text-l pb-1">Kontakt mit uns</div>
        <p class="text-">Wenn Sie per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
        <div class="font-medium text-l pt-2 pb-1">Speicherung von Daten</div>
        <p class="text-">Auf unserer Website werden <span class="font-bold">keine</span> personenbezogenen Daten gespeichert oder verarbeitet. Es gibt keine Formulare, über die Daten erfasst werden könnten.</p>
        <div class="font-medium text-l pt-2 pb-1">Kontakt</div>
        <p class="text-">Sollten Sie Fragen zur Verarbeitung Ihrer personenbezogenen Daten haben, können Sie sich gerne jederzeit an uns wenden.</p>
      </div>
      <div class="md:w-1/2">
        <div class="font-medium text-l pb-1">Ihre Rechte</div>
        <p class="text-">Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist dies die Datenschutzbehörde.</p>
      </div>
    </div>
  </ModalOverlay>
</template>

<script setup lang="ts">

import ModalOverlay from '~/components/layout/ModalOverlay.vue'

const modal = ref()

defineExpose({
  openModal: () => modal.value.openModal(),
})

</script>
