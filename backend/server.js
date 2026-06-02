const express =require ("express"); 
const mongoose = require("mongoose");


//mema 2ka install krgnna

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});