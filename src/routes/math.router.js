const express = require("express");
const Mathml2latex = require('mathml-to-latex');
const mathRouter = express.Router();

mathRouter.post("/convert", async function (req, res) {
    const { content } = req.body;
    if(content) {
        try {
            res.status(200).send("\\(" + Mathml2latex.convert(content) + "\\)");
        } catch(e){
            res.status(500).send(e);
        }
    } else {
        res.status(400).send("400 Bad request!");
    }
});

module.exports = mathRouter;
