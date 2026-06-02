const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    Tasktitle: {
        type: String,
        required: true,
        unique: true
        },
        TaskDescription: {
        type: String,
        required: true
        },
        empName: {
        type: [String],
        required: true
        },  

});
module.exports = mongoose.model("Employee", empSchema);