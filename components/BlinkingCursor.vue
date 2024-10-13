<template>
  <span class="cursor" :style="{ animationDelay: delay + 's' }"></span>
</template>

<script>
export default {
  props: {
    delay: {
      type: Number,
      default: 0, // Default delay of 0 seconds if not specified
    },
  },
}
</script>

<style scoped>
@keyframes blink {
  0% {opacity: 1;}
  30% {opacity: 0;}
  100% {opacity: 0;}
}

.cursor {
  display: inline-block;
  width: 5px;
  height: 1em;
  background-color: #BBB;
  animation: blink 1.5s alternate infinite;
}
</style>
