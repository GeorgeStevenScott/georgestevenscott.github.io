<template>
  <section class="section">
    <fullscreen>
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

      <Notification :message="error" v-if="error"/>

      <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="emailInputGroup"
                      label="Email address:"
                      label-for="email">
          <b-form-input id="email"
                        type="email"
                        v-model="form.email"
                        required
                        placeholder="Email address">
          </b-form-input>
        </b-form-group>
        <b-form-group id="passwordInputGroup"
                      label="Password:"
                      label-for="password">
          <b-form-input id="password"
                        type="password"
                        v-model="form.password"
                        required
                        placeholder="Password">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <div class="has-text-centered" style="margin-top: 20px">
        <p>
          Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
        </p>
      </div>

    </fullscreen>
  </section>
</template>

<script>
import Fullscreen from '~/components/Fullscreen'
import Notification from '~/components/Notification'

export default {
  middleware: 'guest',

  components: {
    Fullscreen,
    Notification,
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      show: true,
      error: null
    }
  },

  methods: {
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.password = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    async onSubmit() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
