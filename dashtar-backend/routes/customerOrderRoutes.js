const express = require("express");
const router = express.Router();
const {
  addOrder,
  getOrderById,
  getOrderCustomer,
  createPaymentIntent,
  addIntoCart,
  getAllCarts,
  deleteCart,
  updateCartQuantity
} = require("../controller/customerOrderController");

//add a order
router.post("/add", addOrder);

// create stripe payment intent
router.post("/create-payment-intent", createPaymentIntent);

//get a order by id
router.get("/:id", getOrderById);

//get all order by a user
router.get("/", getOrderCustomer);

// add into card
router.post("/add-cart", addIntoCart);

// get all pending carts
router.post("/get-carts", getAllCarts);

// delete a card by Id
router.post("/delete-cart/:id", deleteCart);

// Update cart Quantity
router.patch("/update-cart/:id", updateCartQuantity);

module.exports = router;
