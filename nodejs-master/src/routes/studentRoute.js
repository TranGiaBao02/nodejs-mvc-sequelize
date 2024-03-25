const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/api/student', studentController.getStudentByMssv);
router.post('/api/student/add', studentController.addStudent);
router.put('/api/student/update', studentController.updateStudentInfo);
router.delete('/api/student/delete', studentController.deleteStudent);

module.exports = router;
