const Prompt = require("../models/Prompt");

module.exports = {

    show: (req, res) => {
     res.render("delete/home");
    },
    delete: (req,res) => {
        Prompt.deleteOne({"name" : req.body.find.name }).then(prompt => {
            res.render("delete/thanks")
        })
    }
  }

