const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req,res) =>{
    try{
        const{name, email, password} = req.body;

        const userExists =  await User.findOne({email})
        if(userExists) return res.status(400).json({message: "User already exists"})

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            name,
            email,
            password : hashedPassword,
        })

        const token = jwt.sign({id : user._id} , process.env.JWT_SECRET, {expiresIn: '1d'})

        res.status(201).json({ message: 'User registered', token });
    }catch(error){
        res.status(500).json({ message: error.message });
    }

}

exports.loginUser = async(req,res) =>{
    try{
        const{email, password} = req.body;

        const user = await User.findOne({email})

        if(!user) res.status(400).json({message: "User not found"})

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) res.status(400).json({message: "Invalid email or password"})
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn:'1d'})

        res.status(200).json({message:"Logged in succuessfully", token})

    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

exports.getProfile = async (req, res) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};