/**
 * HTTP function that supports CORS requests.
 *
 * @param {Object} req Cloud Function request context.
 * @param {Object} res Cloud Function response context.
 */
const Razorpay = require('razorpay')

var instance = new Razorpay({
  key_id: 'rzp_test_vLUpWWam4Z8FgN',
  key_secret: 'jIT0IE6xsUSjyW4vnNmLAeQe'
})
exports.sap = (req, res) => {
  // Set CORS headers for preflight requests
  // Allows GETs from any origin with the Content-Type header
  // and caches preflight response for 3600s

  res.set('Access-Control-Allow-Origin', '*')

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'POST')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Max-Age', '3600')
    res.status(204).send('')
  } else {
    instance.orders.create(
      {
        amount: req.body.amount,
        currency: 'INR',
        receipt: 'order_rcptid_11',
        payment_capture: '1'
      },
      function(err, order) {
        console.log(order)
        // res.send(order);
      }
    )
  }
}
