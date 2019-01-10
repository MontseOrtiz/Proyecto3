const router = require("express").Router();
const User = require("../models/User");
const passport = require("../helpers/passport");

//middleware para ver si hay un usuario logeados
const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(403).json({ message: "Inicia sesión o registrate" });
};

//signup

router.post("/signup", (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(e => {
      res.status(500).json(e);
    });
});

//login
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json(info);
    if (!user) return res.status(404).json(info);
    req.login(user, err => {
      return res.status(201).json(user);
    });
  })(req, res, next);
});

//logout

router.get("/logout", (req, res, next) => {
  req.logOut();
  res.status(200).json({ message: "Sesión finalizada exitosamente" });
});

//profile

router.get("/profile/:id", isAuth, (req, res, next) => {
  const { id } = req.params;
  console.log("hola");
  User.findById(req.params.id)
    .then(response => {
      return res.status(201).json(response);
    })
    .catch(e => res.json(e));
});

//edit profile

router.put("/profile/edit/:id", isAuth, (req, res, next) => {
  console.log(req.body);
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(e => res.status(500).json(e));
});

module.exports = router;
