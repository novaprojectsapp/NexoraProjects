const mongoose = require('mongoose');

let cachedConnection = null;

const connectDB = async () => {
  if (cachedConnection) return cachedConnection;

  const uri = process.env.MONGODB_URI;

  try {
    if (!uri) throw new Error('MONGODB_URI is not set');
    const conn = await mongoose.connect(uri);
    cachedConnection = conn;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.log('Local MongoDB not found. Starting in-memory database...');
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongod = await MongoMemoryServer.create();
      const memUri = mongod.getUri();
      const conn = await mongoose.connect(memUri);
      cachedConnection = conn;
      console.log(`In-Memory MongoDB Connected: ${conn.connection.host}`);
      console.log('Note: Data will reset on restart. Install MongoDB for persistent storage.');
      return conn;
    } catch (memError) {
      console.error(`Database connection error: ${memError.message}`);
      process.exit(1);
    }
  }
};

module.exports = connectDB;
