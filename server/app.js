const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Defining Port
const port = process.env.PORT || 5000;

//Defining Routes


//DB Config
const db = require('./config/keys');
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log(`MongoDB Connected!`))
    .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server Started \nPort: ${port}`));