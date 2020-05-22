<template>
  <div>
    <input v-model="price" type="number" />
    <RazorPayButton :price="100"> </RazorPayButton>
  </div>
</template>

<script>
import RazorPayButton from '@/components/RazorPayButton'
export default {
  components: {
    RazorPayButton
  },
  data() {
    return {
      price: 50
    }
  }
}
</script>

<style lang="scss" scoped></style>
