const User = require("../models/user.model");
const bcrypt = require("bcryptjs");


// create function for signup
exports.signup = async (req, res) => {

    // defined userObj
    const userObjToBeStoreInDB = {
        name: req.body.name,
        userId: req.body.userId,
        password: bcrypt.hashSync(req.body.password, 8),
        email: req.body.email,
        userType: req.body.userType,
        userStatus: req.body.userStatus
    };

    // create a variable for create user
    const userCreated = await User.create(userObjToBeStoreInDB);

    // create obj for response of create user
    const userCreationResponse = {
        name: userCreated.name,
        userId: userCreated.userId,
        email: userCreated.email,
        userType: userCreated.userType,
        userStatus: userCreated.userStatus,
        createdAt: userCreated.createdAt,
        updatedAt: userCreated.updatedAt
    }
res.status(201).send(userCreationResponse);
    console.log("User Response", userCreationResponse)
};
