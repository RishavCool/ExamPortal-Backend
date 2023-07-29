import mongoose from "mongoose";

const examResponseSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        //required: true
    },
    examId: { 
        type: String, 
        //required: true
    },
    response: [{
        questionId:{type: String},
        // answer:{type: String},
        answered:{type: String},
        // isCorrect:{type: String},
    }],
    isDisqualified: { 
        type: String, 
        //required: true
    },
});

export const ExamResponse = mongoose.model("ExamResponse", examResponseSchema);