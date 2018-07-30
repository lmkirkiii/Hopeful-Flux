const User = require("../models/User");
const Prompt = require("../models/Prompt");
const passport = require("passport");

module.exports = {

    show: (req, res) => {
        Prompt.find({})
        .then(prompt => {
            var prompt = prompt[0]
            res.render("prompt/page", {prompt});
            
          });
    }
  };