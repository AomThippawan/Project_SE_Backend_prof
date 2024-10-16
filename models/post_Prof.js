const mongoose = require("mongoose");

const PostProfSchema = new mongoose.Schema({
    Jobtitle       : { type: String, required: true },
    Jobdescription : { type: String, required: true },
    Joblocation    : { type: String, required: true },
    Jobbuilding    : { type: String },
    Jobroom        : { type: String },
    Jobtime_start  : { type: String, required: true },  
    Jobtime_end    : { type: String, required: true },   
    Count           : { type: Number, required: true },           
    Reserve_count   : { type: Number },
    Traveling_type  : { type: String },
    Food_Sup        : { type: String },
    Salary          : { type: String }
}, { 
    timestamps: true, 
    versionKey: false 
});

module.exports = mongoose.model("PostProf", PostProfSchema);
