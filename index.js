const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("./data/index");
const newUser = require("./data/sampleUser");
// let counter = arr => {
//   return arr.length;
// };
// const usersRoutes = require("./routes/users");

app.use(bodyParser.json());
// app.use(usersRoutes);

//get all users
app.get("/users", (req, res) => {
  res.send(users);
});

//get user by id
app.get("/users/:id", (req, res) => {
  const found = users.find(usr => usr.id === parseInt(req.params.id));
  if (found) {
    res.json(found);
  } else {
    res
      .status(400)
      .json({ msg: `MSG : no user with id ${req.params.id} was found` });
  }
});

//!!!!
// add new user //
app.post("/users", (req, res) => {
  let usInput = req.body;
  let newUsr = {
    id: users.length + 1,
    name: usInput.name,
    username: usInput.username,
    email: usInput.email,
    address: {
      street: usInput.address.street,
      suite: usInput.address.suite,
      city: usInput.address.city,
      zipcode: usInput.address.zipcode,
      geo: {
        lat: usInput.address.geo.lat,
        lng: usInput.address.geo.lng
      }
    },
    phone: usInput.phone,
    website: usInput.website,
    company: {
      name: usInput.company.name,
      catchPhrase: usInput.company.catchPhrase,
      bs: usInput.company.bs
    }
  };

  users.push(newUsr);

  res.json({ msg: `New User, ${newUsr.name}, was added` });
});
//update user
// app.("/users/:id", (req, res) => {
//   const found = users.find(usr => usr.id === parseInt(req.params.id));
//   if (found) {
//     const updated = req.body;
//     users.forEach(user => {
//       if (user.id === parseInt(req.params.id)) {
//         user.name = updated.name ? updated.name : users.name;
//         user.username = updated.username ? updated.username : users.username;
//         user.email = updated.email ? updated.email : users.email;
//         users.address = updated.address ? updated.address : users.address;
//         users.phone = updated.phone ? updated.phone : users.phone;
//         users.website = updated.website ? updated.website : users.website;
//         users.company = updated.company ? updated.company : users.company;

//         res.json({ msg: "User updated", user });
//       }
//     });
//   } else {
//     res
//       .status(400)
//       .json({ msg: `MSG : no user with id ${req.params.id} was found` });
//   }
// });

//delete user

// app.delete("/users/:id", (req, res) => {
//   const found = users.find(usr => usr.id === parseInt(req.params.id));
//   if (found) {
//     res.json({
//       msg: "User deleted",
//       users: users.filter((user = user.id !== parseInt(req.params.id)))
//     });
//   } else {
//     res
//       .status(400)
//       .json({ msg: `MSG : no user with id ${req.params.id} was found` });
//   }
// });

app.get("/", (req, res) => res.send("default route"));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("app is listening on:", port);
});
