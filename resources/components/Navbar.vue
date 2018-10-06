<template>
    <b-navbar
      toggleable="md"
      type="dark"
      variant="danger"
      fixed>
      <b-container>
      <b-navbar-brand
        to="/">G-Scott</b-navbar-brand>

      <b-navbar-toggle
        target="nav_collapse"/>

      <b-collapse
        id="nav_collapse"
        is-nav>

        <b-navbar-nav>
          <b-nav-item
            to="/"
            exact>Home</b-nav-item>
          <b-nav-item
            to="about">About</b-nav-item>
          <b-nav-item
            to="hobbies">Hobbies</b-nav-item>
          <b-nav-item
            to="gallery">Gallery</b-nav-item>
          <b-nav-item
            to="games">Games</b-nav-item>
        </b-navbar-nav>

      </b-collapse>

      </b-container>

    </b-navbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
}
</script>

<style lang="scss">

</style>
