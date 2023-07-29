import mongoose from "mongoose";

const examPicsSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        
    },
    quizId: { 
        type: String, 
        
    },
    pics: [{ 
        type: String, 
        
    }],
   
});

export const ExamPics = mongoose.model("ExamPics", examPicsSchema);