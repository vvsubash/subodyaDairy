---
to: "components/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.vue"
---
<template>
  <div></div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped></style>
