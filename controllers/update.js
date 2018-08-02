const Add = require("../models/Add");

module.exports = {

    show: (req, res) => {
     res.render("update/home");
    },
    update: (req,res) => {
        Add.updateOne({name: req.body.find.name },
        {
            $set:{ "name": req.body.update.name, 
            content: req.body.update.content
        }
        }).then(updated =>{
            console.log(updated)
            res.render("update/thanks", {updated})
        })
    }
  }



