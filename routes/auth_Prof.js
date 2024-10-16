const express = require("express");
const router = express.Router();

const { register, login, refresh,showprofileProf } = require("../controllers/auth_Prof");

router.post("/", async (req,res) => {
    res.sendStatus(400);
});

router.post("/register", register);
router.post("/login" , login);
router.post("/refresh" , refresh);
router.get("/show/:id" , showprofileProf);

module.exports = router;