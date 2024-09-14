
// require('dotenv').config();
// const express = require('express');
// const connectDB = require('./db/connectDB');
// const facultyRouter = require('./routes/faculty _routes');
// const app = express();

// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;

// app.use(express.json());

// app.use('/member', facultyRouter);

// const start = async () => {
//   try {
//     await connectDB(MONGO_URI);
//     app.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// start();





require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connectDB');
const facultyRouter = require('./routes/faculty _routes');
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(express.static('public'));

app.use('/member', facultyRouter);

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
