
// // const Faculty = require('../models/faculty');

// // const getAllFacultyMembers = async (req, res) => {
// //   try {
// //     const faculties = await Faculty.find();
// //     res.json(faculties);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // const addFacultyMember = async (req, res) => {
// //   try {
// //     const newFaculty = new Faculty(req.body);
// //     await newFaculty.save();
// //     res.status(201).json(newFaculty);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // const deleteFacultyMember = async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     await Faculty.findByIdAndDelete(id);
// //     res.status(204).send(); 
// //   } catch (error) {
// //     res.status(500).json({ message: 'Server error' });
// //   }
// // };

// // module.exports = {
// //   getAllFacultyMembers,
// //   addFacultyMember,
// //   deleteFacultyMember,
// // };






// const Faculty = require('../models/faculty');

// const getAllFacultyMembers = async (req, res) => {
//   try {
//     const faculties = await Faculty.find();
//     res.json(faculties);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// const addFacultyMember = async (req, res) => {
//   try {
//     const newFaculty = new Faculty(req.body);
//     await newFaculty.save();
//     res.status(201).json(newFaculty);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// const deleteFacultyMember = async (req, res) => {
//   try {
//     const { id } = req.params;
// await Faculty.findByIdAndDelete(id);
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// module.exports = {
//   getAllFacultyMembers,
//   addFacultyMember,
//   deleteFacultyMember,
// };





const FacultyMember = require('../models/faculty');

const getAllFacultyMembers = async (req, res) => {
  try {
    const facultyMembers = await FacultyMember.find();
    res.json(facultyMembers);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addFacultyMember = async (req, res) => {
  try {
    const newMember = new FacultyMember(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteFacultyMember = async (req, res) => {
  try {
    const member = await FacultyMember.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).send('Faculty member not found');
    res.status(200).send('Faculty member deleted');
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllFacultyMembers,
  addFacultyMember,
  deleteFacultyMember
};
