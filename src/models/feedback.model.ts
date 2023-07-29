import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        //required: true
    },
    quizId: { 
        type: String, 
        //required: true
    },
    rate: { 
        type: Number, 
        //required: true
    },
    feedback: { 
        type: String, 
        //required: true
    },
   
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);