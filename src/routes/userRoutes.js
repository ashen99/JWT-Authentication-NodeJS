const express = require("express");
const { loginUser , registerUser , welcomeUser} = require('../controller/userController')
const router = express.Router();
const auth = require("../middleware/auth")


router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/welcome',auth,welcomeUser)


module.exports = router;

