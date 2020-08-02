const express = require('express');

const app = express();
const dotenv = require('dotenv')

dotenv.config({ path: './config/config.env' })

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);