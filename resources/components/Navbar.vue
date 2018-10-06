<template>
    <b-navbar
      toggleable="md"
      type="light"
      variant="light"
      fixed>
      <b-container>
      <b-navbar-brand
        to="/">KidOAuth</b-navbar-brand>

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
            to="blog">Blog</b-nav-item>
          <b-nav-item
            to="privacy-policy">Privacy Policy</b-nav-item>
          <b-nav-item
            to="terms-and-conditions">Terms & Conditions</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav
          class="ml-auto">

          <b-nav-item-dropdown
            v-if="isAuthenticated"
            right>
            <!-- Using button-content slot -->
            <template
              slot="button-content">
              <em>{{ loggedInUser.username }}</em>
            </template>
            <b-dropdown-item
              to="/profile">Profile</b-dropdown-item>
              <hr class="navbar-divider">
            <b-dropdown-item
              @click="logout">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
          <template v-else>
            <b-nav-item class="navbar-item" to="/register" right>Register</b-nav-item>
            <b-nav-item class="navbar-item" to="/login" right>Log In</b-nav-item>
          </template>
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
