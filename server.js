const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoURI = "mongodb://localhost/finders-fee";
const cors = require('cors')
const connectOptions = {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
};
//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || mongoURI, connectOptions, (err, db) => {
    if (err) console.log(`Error`, er);
    console.log(`Connected to MongoDB`);
})
const app = express();
app.use(bodyParser.json());
app.use(cors())
// models
require("./models/Items");
require("./models/Users");
// config
require('./config/passport');
// routes
app.use(require('./routes'));
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server started on port`, PORT);
});
