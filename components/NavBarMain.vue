<template>
  <div class="row">
    <nav class="split-nav col">
      <div class="nav-brand">
        <h3>
          <a href="#">Swatch Milk</a>
        </h3>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
        <button name="hidden-nav">
          <label for="collapsible1">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </label>
        </button>
        <div class="collapsible-body">
          <ul class="inline">
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/aboutus">About Us</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/price">Price</nuxt-link>
            </li>
            <li>
              <ReactiveNavButton />
            </li>
            <li v-if="this.$store.state.user != null">
              <a @click="signOut">Sign Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex'
import ReactiveNavButton from '@/components/ReactiveNavButton.vue'
export default {
  components: {
    ReactiveNavButton
  },
  methods: {
    signOut() {
      this.$store.dispatch('SignOut')
    }
  }
}
</script>

<style scoped>
nav {
  background: none;
}
</style>
