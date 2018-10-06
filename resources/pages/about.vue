<template>
  <div class="container center-all">
    <h1 class="title">
      About Me
    </h1>
    <h2 class="subtitle">
      This page tells you all about me.
    </h2>
    <p>
      I love to play with my best mates. One is called Harvey, one is called Thomas and the other is called Adam.
    </p>
    <p>
      I always play football as I am the best in my class at it. I like to be striker when I play football.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s | About Me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This page tells you all about me.'
        }
      ]
    }
  }
}
</script>
