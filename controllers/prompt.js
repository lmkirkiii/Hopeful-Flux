const User = require("../models/User");
const Prompt = require("../models/Prompt");
const passport = require("passport");

module.exports = {

    show: (req, res) => {
        Prompt.find({})
        .then(prompt => {
           for(var i = prompt.length -1; i > 0; i--){
                var j = Math.floor(Math.random() * (i + 1));
                var temp = prompt[i];
                prompt[i] = prompt[j];
                prompt[j] = temp;
                var prompter = prompt[i]
                console.log(prompter)
                res.render("prompt/page", {prompter})
           }
        });

  }

}