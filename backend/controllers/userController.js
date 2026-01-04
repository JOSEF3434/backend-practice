const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const { signJwt } = require("../utils/jwt");
const { validationResult } = require("express-validator");

const userCteate = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { firstName, lastName, email, password, profilePicture } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ message: "Email already exists" });

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      passwordHash,
      profilePicture,
    });

    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.error("Error in userCreate:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = signJwt({ sub: user._id.toString(), role: "user" });
    res.json({ token });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};

const getUser = async (req, res)=>{
  try {const user = await User.findById(req.params.id);
  if(!user){
    res.status(404).json({message:"user not found"});
  }
  res.status(200).json(user);}
  catch(error){
    res.status(500).json({message:"user not found ", error:error.message})
  }
}

const updatedUser = async (req,res) => {
  const id = req.params.id;

  const userExist = await User.findOne({_id:id});

  if(!userExist) return res.status(404).json({message:'user not found'});

  const UpdatedUser = await User.findByIdAndUpdate(id, req.body, {new:true});
  res.status(200).json(UpdatedUser); 

} 
module.exports = { userCteate, login, getUsers ,getUser};
