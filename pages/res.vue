<template>
  <div>
    <h1>Complete + {{ ip }}</h1>
    <button @click="fapi">gh</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      ip: null
    }
  },
  methods: {
    fapi() {
      axios
        .post('https://us-central1-ssss-ss.cloudfunctions.net/sap/', {
          // eslint-disable-next-line prettier/prettier
          amount: 500,
          // eslint-disable-next-line prettier/prettier
          hell: 600
        })
        .then(function(response) {
          // eslint-disable-next-line no-console
          console.log(response)
        })
        .catch(function(error) {
          // eslint-disable-next-line no-console
          console.log(error)
        })
    }
  }
}
</script>
