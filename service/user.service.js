const User = require("../models/user.model")

const createUser = async (username, password) => {
    //verifica que l'usuari no existeix
    const userExists = await User.findOne({ username: username })
    // TODO : verifivar que la password compleix l'estandard
    if (userExists)
        throw new Error("The user already exists")

    const newUser = new User({ username })

    await newUser.setPassword(password);

    return await newUser.save();

}

const getUser = async (id) => {
    return await User.findById(id);
}

module.exports = { createUser, getUser }