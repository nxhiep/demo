const UserModel = require("../models/user.model");

const getUserInfo = async (email, userId, name) => {
    let user = await UserModel.findOne({ email: email });
    if(!user) {
        user = new UserModel({ 
            email,
            userId,
            name,
        });
        await user.save();
    } else {
        userId && (user.userId = userId);
        name && (user.name = name);
        await user.save();
    }
    return user;
}

module.exports = { getUserInfo }