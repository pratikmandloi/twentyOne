require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const { connectDB } = require("../config/db");
const productRoutes = require("../routes/productRoutes");
const customerRoutes = require("../routes/customerRoutes");
const adminRoutes = require("../routes/adminRoutes");
const orderRoutes = require("../routes/orderRoutes");
const customerOrderRoutes = require("../routes/customerOrderRoutes");
const categoryRoutes = require("../routes/categoryRoutes");
const couponRoutes = require("../routes/couponRoutes");
const attributeRoutes = require("../routes/attributeRoutes");
const settingRoutes = require("../routes/settingRoutes");
const currencyRoutes = require("../routes/currencyRoutes");
const languageRoutes = require("../routes/languageRoutes");
const customerLoginRoute = require("../routes/customerLoginRoutes");
const { isAuth, isAdmin } = require("../config/auth");
const fileUploadRoutes = require("../routes/fileUploadRoutes");
const multer = require("multer");

connectDB();
const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + "/assets/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// We are using this for the express-rate-limit middleware
// See: https://github.com/nfriedly/express-rate-limit
// app.enable('trust proxy');
app.set("trust proxy", 1);

app.use(express.json({ limit: "4mb" }));
helmet({
  crossOriginResourcePolicy: false,
});
app.use(cors("*"));

//root route
// app.get("/", (req, res) => {
//   res.send("App works properly!");
// });

//this for route will need for store front, also for admin dashboard
app.use("/api/uploads", upload.array("file"), fileUploadRoutes);
app.use("/api/products/", productRoutes);
app.use("/api/category/", categoryRoutes);
app.use("/api/coupon/", couponRoutes);
app.use("/api/customer/", customerRoutes);
app.use("/api/order/", isAuth, customerOrderRoutes);
app.use("/api/attributes/", attributeRoutes);
app.use("/api/setting/", settingRoutes);
app.use("/api/currency/", isAuth, currencyRoutes);
app.use("/api/language/", languageRoutes);

//if you not use admin dashboard then these two route will not needed.
app.use("/api/customer/auth", customerLoginRoute);
app.use("/api/admin/", adminRoutes);
app.use("/api/orders/", orderRoutes);

// app.get("/", async (req, res, next) => {
//   try {
//     let html = fs.readFileSync(path.resolve(root, "index.html"), "utf-8");

//     // Transform HTML using Vite plugins.
//     html = await viteServer.transformIndexHtml(req.url, html);

//     res.send(html);
//   } catch (e) {
//     return next(e);
//   }
// });

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
});

// Serve static files from the "dist" directory
// app.use(express.static(path.join(__dirname, "build")));
app.use("/api/static", express.static("assets/uploads"));
app.get("/api/static/:img", (req, res) => {
  const img = req.params.img;
  res.sendFile(path.join(__dirname, "assets/uploads", `${img}`));
});
// Serve the index.html file for all routes

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "assets/uploads", "index.html"));
// });
// const pathClient = path.join(__dirname, "21 WEBSITE/twenty one")
// app.use("/", express.static(pathClient));
// const pathAdmin = path.join(__dirname, "build")ww
//  app.use("/admin", express.static(pathAdmin));

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`server running on port ${PORT}`));

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
