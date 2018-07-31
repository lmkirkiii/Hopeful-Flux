const { Flux, Comment } = require("../models/Flux");

module.exports = {
  show: (req, res) => {
    Flux.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, flux) {
        Comment.populate(flux.comments, { path: "author" }, function(
          err,
          comments
        ) {
          flux.comments = comments;
          console.log(flux);
          res.render("flux/show", flux);
        });
      });
  },
  new: (req, res) => {
    res.render("flux/new");
  },
  create: (req, res) => {
    Flux.create({
      content: req.body.flux.content,
      author: req.user._id
    }).then(flux => {
      req.user.fluxus.push(flux);
      req.user.save(err => {
        res.redirect(`/flux/${flux._id}`);
      });
    });
  },
  // update: (req, res) => {
  //   let { content } = req.body;
  //   Flux.findOne({ _id: req.params.id }).then(flux => {
  //     flux.comments.push({
  //       content,
  //       author: req.user._id
  //     });
  //     flux.save(err => {
  //       res.redirect(`/flux/${flux._id}`);
  //     });
  //   });
  // },
  update: (req, res) => {
      let { content } = req.body;
      Flux.findByIdAndUpdate({ _id: req.params.id }).then(flux => {
        flux.comments.push({
          content,
          author: req.user._id
        });
        flux.save(err => {
          res.redirect(`/flux/${flux._id}`);
        });
      });
    },

  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect("/");
    }
  },

  delete: (req, res) => {
    Flux.findOneAndRemove({ _id: req.params.id }).then(flux => {
      res.redirect('/')
    })
  }
};