const express = require("express");
const {
  fileUplaoder,
  homePageImgChange,
  homePageFileDelete,
  getHomePageImage,
  getHomepageImgaeAll,
  homePageImgUpdate,
  deleteProductImg,
} = require("../controller/fileUploadController");
const Router = express.Router();

// all image uploader geting id from header

Router.post("/all-one-img", fileUplaoder);
Router.post("/add-home-img", homePageImgChange);
Router.post("/delete-home-img", homePageFileDelete);
Router.get("/img", getHomePageImage);
Router.get("/img-all", getHomepageImgaeAll);
Router.post("/img-update", homePageImgUpdate);
Router.post("/delete-product-img", deleteProductImg);
module.exports = Router;
