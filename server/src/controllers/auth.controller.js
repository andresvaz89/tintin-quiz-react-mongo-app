import Question from '../models/question.model.js';

export const registerQuestion = async (req, res) => {
  const {
    question,
    correct_answer,
    wrong_answer_1,
    wrong_answer_2,
    wrong_answer_3
  } = req.body;

  try {
    const newQuestion = new Question({
      question,
      correct_answer,
      wrong_answer_1,
      wrong_answer_2,
      wrong_answer_3
    });

    await newQuestion.save();
    res.send('New question succesfully created');
  } catch (error) {
    console.log(error);
  }
};
