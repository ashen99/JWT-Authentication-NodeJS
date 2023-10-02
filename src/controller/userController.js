const User = require("../model/user");
const {sign} = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    try {
        const { firstName,lastName,email,password } = req.body;
        //validate user input
        if(!(firstName && lastName && email && password)){
            res.status(400).send("All input in required");
        }

        //check if user already exists
        //validate if user exist in our database
        const oldUser = await User.findOne({ email });

        if(oldUser){
            return res.status(409).send("User already exist. Please Login");
        }

        //encrypt user password
        let encryptedPassword = await bcrypt.hash(password,10);

        //create a user in the db
        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword,
        })

        //create a token
        const token = sign(
            {user_i: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        //save user token
        user.token = token;

        //return the new user
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        console.log('user logged in')
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};