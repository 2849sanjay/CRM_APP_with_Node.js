const userController = require("../controllers/user.controller");



// export the route
module.exports = (app) => {

    // Post call--> 127.0.0.1:8081/crm_app/api/v1/signup
    app.post("/crm_app/api/v1/signup", userController.signup);


}