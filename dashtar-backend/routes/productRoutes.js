const express = require("express");
const router = express.Router();
const {
  addProduct,
  addAllProducts,
  getAllProducts,
  getShowingProducts,
  getProductById,
  getProductBySlug,
  updateProduct,
  updateManyProducts,
  updateStatus,
  deleteProduct,
  deleteManyProducts,
  getShowingStoreProducts,
  getByCategoriesId,
  getSearchByName,
  getByCategoriesId2,
  getByCategoriesId3,
  getOneProductByeId,
  getAttributeFromProductPage,
  addtoCart,
} = require("../controller/productController");

//add a product
router.post("/add", addProduct);

//add multiple products
router.post("/all", addAllProducts);

//get a product
router.post("/:id", getProductById);

//get showing products only
router.get("/show", getShowingProducts);

//get showing products in store
router.get("/store", getShowingStoreProducts);

//get all products
router.get("/", getAllProducts);

//get a product by slug
router.get("/product/:slug", getProductBySlug);

//update a product
router.patch("/:id", updateProduct);

//update many products
router.patch("/update/many", updateManyProducts);

//update a product status
router.put("/status/:id", updateStatus);

//delete a product
router.delete("/:id", deleteProduct);

//delete many product
router.patch("/delete/many", deleteManyProducts);

// get by catory id
router.get("/categories/:id", getByCategoriesId)

router.get("/categories2/:id", getByCategoriesId2)

router.get("/categories3/:id", getByCategoriesId3)

router.get("/get-one-product/:id",getOneProductByeId)

router.get("/attribute/:id",getAttributeFromProductPage)


// get  by search catory 
router.get("/search/:name", getSearchByName)

router.post('/add-to-cart',addtoCart)


module.exports = router;
