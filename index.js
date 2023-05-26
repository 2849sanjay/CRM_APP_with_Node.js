// Start This file from starting point..

const express = require("express");
const serverConfig = require("./configs/server.config")
const dbConfig = require("./configs/db.config");
const mongoose = require("mongoose");
const app = express();


// object and json converter like middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Database connected
mongoose.connect(dbConfig.DB_URL, () => {
    console.log("MongoDB connected")
})

// here is import router
require("./routes/user.route")(app);

// here is express server started
app.listen(serverConfig.PORT, () => {
    console.log("Server running on PORT", serverConfig.PORT);
})

