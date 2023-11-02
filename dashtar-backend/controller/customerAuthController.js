const Customer = require("../models/Customer");
const bcrypt = require("bcryptjs");
const utc = require("dayjs");
const dayjs = require("dayjs");
const jwt = require("jsonwebtoken");
dayjs.extend(utc);
const { signInToken, tokenForVerify } = require("../config/auth");
const { sendEmail } = require("../lib/email-sender/sender");

const loginAuthCustomer = async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email });

    if (customer && bcrypt.compareSync(req.body.password, customer.password)) {
      const token = signInToken(customer);
      res.send({
        token,
        _id: customer._id,
        name: customer.name,
        email: customer.email,
      });
    } else {
      res.status(404).send({
        message: "Invalid Email or password",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "plase resolve the enternal error" + err,
    });
  }
};

const registerCustomer = async (req, res) => {
  try {
    const isAdded = await Customer.findOne({ email: req.body.email });

    if (isAdded) {
      return res.status(403).send({
        message: "This Email already Added!",
      });
    } else {
      const newCustomer = new Customer({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        pincode: req.body.pin,
        moreinfo: req.body.optional,
        locality: req.body.locality,
        phone: req.body.phone,
        mode: req.body.mode,
      });
      const customer = await newCustomer.save();
      const token = signInToken(customer);
      res.send({
        token,
        _id: customer._id,
        name: customer.name,
        email: customer.email,
        address: customer.address,
        city: customer.city,
        state: customer.state,
        pincode: customer.pin,
        moreinfo: customer.optional,
        locality: customer.locality,
        phone: customer.tel,
        mode: customer.mode,
        joiningData: Date.now(),
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "please resolve this probelem " + error,
    });
  }
};
const forgetAuthPassword = async (req, res) => {
  try {
    const isAdded = await Customer.findOne({ email: req.body.verifyEmail });
    if (isAdded) {
      const token = tokenForVerify(isAdded);
      const body = {
        from: process.env.EMAIL_USER,
        to: `${req.body.verifyEmail}`,
        subject: "Password Reset",
        html: `<h2>Hello ${req.body.verifyEmail}</h2>
        <p>A request has been received to change the password for your <strong>Kachabazar</strong> account </p>
  
          <p>This link will expire in <strong> 15 minute</strong>.</p>
  
          <p style="margin-bottom:20px;">Click this link for reset your password</p>
  
          <a href=${process.env.CUSTOMER_URL}/reset-password/${token}  style="background:#22c55e;color:white;border:1px solid #22c55e; padding: 10px 15px; border-radius: 4px; text-decoration:none;">Reset Password </a>
  
          
          <p style="margin-top: 35px;">If you did not initiate this request, please contact us immediately at support@kachabazar.com</p>
  
          <p style="margin-bottom:0px;">Thank you</p>
          <strong>Kachabazar Team</strong>
               `,
      };
      const message = "Please Check your email to reset Password";
      sendEmail(body, res, message);
    } else {
      return res.status(404).send({
        message: "Customer  Not found with this email!",
      });
    }
  } catch (error) {
    res.status(403).send({
      message: `pleas solve the enternal ${error}`,
    });
  }
};
const resetPassword = async (req, res) => {
  try {
    const token = req.body.token;
    const { email } = jwt.decode(token);
    const customer = await Customer.findOne({ email: email });
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_FOR_VERIFY, (err, decoded) => {
        if (err) {
          return res.status(500).send({
            message: "token espired, please try again !" + err,
          });
        } else {
          customer.password = bcrypt.hashSync(req.body.newPassword);
          customer.save();
          res.send({
            message: "Your password change successful, you can login now !",
          });
        }
      });
    }
  } catch (err) {
    res.status(403).send({
      message: `plase resolve the  enternal ${err}`,
    });
  }
};

module.exports = {
  registerCustomer,
  loginAuthCustomer,
  forgetAuthPassword,
  resetPassword,
};
