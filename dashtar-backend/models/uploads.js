const mongoose = require("mongoose");
const uploaderSchema = new mongoose.Schema({
  image: {
    filename: String,
    originalname: String,
    path: String,
    mimetype: String,
    collectiveId: String,
    isVisable: false,
    status: String,
  },
});
const Uploads = mongoose.model("Uploads", uploaderSchema);
module.exports = Uploads;
