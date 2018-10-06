<template>
  <b-container class="bv-example-row bv-example-row-flex-cols fullscreen">
    <b-row align-v="center">
      <b-col><slot/></b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    verticallyCentered: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss">
.fullscreen {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
