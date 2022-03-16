const express = require("express");
const Mathml2latex = require('mathml-to-latex');
const mathRouter = express.Router();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

mathRouter.post("/convert", async function (req, res) {
    const { content } = req.body;
    if(content) {
        try {
            const dom = new JSDOM(content);
            let maths = dom.window.document.querySelectorAll('math');
            if(maths.length > 0) {
                for(let math of maths) {
                    if(math.tagName.indexOf('math') > -1) {
                        math.outerHTML = "\\(" + Mathml2latex.convert(math.outerHTML) + "\\)";
                    }
                }
                res.status(200).send(dom.window.document.body.innerHTML);
            } else {
                res.status(200).send(content);
            }
        } catch(e){
            res.status(500).send(e);
        }
    } else {
        res.status(400).send("400 Bad request!");
    }
});

module.exports = mathRouter;
