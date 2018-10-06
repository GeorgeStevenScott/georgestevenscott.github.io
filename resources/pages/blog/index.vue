<template>
  <section class="container">
    <div>
      <h1 class="title">
        Blog
      </h1>
      <h2 class="subtitle">
        Let's make it easy to keep kids safe online
      </h2>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    Logo,
    MainMenu
  },
  head () {
    return {
      titleTemplate: '%s - Blog'
    }
  }
}
</script>
