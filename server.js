const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');

require('dotenv').config();

// Connect Database
connectDB();

const app = express();

app.use(express.json());
app.use(logger('dev'));
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(fileUpload({ createParentPath: true }));

// Use Routes
app.use('/api/posts', require('./routes/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `App listening in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
  )
);
