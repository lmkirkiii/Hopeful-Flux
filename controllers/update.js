const Add = require("../models/Add");

module.exports = {

    show: (req, res) => {
      console.log(res)
     res.render("update/home");
    }

    // create: (req, res) => {
    //   Add.create({
    //     name: req.body.add.name,
    //     content: req.body.add.content
    //   }).then(added =>{
    //         res.render("add/thanks", {added})
    //     })
    // }
  }

