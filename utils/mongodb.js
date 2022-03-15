const mongoose = require('mongoose');
const connectDatabase = () => {
    const DB_URL = "mongodb+srv://hiepnx:Hiepnx27@cluster0.j5rt4.mongodb.net/data";
    const database = "data";
    mongoose
        .connect(DB_URL, {
            dbName: database,
            autoIndex: true,
        })
        .then(() => console.log("MongoDB connected: ", DB_URL))
        .catch((err) => console.log("MongoDB initial connection error: ", err));
    mongoose.connection.on("error", (err) => {
        console.log("MongoDB error: ", err);
    });
};

module.exports = connectDatabase;