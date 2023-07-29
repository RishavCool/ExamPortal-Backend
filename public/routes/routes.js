"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../models/user.model");
const exam_model_1 = require("../models/exam.model");
const test_model_1 = require("../models/test.model");
const examResponse_model_1 = require("../models/examResponse.model");
const question_model_1 = require("../models/question.model");
const router = express_1.default.Router();
exports.router = router;
router.get("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    user_model_1.User.find({}, (err, users) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(users);
        }
    });
}));
router.post("/add_user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, username, email, password, mobile } = req.body;
    user_model_1.User.create({ firstName, lastName, username, email, password, mobile }, (err, users) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        }
        else {
            res.json(users);
        }
    });
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    user_model_1.User.find({ username: username, password: password }, (err, users) => {
        if (err) {
            //console.log(err);
            res.status(500).json("Errrorr");
            users.status = err;
        }
        else {
            //     users.status = 'success';
            //     console.log(users.status);
            res.status(200).json(users);
            console.log(users);
        }
    });
}));
router.put("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description } = req.body;
    user_model_1.User.findByIdAndUpdate(req.params.id, { title, description }, (err, todo) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(todo);
        }
    });
}));
router.delete("/delete/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    user_model_1.User.findByIdAndRemove(req.params.id, (err, todo) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(todo);
        }
    });
}));
router.get("/quizzes", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log("quizzes hit")
    exam_model_1.Quiz.find({}, (err, quizzes) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        }
        else {
            res.status(200).json(quizzes);
        }
    });
}));
router.post("/get_exam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    exam_model_1.Quiz.find({ id: id }, (err, exam) => {
        if (err) {
            //console.log(err);
            res.status(500).json("Errrorr");
            exam.status = err;
        }
        else {
            //     users.status = 'success';
            //     console.log(users.status);
            res.status(200).json(exam);
            console.log(exam);
        }
    });
}));
router.post("/add_exam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, isActive, isPublic, isVisible, createdBy, createdAt, description, timelimit, passingScore, difficultyLevel, categoryId, eventDate, eventTime, registered } = req.body;
    exam_model_1.Quiz.create({
        title, isActive, isPublic, isVisible, createdBy,
        createdAt, description, timelimit, passingScore,
        difficultyLevel, categoryId, eventDate, eventTime, registered
    }, (err, exam) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        }
        else {
            res.json(exam);
        }
    });
}));
router.delete("/delete_exam", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    exam_model_1.Quiz.findByIdAndRemove(req.params.id, (err, exam) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(exam);
        }
    });
}));
router.get("/tests", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log("quizzes hit")
    test_model_1.Test.find({}, (err, tests) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        }
        else {
            res.status(200).json(tests);
        }
    });
}));
router.post("/get_test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    test_model_1.Test.find({ id: id }, (err, test) => {
        if (err) {
            //console.log(err);
            res.status(500).json("Errrorr");
            test.status = err;
        }
        else {
            //     users.status = 'success';
            //     console.log(users.status);
            res.status(200).json(test);
            console.log(test);
        }
    });
}));
router.post("/add_test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, completed } = req.body;
    test_model_1.Test.create({ title, completed }, (err, test) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        }
        else {
            res.json(test);
        }
    });
}));
router.delete("/delete_test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    test_model_1.Test.findByIdAndRemove(req.params.id, (err, test) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(test);
        }
    });
}));
//RESPONSE
router.get("/responses", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log("quizzes hit")
    examResponse_model_1.ExamResponse.find({}, (err, responses) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        }
        else {
            res.status(200).json(responses);
        }
    });
}));
router.post("/get_response", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    examResponse_model_1.ExamResponse.find({ id: id }, (err, response) => {
        if (err) {
            //console.log(err);
            res.status(500).json("Errrorr");
            response.status = err;
        }
        else {
            //     users.status = 'success';
            //     console.log(users.status);
            res.status(200).json(response);
            console.log(response);
        }
    });
}));
router.post("/add_response", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, examId, response, isDisqualified } = req.body;
    examResponse_model_1.ExamResponse.create({ userId, examId, response, isDisqualified }, (err, response) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        }
        else {
            res.json(response);
        }
    });
}));
router.delete("/delete_response", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    examResponse_model_1.ExamResponse.findByIdAndRemove(req.params.id, (err, response) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(response);
        }
    });
}));
// Questions
router.get("/questions", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //console.log("quizzes hit")
    question_model_1.Question.find({}, (err, responses) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        }
        else {
            res.status(200).json(responses);
        }
    });
}));
