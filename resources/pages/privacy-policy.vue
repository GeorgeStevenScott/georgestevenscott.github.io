<template>
  <section class="container">
    <div>
      <h1>Privacy Policy</h1>
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
      titleTemplate: '%s - Privacy Policy'
    }
  }
}
</script>
