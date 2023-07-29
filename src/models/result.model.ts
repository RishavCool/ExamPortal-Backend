import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        //required: true
    },
    examId: { 
        type: String, 
        //required: true
    },
    questionLength: { 
        type: String, 
        //required: true
    },
    questionAttempted: { 
        type: String, 
        //required: true
    },
    totalMarks: {
        type: String,
        //required: true
    },    
    correctAns: { 
        type: String, 
        //required: true
    },
    wrongAns: { 
        type: String, 
        //required: true
    },
});

export const Result = mongoose.model("Result", resultSchema);