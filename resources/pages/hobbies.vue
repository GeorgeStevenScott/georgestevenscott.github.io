<template>
  <div class="container center-all">
    <h1 class="title">
      Hobbies
    </h1>
    <h2 class="subtitle">
      These are the hobbies I enjoy.
    </h2>
    <p>
      I love to play CoD on the Xbox with my Dad, as I'm much better than he is when we go 1v1 or on zombies. I also like to play Fortnite with Curtis who 1v1's me, but he beats me as he's good, much better than me. I also play Fortnite with my Dad sometimes, but not much.
    </p>
    <p>
      On my iPad I can join my half sister Amelia and my friends on games like Roblox.
    </p>
    <p>
      I like to play football. While playing football I like to try and learn new tricks. I have mastered the 'Rabona' and the 'Rainbow Flip'.
    </p>
    <p>
      I love to play rounders in PE at school. My favourite part is when I get to bat as I don't really like being a fielder.
    </p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: '%s | Hobbies',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This page tells you about the hobbies that I enjoy.'
        }
      ]
    }
  }
}
</script>
