<template>
  <div class="container center-all">
    <h1 class="title">
      Picture Gallery
    </h1>
    <h2 class="subtitle">
      These are some of the pictures that I have take or that I really like.
    </h2>
  </div>
</template>

<script>
export default {
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
