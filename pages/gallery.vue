<template>
  <section class="container">
    <div>
      <h1 class="title">
        Picture Gallery
      </h1>
      <h2 class="subtitle">
        These are some of the pictures that I have take or that I really like.
      </h2>
      <main-menu/>
    </div>
  </section>
</template>

<script>
import MainMenu from '~/components/MainMenu.vue'

export default {
  components: {
    MainMenu
  },
  head() {
    return {
      titleTemplate: '%s | Gallery',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'These are some of the pictures that I have take or that I really like.'
        }
      ]
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
