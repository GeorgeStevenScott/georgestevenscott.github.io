<template>
  <transition
    name="slideFromBottom"
    appear>
    <b-navbar
      v-if="isOpen"
      :fixed="containerPosition"
      :type="cookieTheme"
      :variant="cookieVariant"
      :class="['text-center', 'text-md-left']">
      <b-container>
        <span
          :class="['navbar-text']">
          <slot
            name="message">{{ message }}</slot>
        </span>
        <b-button-group class="ml-auto">
          <b-button
            v-if="buttonLink"
            :to="buttonLink"
            size="sm"
            type="submit"
            variant="warning"
            class="my-2 my-sm-0">{{ buttonLinkText }}</b-button>
          <b-button
            size="sm"
            type="submit"
            class="my-2 my-sm-0"
            variant="success"
            @click="accept">{{ buttonText }}</b-button>
        </b-button-group>
      </b-container>
    </b-navbar>
  </transition>
</template>

<script>
  import * as Cookie from 'tiny-cookie'
  export default {
    props: {
      buttonText: {
        type: String,
        default: 'Got it!'
      },
      buttonLink: {
        type: [String, Object],
        required: false,
        default: null
      },
      buttonLinkText: {
        type: String,
        default: 'More info'
      },
      message: {
        type: String,
        default: 'This website uses cookies to ensure you get the best experience on our website.'
      },
      theme: {
        type: String,
        default: 'dark'
      },
      variant: {
        type: String,
        default: 'faded'
      },
      /**
       * Cookie Container position
       * bottom, top
       * @type {Object}
       */
      position: {
        type: String,
        default: 'bottom'
      },
      storageName: {
        type: String,
        default: 'cookie:accepted'
      }
    },
    data () {
      return {
        supportsLocalStorage: true,
        isOpen: false
      }
    },
    computed: {
      containerPosition () {
        return `${this.position}`
      },
      cookieTheme () {
        return `${this.theme}`
      },
      cookieVariant () {
        return `${this.variant}`
      },
    },
    created () {
      // Check for availability of localStorage
      try {
        const test = '__vue-cookielaw-check-localStorage'

        window.localStorage.setItem(test, test)
        window.localStorage.removeItem(test)
      } catch (e) {
        console.error('Local storage is not supported, falling back to cookie use')
        this.supportsLocalStorage = false
      }

      if (!this.getVisited() === true) {
        this.isOpen = true
      }
    },
    methods: {
      setVisited () {
        if (this.supportsLocalStorage) {
          localStorage.setItem(this.storageName, true)
        } else {
          Cookie.set(this.storageName, true)
        }
      },
      getVisited () {
        if (this.supportsLocalStorage) {
          return localStorage.getItem(this.storageName)
        } else {
          return Cookie.get(this.storageName)
        }
      },
      accept () {
        this.setVisited()
        this.isOpen = false
        this.$emit('accept')
      }
    }
  }
</script>

<style lang="scss">
  .slideFromBottom-enter, .slideFromBottom-leave-to {
    transform: translate(0px, 12.500em);
  }

  .slideFromBottom-enter-to, .slideFromBottom-leave {
    transform: translate(0px, 0px);
  }

  .slideFromBottom-enter-active,
  .slideFromBottom-leave-active {
    transition: transform .4s ease-in;
  }
</style>
