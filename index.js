const express = require("express");
const app = express();
const connectDatabase = require("./utils/mongodb");
const userRouter = require('./src/routes/user.router');
const questionRouter = require('./src/routes/question.router');
const settingRouter = require('./src/routes/setting.router');

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/api/auth", userRouter);
app.use("/api/question", questionRouter);
app.use("/api/setting", settingRouter);
app.get("/", (req, res) => {
    res.send("Hello world!");
});

connectDatabase();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));