const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Prof = require("../models/auth_Prof");

//register
exports.register = async (req, res) => {
    const { 
        profName,
        profEmail,
        profUsername,
        profPhone,
        profPassword,
        profFaculty,
        role  } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(profPassword, 10);
        const prof = new Prof({
            profName,
            profEmail,
            profUsername,
            profPhone,
            profPassword : hashedPassword,
            profFaculty,
            role
        });
        await prof.save();
        res.status(201).send("User registered");
        console.log({ prof })
    } catch (err) {
        res.status(400).send(err.message);
    }
};
//login
exports.login = async (req, res) => {
    const { profUsername, profPassword } = req.body;
    try {
        const profs = await Prof.findOne({ profUsername: new RegExp(`^${profUsername}$`, "i") });
        if (!profs) return res.status(400).send("User not found");
        const isMatch = await bcrypt.compare(profPassword, profs.profPassword);
        if (!isMatch) return res.status(400).send("Invalid credentials");

        //add don't show password
        const prof = await Prof.findOne({ profUsername });

        
        const accessToken = jwt.sign(
            { profId: profs._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "3h" }
        );

        const refreshToken = jwt.sign(
            { profId: profs._id },
            process.env.REFRESH_TOKEN_SECRET
        );
        res.json({ prof, accessToken, refreshToken });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
//refresh
exports.refresh = async (req, res) => {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, prof) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
            { profId: prof._id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "3h" }
        );
        res.json({ accessToken });
    });
};
//get
exports.showprofileProf = async (req, res) => {
    try {
        const { id } = req.params;
        const prof = await Prof.findById(id);
        res.status(200).json(prof);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

