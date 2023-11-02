const Uploads = require("../models/uploads");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const path = require("path");
const server = process.env.VITE_APP_API_BASE_URL;

const fileUplaoder = async (req, res) => {
  try {
    const file = req.files;
    const upData = file.map((data) => {
      return {
        image: {
          filename: data.fieldname,
          originalname: data.originalname,
          path: data.path,
          mimetype: data.mimetype,
          status: "hide",
        },
      };
    });
    const data = await Uploads.insertMany(upData);
    res.status(201).send({
      message: "file Upload succes",
      ok: true,
      Data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: "Resolve the internal errr" + err,
    });
  }
};
const homePageImgChange = async (req, res) => {
  try {
    const file = req.files;
    const upData = file.map((data) => {
      return {
        image: {
          filename: data.fieldname,
          originalname: data.originalname,
          path: data.path,
          mimetype: data.mimetype,
          isVisable: false,
          status: "hide",
        },
      };
    });
    const data = await Uploads.insertMany(upData);
    res.status(201).send({
      message: "file Upload succes",
      ok: true,
      Data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: "Resolve the internal errr" + err,
    });
  }
};
const homePageImgUpdate = async (req, res) => {
  try {
    const imgId = req.body.id;
    const isVisable = req.body.isVisable;
    const status = req.body.status;
    if (isVisable === false) {
      Uploads.updateOne(
        { _id: ObjectId(imgId), "image.isVisable": false },
        {
          $set: {
            "image.isVisable": true,
            "image.status": "show",
          },
        },
        { upsert: false },
        (err, data) => {
          if (err) return err;
          res.status(201).send({
            Data: data,
            message: "file Updated success",
            isVisable: true,
          });
        }
      );
    } else {
      Uploads.updateOne(
        { _id: ObjectId(imgId), "image.isVisable": true },
        {
          $set: {
            "image.isVisable": false,
            "image.status": "hide",
          },
        },
        { upsert: false },
        (err, data) => {
          if (err) return err;
          res.status(201).send({
            Data: data,
            message: "file Updated success",
            isVisable: false,
          });
        }
      );
    }
  } catch (err) {
    res.status(500).send({
      message: "solve the internal err ..",
    });
  }
};
const homePageFileDelete = async (req, res) => {
  try {
    const getId = req.body.id;
    if (getId) {
      Uploads.deleteOne({ _id: getId }, (err, result) => {
        if (err) return err;
        res.status(201).send({
          message: "delete document success",
          Data: result,
          status: 100,
        });
      });
    } else {
      res.status(500).send({
        message: "please provide img Id on header",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Resolve the intnernal err" + err,
    });
  }
};
const getHomePageImage = async (req, res) => {
  try {
    const data = await Uploads.findOne({
      "image.isVisable": true,
    });

    if (!data) {
      return res.status(404).send({
        message: "Image not found",
      });
    }
    res.status(200).send({
      message: "Image viewing",
      Image: data,
      ok: true,
    });
  } catch (err) {
    res.status(500).send({
      message: "Server error",
    });
  }
};
const getHomepageImgaeAll = async (req, res) => {
  try {
    const imgAll = await Uploads.find({
      "image.isVisable": { $exists: true },
    });
    res.status(201).send({
      message: "all Image ..",
      Data: imgAll,
      ok: true,
    });
  } catch (err) {
    res.status(500).send({
      message: "solve the internal err.." + err,
    });
  }
};
const deleteProductImg = async (req, res) => {
  try {
    const img = req.body.image;
    if (img) {
      Uploads.deleteOne({ "image.originalname": img }, (err, result) => {
        if (err) return err;
        res.status(201).send({
          message: "image deleted",
          ok: true,
          data: result,
        });
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "solve the internal err.." + EvalError,
    });
  }
};
module.exports = {
  fileUplaoder,
  homePageImgChange,
  homePageFileDelete,
  getHomePageImage,
  getHomepageImgaeAll,
  homePageImgUpdate,
  deleteProductImg,
};
