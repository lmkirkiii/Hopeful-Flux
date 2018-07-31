const Add = require("../models/Add");

module.exports = {

    show: (req, res) => {
     res.render("add/home");
    },

    create: (req, res) => {
      Add.create({
        name: req.body.add.name,
        content: req.body.add.content
      }).then(added =>{
            res.render("add/thanks", {added})
        })
    }
  }


  
  // create: (req, res) => {
  //   Flux.create({
  //     content: req.body.flux.content,
  //     author: req.user._id
  //   }).then(flux => {
  //     req.user.fluxus.push(flux);
  //     req.user.save(err => {
  //       res.redirect(`/flux/${flux._id}`);
  //     });
  //   });