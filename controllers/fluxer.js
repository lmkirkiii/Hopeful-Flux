const Image = require("../models/Image");


module.exports = {

    show: (req, res) => {
      Image.aggregate(
        {$sample: {size: 1}}
      ).then(image => {
          console.log(image)
          res.render("fluxer/show", {image});
        })
    }
  };


      