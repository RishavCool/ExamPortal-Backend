import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    quizId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Quiz'
        //required: true
    },
    question: {
        type: String,
        //required: true
    },
    answer: {
        type: String,
        //required: true
    },
    image: {
        type: String,
        //required: true
    },
    options: {
        one: { type: String, required: true },
        two: { type: String, required: true },
        three: { type: String, required: true },
        four: { type: String, required: true },

    },
    isActive: {
        type: String,
        //required: true
    },
    questionType: {
        type: String,
        //required: true
    },
});

export const Question = mongoose.model("Question", questionSchema);