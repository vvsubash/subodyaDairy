<template>
  <div class="container">
    <p>Hello {{ this.$store.state.user }} continue</p>
    <form class="form-group border col">
      <label for="paperInputs1">Name</label>
      <input type="text" placeholder="Nice input" />
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
