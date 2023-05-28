const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const MW = require('../middleware/auth.js')
const customerController= require("../controllers/customerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/createCustomer',customerController.createCustomer)

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", MW.authenticate, MW.authorise, userController.getUserData)
router.post("/users/:userId/posts", MW.authenticate, MW.authorise, userController.postMessage)

router.put("/users/:userId", MW.authenticate, MW.authorise, userController.updateUser)
router.put('/deleteUsers/:userId', MW.authenticate, MW.authorise, userController.deleteUser)

module.exports = router;