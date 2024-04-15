import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tintin-questions-db');
    console.log('--> db connected');
  } catch (err) {
    console.log(err);
  }
};
