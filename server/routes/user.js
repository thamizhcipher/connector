const express = require("express");
const router = express.Router();
const User = require("../models/user");



router.post("/login", async (req, res) => {

    try {
        console.log(req.body);
        const user = await User.findByCredentials(req.body.email,req.body.password);

        res.json({ 
            _id: user._id, 
            email: user.email, 
            role: user.role 
        });
    } catch (error) {
        res.status(401).send(error);
        console.log(error.message);
        
    }
}); 



// router.post("/logout",auth,async(req,res)=>{

//     try {
//         req.user.tokens = req.user.tokens.filter((token) => {
//             return token.token !== req.token; 
//         })

//         await req.user.save();
//         res.send();

//     } catch (error) {
//         res.status(500).send();
//     }

// })


router.post("/register", async (req, res) => {
    const { firstName, lastName, phoneNumber, email, password, role } = req.body;

    const validRole = role === "admin" ? "admin" : "user";

    const user = new User({ firstName, lastName, phoneNumber, email, password, role: validRole });

    try {
        await user.save();
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});




module.exports = router;