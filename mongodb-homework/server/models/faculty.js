
// const mongoose = require('mongoose');

// const facultySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     required: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
//   exp: {
//     type: Number,
//     required: true,
//   },
//   type: {
//     type: String,
//     required: true,
//   },
//   qualification: {
//     type: String,
//     required: true,
//   },
// });

// const Faculty = mongoose.model('Faculty', facultySchema);

// module.exports = Faculty;





const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  exp: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
