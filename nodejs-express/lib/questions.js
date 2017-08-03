const express = require('express');
const questionsRouter = express.Router();

questionsRouter.get('/questions', (req, res) => {
    res.status(200)
        .send([{question: "What's your name?"}]);
});

module.exports = questionsRouter;
