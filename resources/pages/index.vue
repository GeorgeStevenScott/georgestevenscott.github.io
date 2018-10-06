<template>
  <section class="full-screen">
    <animated-intro/>
  </section>
</template>

<script>
import AnimatedIntro from '~/components/AnimatedIntro.vue'

export default {
  components: {
    AnimatedIntro
  },
  head () {
    return {
      titleTemplate: '%s - Home'
    }
  }
}
</script>
