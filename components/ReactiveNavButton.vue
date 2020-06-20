<template>
  <a @click="signin">{{
    this.$store.state.user == null ? 'Login' : 'Go To Dashboard'
  }}</a>
</template>

<script>
// eslint-disable-next-line
import { mapState } from 'vuex'
export default {
  methods: {
    signin() {
      this.$store.state.user == null
        ? // eslint-disable-next-line no-undef
          this.$store.dispatch('signInWithGoogle')
        : this.$router.push('check2')
    }
  }
}
</script>

<style lang="scss" scoped></style>
