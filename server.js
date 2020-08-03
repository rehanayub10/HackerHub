const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const mongoose = require('mongoose');

require('dotenv').config();

// dotenv.config({ path: './config/config.env' })

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use(express.json());
app.use('/', indexRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => `Server running on port ${port}`);