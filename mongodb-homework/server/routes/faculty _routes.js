
// const express = require('express');
// const router = express.Router();
// const facultyController = require('../controllers/faculty_conttroller');


// router.get('/', facultyController.getAllFacultyMembers);


// router.post('/', facultyController.addFacultyMember);


// router.delete('/:id', facultyController.deleteFacultyMember);

// module.exports = router;


const express = require('express');
const router = express.Router();
const facultyController = require('../controllers/faculty_conttroller');

router.get('/', facultyController.getAllFacultyMembers);
router.post('/', facultyController.addFacultyMember);
router.delete('/:id', facultyController.deleteFacultyMember);

module.exports = router;