<template>
  <div class="intro-animation-wrapper" :style="{ backgroundImage: `url('${image}')` }">
    <b-container fluid>
      <b-row>
        <b-col></b-col>
        <b-col cols="5">
          <logo/>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { TimelineMax } from 'gsap'
import Logo from '~/components/Logo.vue'

export default {
  data () {
    return {
      image: require('../assets/images/bg.png')
    }
  },
  components: {
    Logo
  },
  mounted () {
    const tl = new TimelineMax({delay:0.2, repeat:0, repeatDelay:0, yoyo:false})
    tl.staggerTo("h1", 0.4, {className:"+=superShadow", top:"-=10px", opacity:"1",ease:Power1.easeIn}, "0.4", "start")
    tl.staggerTo("h1", 0.1, {top:"+=8px", ease:Power1.easeIn}, "0.8", "0.4")
  }
}
</script>
<style lang="scss">
.intro-animation-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-size: 300px 300px;
  background-repeat: repeat;
  // flex-direction: column;
  h1 {
    font-size: 100px;
    position: relative;
    color: rgb(255,255,255);
    opacity: 0;
    text-align: center;
    letter-spacing: -3px;
    padding: 2rem;
    // display: block;
    // font-weight: 300;
  }
  h2 {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 80px;
    color: $gray-500;
    letter-spacing: 1px;
  }
}
</style>
