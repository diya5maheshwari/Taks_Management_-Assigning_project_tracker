import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(email, password);

    // check empty fileds
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password length must be greater than 6 " });
    }
    // email formating
    if (!email.includes("@") || !email.includes(".")) {
      return res.status(400).json({ message: "Invalid email formating" });
    }
    // check email already exist of not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already Exists. Please Login" });
    }
    // hash passoword

    const hashPassword = await bcrypt.hash(password, 10);
   
    // save in db
    await User.create({
      name,
      email,
      password: hashPassword,
    });
    console.log(email,hashPassword);
    return res.status(201).json({ message: "Register Successfully" });
  } catch (err) {
    return res.status(500).json({ messages: "Server error", err });
  }
};

// login

export const login = async (req, res) => {
  try {
    const {email, password} = req.body;

    // check empty fileds
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // check email correction
    if (!email.includes("@") || !email.includes(".")) {
      return res.status(400).json({ message: "Invalid Email formate" });
    }

    // find user by email

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const isPasswordvalid = await bcrypt.compare(password, user.password);
    if (!isPasswordvalid) {
      return res.status(401).json({ message: "Invalod Password " });
    }

    // genrate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    // token store is cookies
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });
    console.log(email,password);
    return res.status(200).json({ message: "Login successful" });
    
  } catch (err) {
    return res.status(500).json({messahe:"Server Error"});
  }
};


// for showing a user profile 
export const getMe=async(req,res)=>{
  try{
    console.log("REQ.USER:", req.user);
     const user=await User.findById(req.user.userId).select("-password");
     if(!user){
      return res.status(404).json({message:"user not found"});
     }
     res.status(200).json(user);
  }
  catch(err){
    return res.status(500).json({message:"error"})
  }
}