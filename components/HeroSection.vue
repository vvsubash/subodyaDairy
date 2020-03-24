<template>
  <div class="row flex-middle flex-center">
    <div class="sm-12 md-8 col">
      <h2 class="">
        Get Organic Milk Delivered to Your House with Click of a Button
      </h2>
    </div>
    <div class="sm-12 md-4 lg-2 col">
      <div class="row flex-spaces">
        <label class="paper-btn" for="modal-1">Click it now</label>
      </div>
      <input id="modal-1" class="modal-state" type="checkbox" />
      <div class="modal">
        <label class="modal-bg" for="modal-1"></label>
        <div class="modal-body">
          <label class="btn-close" for="modal-1">X</label>
          <h4 class="modal-title">Sign in</h4>
          <h5 class="modal-subtitle">
            Please Signin So we can serve you better
          </h5>
          <reactive-nav-button class="paper-btn margin" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReactiveNavButton from '~/components/ReactiveNavButton.vue'

export default {
  components: {
    ReactiveNavButton
  }
}
</script>

<style scoped></style>
