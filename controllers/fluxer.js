const Image = require("../models/Image");


module.exports = {

    show: (req, res) => {
      Image.aggregate(
        [ { $sample: { size: 1 } } ]
      ).then(image => {
          console.log(image[0])
          var roxy =image[0]
          res.render("fluxer/show", {roxy});
        })
    }
  };


      