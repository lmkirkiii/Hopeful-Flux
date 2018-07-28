module.exports = {

  index: function(req, res) {
    res.render('about/home', { name: req.params.name })
  }

};