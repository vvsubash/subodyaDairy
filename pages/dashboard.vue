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
      <!-- <div class="form-group">
        <h3>Address</h3>
        <label for="paperInputs1">Door Number</label>
        <input v-model="phoneNumber" class="input-block" />
        <label for="paperInputs1">Street Name</label>
        <input v-model="phoneNumber" class="input-block" />
      </div>
      <div>
        <label for="paperInputs1">Pin Code</label>
        <input v-model="pinCode" class="input-block" />
      </div>
      <div v-if="pinCode == 530003">
        .
        <fieldset class="form-group">
          <legend>Token payment</legend>
          <label for="paperChecks1" class="paper-check">
            <input
              id="paperChecks1"
              type="checkbox"
              name="paperChecks"
              value="option 1"
            />
            <span>I Agree to make a token payment</span>
          </label>
        </fieldset>
      </div>-->
      <input type="submit" />
    </form>
    {{ this.$store.state.hasPaid }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      // userName: ,
      // phoneNumber: this.$store.state.user.phoneNumber,
      pinCode: 530003
    }
  },
  watch: {
    userName(newValue, oldValue) {
      return this.$store.state.user.displayName
    }
  },
  // computed: {
  //   userName() {
  //     return this.$store.state.user.displayName
  //   }
  // },
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
