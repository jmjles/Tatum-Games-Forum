const express = require('express');
const mongoose = require('mongoose');

//Defining Routes\
const category = require('./routes/category');
const post = require('./routes/post');
const app = express();

//Defining Port
const port = process.env.PORT || 5000;

//Use Route
app.use('/api/categories', category);
app.use('/api/posts', post);

//DB Config
const db = require('./config/keys');
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log(`MongoDB Connected!`))
    .catch((err) => console.log(err));

app.listen(port, () => console.log(`Server Started \nPort: ${port}`));