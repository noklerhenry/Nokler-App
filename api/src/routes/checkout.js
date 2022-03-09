const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const router = express();

const stripe = new Stripe(
  "sk_test_51KZSeoFbNejxpP0on5jicw5JshREByqXE33i6mzAUMQq2VaLvaMk6OdAWqgEnygbtN71JZwMpdhuZLsUPamCQXPw009celed5X"
);

router.use(cors({ origin: "http://localhost:3000" }));

module.exports = router;

router.post("/", async (req, res) => {
  const { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      payment_method: id,
      confirm: true,
    });

    console.log(payment);

    res.send(payment);
  } catch (error) {
    console.log(error);
    res.json({message: error});
  }
});