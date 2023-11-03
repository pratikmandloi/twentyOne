require("dotenv").config();
const stripe = require("stripe")(`${process.env.STRIPE_KEY}` || null); /// use hardcoded key if env not work

const mongoose = require("mongoose");

const Order = require("../models/Order");

const { handleProductQuantity } = require("../lib/stock-controller/others");
const { formatAmountForStripe } = require("../lib/stripe/stripe");

const addOrder = async (req, res) => {
  try {
    console.log(req.user);
    console.log(req.body);
    const newOrder = new Order({
      ...req.body,
      user: req.user._id,
    });
    const order = await newOrder.save();
    res
      .status(201)
      .send({ order, ok: true, message: `Order Created Successfully` });
    // handleProductQuantity(order.cart);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message,
    });
  }
};

//create payment intent for stripe
const createPaymentIntent = async (req, res) => {
  const { total: amount, cardInfo: payment_intent, email } = req.body;
  // Validate the amount that was passed from the client.
  if (!(amount >= process.env.MIN_AMOUNT && amount <= process.env.MAX_AMOUNT)) {
    return res.status(500).json({ message: "Invalid amount." });
  }
  if (payment_intent.id) {
    try {
      const current_intent = await stripe.paymentIntents.retrieve(
        payment_intent.id
      );
      // If PaymentIntent has been created, just update the amount.
      if (current_intent) {
        const updated_intent = await stripe.paymentIntents.update(
          payment_intent.id,
          {
            amount: formatAmountForStripe(amount, process.env.CURRENCY),
          }
        );
        // console.log("updated_intent", updated_intent);
        return res.send({ updated_intent, ok: true });
      }
    } catch (err) {
      if (err.code !== "resource_missing") {
        const errorMessage =
          err instanceof Error ? err.message : "Internal server error";
        return res.status(500).send({ message: errorMessage });
      }
    }
  }
  try {
    // Create PaymentIntent from body params.
    const params = {
      amount: formatAmountForStripe(amount, process.env.CURRENCY),
      currency: process.env.CURRENCY,
      description: process.env.STRIPE_PAYMENT_DESCRIPTION ?? "",
      automatic_payment_methods: {
        enabled: true,
      },
    };
    const payment_intent = await stripe.paymentIntents.create(params);
    // console.log("payment_intent", payment_intent);

    res.send({ payment_intent, ok: true });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    res.status(500).send({ message: errorMessage });
  }
};

// get all orders user
const getOrderCustomer = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const pages = Number(page) || 1;
    const limits = Number(limit) || 8;
    const skip = (pages - 1) * limits;

    const totalDoc = await Order.countDocuments({ user: req.user._id });

    // total padding order count
    const totalPendingOrder = await Order.aggregate([
      {
        $match: {
          status: "Pending",
          user: mongoose.Types.ObjectId(req.user._id),
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$total" },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    // total padding order count
    const totalProcessingOrder = await Order.aggregate([
      {
        $match: {
          status: "Processing",
          user: mongoose.Types.ObjectId(req.user._id),
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$total" },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    const totalDeliveredOrder = await Order.aggregate([
      {
        $match: {
          status: "Delivered",
          user: mongoose.Types.ObjectId(req.user._id),
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$total" },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    // today order amount

    // query for orders
    const orders = await Order.find({ user: req.user._id })
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limits);

    res.send({
      orders,
      limits,
      pages,
      pending: totalPendingOrder.length === 0 ? 0 : totalPendingOrder[0].count,
      processing:
        totalProcessingOrder.length === 0 ? 0 : totalProcessingOrder[0].count,
      delivered:
        totalDeliveredOrder.length === 0 ? 0 : totalDeliveredOrder[0].count,
      totalDoc,
      ok: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};
const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    res.send({ order, ok: true });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addIntoCart = async (req, res) => {
  try {
    const user = req.user;

    const order = await Order.findOne({
      user: user._id,
    });

    if (!order) {
      return addOrder(req, res);
    }

    console.log(req.body);
    order.cart.push(req.body.cart);

    await order.save();

    return res.status(200).json({
      message: `Order Added into Cart Successfully`,
      ok: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCarts = async (req, res) => {
  try {
    const user = req.user;

    const order = await Order.findOne({
      user: user._id,
    });

    return res.status(200).json({
      order,
      message: `All Carts fetched Successfully!`,
      ok: true,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteCart = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    await Order.updateOne({user: user._id} ,
      {
        $pull:{ cart : {_id: id}}
      }
    );

    return res.status(200).json({
      message: `Cart item Deleted Successfully !`,
      ok: true,
    });

  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateCartQuantity = async(req,res) => {
  try {

    const user = req.user;
    const { id } = req.params;
    const { newQuantity } = req.body;

    await Order.updateOne({
      user: user._id,
      "cart._id" : id
    }, {
      $set: {
        "cart.$.quantity" : newQuantity
      }
    })
    
    return res.status(200).json({
      message: `Cart Quantity Updated Successfully !`,
      ok: true,
    });

  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
}

module.exports = {
  addOrder,
  getOrderById,
  getOrderCustomer,
  createPaymentIntent,
  addIntoCart,
  getAllCarts,
  deleteCart,
  updateCartQuantity
};
