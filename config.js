const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URI);

    if (connect) {
      console.log(
        `Database connection successful on ${connect.connection.host}`
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;