import express, { Request, Response } from "express";

import { User } from "../models/user.model";
import { Quiz } from "../models/exam.model";
import { Test } from "../models/test.model";
import { ExamResponse } from "../models/examResponse.model";
import { Question } from "../models/question.model";
import { VerficationPic } from "../models/verificationPic.model copy";
import { ExamPics } from "../models/examPics.model";
import { Feedback } from "../models/feedback.model";

const router = express.Router();


router.get("/users", async (req: Request, res: Response) => {
    User.find({}, (err: any, users: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

router.post("/add_user", async (req: Request, res: Response) => {

    const { firstName, lastName, username, email, password, mobile } = req.body;
    User.create({ firstName, lastName, username, email, password, mobile }, (err: any, users: any) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        } else {
            res.json(users);
        }
    });
});

router.post("/login", async (req: Request, res: Response) => {

    const { username, password } = req.body;
    User.find({ username: username, password: password }, (err: any, users: any) => {

        if (err) {
            //console.log(err);
            res.status(500).json("Errrorr")
            users.status = err;
        } else {
            //     users.status = 'success';
            //     console.log(users.status);
            res.status(200).json(users);
            console.log(users);
        }
    });
});



router.put("/update/:id", async (req: Request, res: Response) => {
    const { title, description } = req.body;
    User.findByIdAndUpdate(req.params.id, { title, description }, (err: any, todo: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
    User.findByIdAndRemove(req.params.id, (err: any, todo: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

router.get("/quizzes", async (req: Request, res: Response) => {
    //console.log("quizzes hit")
    Quiz.find({}, (err: any, quizzes: any) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        } else {
            res.status(200).json(quizzes);
        }
    });
});

router.post("/get_exam", async (req: Request, res: Response) => {

    const { id } = req.body;
    Quiz.find({ id: id }, (err: any, exam: any) => {

        if (err) {
            //console.log(err);
            res.status(500).json("Errrorr")
            exam.status = err;
        } else {
            //     users.status = 'success';
            //     console.log(users.status);
            res.status(200).json(exam);
            console.log(exam);
        }
    });
});

router.post("/add_exam", async (req: Request, res: Response) => {

    const {
        title, isActive, isPublic, isVisible, createdBy,
        createdAt, description, timelimit, passingScore,
        difficultyLevel, categoryId, eventDate, eventTime, registered } = req.body;

    Quiz.create({
        title, isActive, isPublic, isVisible, createdBy,
        createdAt, description, timelimit, passingScore,
        difficultyLevel, categoryId, eventDate, eventTime, registered
    }, (err: any, exam: any) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        } else {
            res.json(exam);
        }
    });
});

router.delete("/delete_exam", async (req: Request, res: Response) => {
    Quiz.findByIdAndRemove(req.params.id, (err: any, exam: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(exam);
        }
    });
});


router.get("/tests", async (req: Request, res: Response) => {
    //console.log("quizzes hit")
    Test.find({}, (err: any, tests: any) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        } else {
            res.status(200).json(tests);
        }
    });
});

router.post("/get_test", async (req: Request, res: Response) => {

    const { id } = req.body;
    Test.find({ id: id }, (err: any, test: any) => {

        if (err) {
            //console.log(err);
            res.status(500).json("Errrorr")
            test.status = err;
        } else {
            //     users.status = 'success';
            //     console.log(users.status);
            res.status(200).json(test);
            console.log(test);
        }
    });
});

router.post("/add_test", async (req: Request, res: Response) => {

    const { title, completed } = req.body;

    Test.create({ title, completed }, (err: any, test: any) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        } else {
            res.json(test);
        }
    });
});

router.delete("/delete_test", async (req: Request, res: Response) => {
    Test.findByIdAndRemove(req.params.id, (err: any, test: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(test);
        }
    });
});

//RESPONSE

router.get("/responses", async (req: Request, res: Response) => {
    //console.log("quizzes hit")
    ExamResponse.find({}, (err: any, responses: any) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        } else {
            res.status(200).json(responses);
        }
    });
});

router.post("/get_response", async (req: Request, res: Response) => {

    const { id } = req.body;
    ExamResponse.find({ id: id }, (err: any, response: any) => {

        if (err) {
            //console.log(err);
            res.status(500).json("Errrorr")
            response.status = err;
        } else {
            //     users.status = 'success';
            //     console.log(users.status);
            res.status(200).json(response);
            console.log(response);
        }
    });
});

router.post("/add_response", async (req: Request, res: Response) => {

    const { userId, examId, response, isDisqualified } = req.body;

    ExamResponse.create({ userId, examId, response, isDisqualified }, (err: any, response: any) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        } else {
            res.json(response);
        }
    });
});

router.delete("/delete_response", async (req: Request, res: Response) => {
    ExamResponse.findByIdAndRemove(req.params.id, (err: any, response: any) => {
        if (err) {
            console.log(err);
        } else {
            res.json(response);
        }
    });
});

// Questions
router.get("/questions", async (req: Request, res: Response) => {
    //console.log("quizzes hit")
    Question.find({}, (err: any, responses: any) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        } else {
            res.status(200).json(responses);
        }
    });
});



// EXAM PICS

router.get("/getExamPics", async (req: Request, res: Response) => {
    //console.log("quizzes hit")
    ExamPics.find({}, (err: any, responses: any) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        } else {
            res.status(200).json(responses);
        }
    });
});

router.post("/add_ExamPics", async (req: Request, res: Response) => {

    const { userId, quizId, pics } = req.body;

    ExamPics.create({ userId, quizId, pics }, (err: any, test: any) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        } else {
            res.json(test);
        }
    });
});

// VERIFICATION PIC

router.get("/getVerficationPics", async (req: Request, res: Response) => {
    //console.log("quizzes hit")
    VerficationPic.find({}, (err: any, responses: any) => {
        if (err) {
            console.log(err);
            res.status(500).json("Errrorr");
        } else {
            res.status(200).json(responses);
        }
    });
});

router.post("/add_VerficationPic", async (req: Request, res: Response) => {

    const { userId, quizId, pic } = req.body;

    VerficationPic.create({ userId, quizId, pic }, (err: any, test: any) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        } else {
            res.json(test);
        }
    });
});

// FEEDBACK

router.post("/add_feedback", async (req: Request, res: Response) => {

    const { userId, quizId, rate, feedback } = req.body;

    Feedback.create({ userId, quizId, rate, feedback }, (err: any, test: any) => {
        if (err) {
            //console.log(err);
            console.log(req.body);
        } else {
            res.json(test);
        }
    });
});

export { router };