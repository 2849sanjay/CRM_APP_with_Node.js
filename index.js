// Start This file from starting point..

const express = require("express");
const app = express();
const serverConfig = require("./configs/server.config")
const dbConfig = require("./configs/db.config");








// here is express server started
app.listen(serverConfig.PORT, () => {
    console.log("Server running on PORT", serverConfig.PORT);
})

