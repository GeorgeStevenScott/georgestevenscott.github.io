<template>
  <section class="container">
    <div>
      <h1>Terms & Conditions</h1>
    </div>
  </section>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    MainMenu
  },
  head () {
    return {
      titleTemplate: '%s - Terms & Conditions'
    }
  }
}
</script>
