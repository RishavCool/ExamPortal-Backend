import mongoose from "mongoose";

const upcomingEventSchema = new mongoose.Schema({
    title: { 
        type: String, 
        //required: true
    },
    isActive: { 
        type: String, 
        //required: true
    },
    isPublic: { 
        type: String, 
        //required: true
    },
    isVisible: { 
        type: String, 
        //required: true
    },
    createdBy: {
        type: String,
        //required: true
    },    
    createdAt: { 
        type: String, 
        //required: true
    },
    description: { 
        type: String, 
        //required: true
    },
    timelimit: { 
        type: String, 
        //required: true
    },
    passingScore: { 
        type: String, 
        //required: true
    },
    difficultyLevel: { 
        type: String, 
        //required: true
    },
    categoryId: { 
        type: String, 
        //required: true
    },
});

export const UpcomingEvent = mongoose.model("UpcomingEvent", upcomingEventSchema);