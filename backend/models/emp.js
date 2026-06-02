const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    empId: {
        type: String,
        required: true,
        unique: true
        },
        empName: {
        type: String,
        required: true
        },
        empSkills: {
        type: [String],
        required: true
        },  

});
module.exports = mongoose.model("Employee", empSchema);