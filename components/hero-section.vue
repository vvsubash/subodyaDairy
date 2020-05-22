<template>
  <div class="row flex-middle flex-center">
    <div class="sm-12 md-8 col">
      <h2 class="mu">
        Get Organic Milk Delivered to Your House with Click of a Button
      </h2>
    </div>
    <div class="sm-12 md-4 lg-2 col">
      <UserStateModal />
    </div>
  </div>
</template>

<script>
import UserStateModal from '@/components/UserStateModal.vue'

export default {
  components: {
    UserStateModal
  }
}
</script>

<style scoped>
.mu {
  margin: unset;
}
</style>
