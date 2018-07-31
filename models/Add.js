const mongoose = require("../db/connection");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;


const Add = new Schema({
    name: String,
    content: String
  },
  { collection : 'prompt' });  
  
  Add.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  Add.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
  };
  
  module.exports = mongoose.model("Add", Add);