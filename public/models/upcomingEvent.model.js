"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpcomingEvent = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const upcomingEventSchema = new mongoose_1.default.Schema({
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
exports.UpcomingEvent = mongoose_1.default.model("UpcomingEvent", upcomingEventSchema);
