const { Flux } = require("../models/Flux");

module.exports = {
  index: (req, res) => {
    Flux.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(fluxus => {
        res.render("app/index", { fluxus });
      });
  }
};