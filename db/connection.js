const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fluxer");
mongoose.Promise = Promise;
module.exports = mongoose;