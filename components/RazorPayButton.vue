<template>
  <button @click="makePayment">GO</button>
</template>

<script>
export default {
  props: {
    price: {
      type: Number,
      default: 50
    }
  },
  methods: {
    // Initializing the payment request
    makePayment() {
      this.$axios
        .post(process.env.PAYMENT_API, {
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
        key: process.env.RAZORPAY_KEY_ID,
        name: 'Subodaya Dairy',
        currency: 'INR', // Optional. Same as the Order currency
        description: 'Purchase Description',
        image: 'https://jolly-volhard-bc2f0b.netlify.com/favicon.ico',
        handler: (response) => {
          this.verifySignature(response)
        },
        prefill: {
          name: this.$store.state.user.displayName,
          email: this.$store.state.user.email
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
        .post(process.env.PAYMENT_CONFIRMATION_API, response)
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

<style lang="scss" scoped></style>
