<template>
  <div class="container center-all">
    <h1 class="title">
      Games I Play
    </h1>
    <h2 class="subtitle">
      These are all of my favourite games.
    </h2>
    <p>
      I like to play hide and seek tag with 7 friends that I play with. I play football with Jack because he is also good at football. He only passes to me because I am good and skilled.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s | Games I Play',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'These are all of my favourite games.'
        }
      ]
    }
  }
}
</script>
