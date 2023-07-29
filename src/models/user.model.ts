import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        //required: true
    },
    lastName: { 
        type: String, 
        //required: true
    },
    username: { 
        type: String, 
        //required: true
    },
    email: { 
        type: String, 
        required: true
    },
    password: {
        type: String,
        //required: true
    },    
    mobile: { 
        type: String, 
        //required: true
    },
    status:{
        type: String,
    }
});

export const User = mongoose.model("User", userSchema);