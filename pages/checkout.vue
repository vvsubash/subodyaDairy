<template>
  <div class="home">
    <form>
      <input v-model="price" type="text" />
      <button @click="makePayment">GO</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      price: 0
    }
  },
  methods: {
    // Initializing the payment request
    makePayment() {
      // 1. GENERATE ORDER_ID using razorpay/order api
      axios
        .post('https://us-central1-ssss-ss.cloudfunctions.net/sap/', {
          amount: this.price
        })
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res)
          // eslint-disable-next-line no-undef
          const rzp1 = new Razorpay({ ...options, order_id: res.data.id })
          rzp1.open()
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log('ERR', err)
        })

      //  create options object when creating order
      // eslint-disable-next-line no-var
      var options = {
        key: 'rzp_test_vLUpWWam4Z8FgN',
        amount: '59900', /// The amount is shown in currency subunits. Actual amount is ₹599.
        name: 'Formec Media',
        currency: 'INR', // Optional. Same as the Order currency
        description: 'Purchase Description',
        image: 'https://jolly-volhard-bc2f0b.netlify.com/favicon.ico',
        handler: (response) => {
          this.verifySignature(response)
        },
        prefill: {
          name: 'Rohan Lamb',
          email: 'lambrohan@gmail.com'
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
      // eslint-disable-next-line no-console
      console.log(response)
      // axios
      //   .post(
      //     'https://us-central1-paytm-payments-f3957.cloudfunctions.net/paymentApi/confirmPayment',
      //     response
      //   )
      //   .then((res) => {
      //     // eslint-disable-next-line no-console
      //     console.log('PAYMENT RESPONSE', res)
      //   })
      //   // eslint-disable-next-line handle-callback-err
      //   .catch((err) => {
      //     // eslint-disable-next-line no-console
      //     console.log('error')
      //   })
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid rgb(0, 217, 255);
  padding: 8px 40px;
  text-align: center;
}
button {
  background: rgb(0, 241, 161);
  border: none;
  padding: 8px 30px;
  margin: 16px;
}
</style>
