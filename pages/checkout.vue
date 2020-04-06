<template>
  <div>
    <input v-model="price" type="text" />
    <button @click="makePayment">GO</button>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      price: 50
    }
  },
  methods: {
    // Initializing the payment request
    makePayment() {
      this.$axios
        .post('https://asia-east2-ssss-ss.cloudfunctions.net/papi/', {
          amount: this.price * 100
        })
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log(response)
          // eslint-disable-next-line no-undef
          const rzp1 = new Razorpay({ ...options, order_id: response.data.id })
          rzp1.open()
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('ERR', err)
        })

      //  create options object when creating order
      // eslint-disable-next-line no-var
      var options = {
        key: 'rzp_live_bUOLVoGDfwKiUh',
        // amount: '59900', /// The amount is shown in currency subunits. Actual amount is ₹599.
        name: 'Subodaya Dairy',
        currency: 'INR', // Optional. Same as the Order currency
        description: 'Purchase Description',
        image: 'https://jolly-volhard-bc2f0b.netlify.com/favicon.ico',
        handler: (response) => {
          this.verifySignature(response)
        },
        prefill: {
          name: 'Venkat',
          email: 'venkat@suba.sh'
        },
        notes: {
          address: 'Hello World'
        },
        theme: {
          color: '#00ffff'
        }
      }
    },
    verifySignature(response) {
      this.$axios
        .post('https://asia-east2-ssss-ss.cloudfunctions.net/papi-1/', response)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log('PAYMENT RESPONSE', res.data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('error')
        })
    }
  },
  head() {
    return {
      script: [{ src: 'https://checkout.razorpay.com/v1/checkout.js' }]
    }
  }
}
</script>
