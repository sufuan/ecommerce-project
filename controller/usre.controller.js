const User = require("../models/user.model");
const bcrypt = require('bcrypt')
const shortid = require("shortid");

const registerController = (req, res, next) => {

    User.findOne({ email: req.body.email }).exec(async (err, user) => {
        if (user)
            return res.status(400).json({
                error: "User already registered",
            });

        const { firstName, lastName, email, password } = req.body;
        const hash_password = await bcrypt.hash(password, 10);


        const _user = new User({
            firstName,
            lastName,
            email,
            hash_password,
            username: shortid.generate(),
        })
        // res.send(_user)

        _user.save()
            .then(user => res.send(user))
            .catch(err => console.log(err))


    })



}

const loginController = (req, res, next) => {
    let password = req.body.password

    User.findOne({ email: req.body.email }).exec(async (error, user) => {
        if (error) return res.status(400).json({ error });

        if (user) {

            const isPassword = await bcrypt.compare(password, user.hash_password,)

            if (isPassword && user.role === "user") {
                res.send('thik ase ja')
            }
        }

    })


    // let email = req.body.email
    // let password = req.body.password
    // User.find({ email })
    //     .then(user => {
    //         if (user) {
    //             res.send(user)
    //         }
    //         else {
    //             res.send('nil')
    //         }
    //     })
}



const getalluser = (req, res, next) => {
    User.find()
        .then(result => res.send(result))
        .catch(err => console.log(err))
}

module.exports = { registerController, getalluser, loginController }