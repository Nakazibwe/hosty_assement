const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user_model');

//Generate JWT.
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

//Sign up
exports.signUp = async (req, res) => {
  const {email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error('Please fill all fields');
  }
  //Check user existance.
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  //Hash password.
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create user.
  const user = await User.create({
    email,
    password: hashedPassword,
  });
  if (!user) {
    res.status(400);
    throw new Error('User creation failed');
  }

  res.status(201).json({ token: generateToken(user.id) });
};

//Login and authenticate User
exports.signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({ token: generateToken(user.id) });
  }
};


