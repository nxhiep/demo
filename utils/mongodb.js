const mongoose = require('mongoose');
const IP = process.env.IP_DB || "localhost";
const PORT = process.env.PORT_DB || 27017;
const DATABASE = process.env.DATABASE_NAME || "test";
const USER = process.env.USER_DB || "";
const PASS = process.env.PASS_DB || "";

const connectDatabase = () => {
    const DB_URL = `mongodb://${IP}:${PORT || 27017}`;
    console.log("DB_URL ", DB_URL);
    let mongoSetup = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        dbName: DATABASE,
    };
    if (USER.length) {
        Object.assign(mongoSetup, {
            auth: {
                user: USER,
                password: PASS,
            },
            authSource: DATABASE,
        });
    }
    mongoose
        .connect(DB_URL, mongoSetup)
        .then(() => console.log("MongoDB connected: ", DB_URL))
        .catch((err) => console.log("MongoDB initial connection error: ", err));

    mongoose.connection.on("error", (err) => {
        console.log("MongoDB error: ", err);
    });
};

module.exports = connectDatabase;