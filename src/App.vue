<template>
  <ModalFactory />
  <RouterView />
</template>

<script>
import ModalFactory from './components/ModalFactory/index.vue'
import { RouterView } from 'vue-router'


export default {
  components: { ModalFactory }
}
</script>
