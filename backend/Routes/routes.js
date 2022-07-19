const express = require("express");
// const { getAllUsers, findUserById, findUserByName, createUser, updateUser } = require("../controllers/usersController");
const { Login, Register, Logout, getAllUsers } = require("../controllers/UsersController");

const router = express.Router();


router.post("/Favoutes", Favourites);

router.post("/FrequentlyVisisted", FRequentlyVisisted);



module.exports = router;