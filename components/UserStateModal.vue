<template>
  <div v-if="user == null">
    <label class="paper-btn btn-primary" for="modal-1">Click it now</label>
    <input id="modal-1" class="modal-state" type="checkbox" />
    <div class="modal">
      <label class="modal-bg" for="modal-1"></label>
      <div class="modal-body">
        <label class="btn-close" for="modal-1">X</label>
        <h4 class="modal-title">Sign in</h4>
        <h5 class="modal-subtitle">Please Signin So we can serve you better</h5>
        <reactive-nav-button class="paper-btn margin" />
      </div>
    </div>
  </div>
  <div v-else>
    <nuxt-link to="dashboard">
      <h5>{{ user.displayName }}'s Dashboard</h5>
    </nuxt-link>
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
  data() {
    return {
      user: this.$store.state.user
    }
  }
}
</script>
<style scoped>
.btn-primary {
  background-color: #222222;
}
</style>
