<template>
  <div class="center-all">
    <h1 class="title">
      George Scott's
    </h1>
    <h2 class="subtitle">
      Personal Website
    </h2>
  </div>
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
