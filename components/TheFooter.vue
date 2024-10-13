<template>
    <CenterContainer class="border-t-4 px-6  border-unobtrusive text-white py-4 text-end">
      TheSpielplatz © {{ new Date().getFullYear() }} 
      | <LinkDefault @click="showImpressum">Impressum</LinkDefault>
      | <LinkDefault @click="showDatenschutz">Datenschutz</LinkDefault>
      | <Tooltip text="Es werden keine Cookies verwendet!">
          <LinkDefault>Cookies</LinkDefault>
        </Tooltip>
    </CenterContainer>
    <ImprintModal ref="modalImprint" />
    <DatenschutzModal ref="modalDatenschutz" />

</template>

<script setup lang="ts">

import CenterContainer from '~/components/layout/CenterContainer.vue'
import LinkDefault from '~/components/typography/LinkDefault.vue'
import ImprintModal from '~/components/content/ImprintModal.vue'
import DatenschutzModal from '~/components/content/DatenschutzModal.vue'
import Tooltip from '~/components/layout/Tooltip.vue'

const modalImprint = ref()
const modalDatenschutz = ref()
const modalCookies = ref()

const showImpressum = () => {
  modalImprint.value.openModal()
}

const showDatenschutz = () => {
  modalDatenschutz.value.openModal()
}

</script>
