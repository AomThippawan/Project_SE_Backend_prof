const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {}).then(() => {
    console.log('MongoDB connected');
}).catch(err => console.log(err));

const authProf_routes = require('./routes/auth_Prof');
app.use("/api/prof", authProf_routes);

const postProf_routes = require('./routes/post_Prof');
app.use("/api/postProf", postProf_routes);

const applyJob = require ("./routes/apply");
app.use("/api/", applyJob);
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));