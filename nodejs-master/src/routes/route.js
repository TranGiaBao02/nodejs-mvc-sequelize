const express = require('express');
const router = express.Router();
const studentController = require('../controllers/controller');

router.get('/api/student', studentController.getStudentInfo);

router.post('/api/student/add', studentController.addStudent);
router.post('/api/student/update', studentController.updateStudent);
router.post('/api/student/delete', studentController.deleteStudent);
module.exports = router;
