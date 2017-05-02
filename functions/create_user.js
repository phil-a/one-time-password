const admin = require("firebase-admin");

module.exports = function(req, res) {
  // Verify user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: "Bad Input" });
  }

  // Format phone number
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  //Create a new user account with phone
  admin
    .auth()
    .createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));
};
