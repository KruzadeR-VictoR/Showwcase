const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51NArZuSJQp85YLiwY7lJBewUHU70k54l0MnaHpHwPYXVwcEEDmWqDBV0fWjAmJR6B4qatnSpNso51NR0nFLG7Edh00HUmSh4ly"
);

app.use(cors());

app.post("/checkout", async (req, res) => {
  // const items = req.body; //in case of multiple courses in cart
  // const lineItems = []; //in case of multiple courses in cart
  const course = req.body;
  // console.log(items);
  //in case of multiple courses in cart
  // items.forEach((item) => {
  //   lineItems.push({
  //     price: item.id,
  //     quantity: 1,
  //   });
  // });

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: course.id,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/payment/successful",
    cancel_url: "http://localhost:5173/payment/failed",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
  // res.send("Completed");
});

app.listen(3000, () => console.log("Listening on port 3000"));
