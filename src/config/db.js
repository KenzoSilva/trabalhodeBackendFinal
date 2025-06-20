const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Erro no MongoDB:', error.message);
    process.exit(1); // Encerra o app se falhar
  }
};

module.exports = connectDB;
