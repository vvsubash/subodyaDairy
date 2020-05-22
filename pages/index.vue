<template>
  <div>
    <HeroSection />
    <ProductFeatures />
  </div>
</template>

<script>
import HeroSection from '@/components/hero-section'
import ProductFeatures from '@/components/product-features'
export default {
  components: {
    HeroSection,
    ProductFeatures
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
