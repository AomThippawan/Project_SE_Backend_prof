const Apply = require("../models/apply");

exports.applyJob = async (req, res) => {
    try {
        const { 
            StudentName,
            StudentEmail
        } = req.body;
        const apply = new Apply({ 
            StudentName,
            StudentEmail
        });
        const saved = await apply.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
