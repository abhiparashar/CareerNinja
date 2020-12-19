const mongoose = require('mongoose')

const connectDB = async() =>{
    const conn = await mongoose.connect("mongodb://localhost:27017/battle", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected:${conn.connection.host}`);
}

module.exports = connectDB;