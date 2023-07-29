import mongoose from "mongoose";

const verficationPicSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        
    },
    quizId: { 
        type: String, 
        
    },
    pic: { 
        type: String, 
        
    },
   
});

export const VerficationPic = mongoose.model("VerficationPic", verficationPicSchema);