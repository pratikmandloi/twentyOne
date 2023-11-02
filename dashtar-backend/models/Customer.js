const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    pincode: {
      type: Number,
      required: false,
    },
    moreinfo: {
      type: String,
      required: false,
    },
    locality: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: false,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    mode: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
