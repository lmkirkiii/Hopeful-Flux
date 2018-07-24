const User = require("../models/User");
const { Flux } = require("../models/Flux");
const bcrypt = require("bcrypt-nodejs");

const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Flux.find({}).remove(() => {
    let bugs = User.create({
      local: {
        email: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
      }
    }).then(user => {
      Promise.all([
        Flux.create({
          content: "eh, what's up doc?",
          author: user._id
        }).then(flux => {
          user.fluxus.push(flux);
        }),
        Flux.create({
          content: "That's all, folks!",
          author: user._id
        }).then(flux => {
          user.fluxus.push(flux);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let daffy = User.create({
      local: {
        email: "daffyduck@gmail.com",
        password: createPassword("daffyduck")
      }
    }).then(user => {
      Promise.all([
        Flux.create({
          content: "Who's this Duck Dodgers any how?",
          author: user._id
        }).then(flux => {
          user.fluxus.push(flux);
        }),
        Flux.create({
          content: "You're dethpicable.",
          author: user._id
        }).then(flux => {
          user.fluxus.push(flux);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let elmer = User.create({
      local: {
        email: "elmerfudd@gmail.com",
        password: createPassword("elmerfudd")
      }
    }).then(user => {
      Promise.all([
        Flux.create({
          content:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
          author: user._id
        }).then(flux => {
          user.fluxus.push(flux);
        }),

        Flux.create({
          content: "Kiww da wabbit!",
          author: user._id
        }).then(flux => {
          user.fluxus.push(flux);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});