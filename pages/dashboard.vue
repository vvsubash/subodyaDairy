<template>
  <div class="container">
    <h3>
      Hello {{ userName }} please give us some details about you to continue
    </h3>
    <form class="form-group border col" @submit.prevent="lol">
      <div class="form-group">
        <label for="paperInputs1">Display Name</label>
        <sub></sub>
        <input v-model="userName" class="input-block" />
      </div>
      <div class="form-group">
        <label for="paperInputs1">Phone Number</label>
        <input class="input-block" />
      </div>
      <input type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
      phoneNumber: this.$store.state.user.phoneNumber,
      pinCode: 530003
    }
  },
  created() {
    this.$store.dispatch('getUserInfo/getUserInfo')
  },
  methods: {
    lol() {
      this.$router.push('checkout')
    }
  },
  validate({ store }) {
    return store.state.user != null
  }
}
</script>

<style lang="scss" scoped></style>
