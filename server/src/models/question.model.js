import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  correct_answer: {
    type: String,
    required: true,
    trim: true
  },
  wrong_answer_1: {
    type: String,
    required: true,
    trim: true
  },
  wrong_answer_2: {
    type: String,
    required: true,
    trim: true
  },
  wrong_answer_3: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: String,
    required: true,
    trim: true
  }
});

export default mongoose.model('Question', questionSchema);
