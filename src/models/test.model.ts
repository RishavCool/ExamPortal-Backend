import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true
    },
    
    completed: { 
        type: Number, 
        //required: true
    },
});

export const Test = mongoose.model("Test", testSchema);