const studentModel = require('../models/model');

const getStudentInfo = (req, res) => {
  const { mssv, mamh } = req.query;
  studentModel.getStudentInfo(mssv, mamh, (err, result) => {
    if (err) {
      console.error('Error in getStudentInfo:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (!result) {
      res.status(404).json({ error: 'Student not found for the given course' });
      return;
    }
    res.status(200).json({ diem: result.diem });
  });
};

const addStudent = (req, res) => {
  const { mssv, mamh, diem } = req.body;
  studentModel.addStudent(mssv, mamh, diem, (err, result) => {
    if (err) {
      console.error('Error in addStudent:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.status(201).json({ message: 'Student added successfully' });
  });
};

const updateStudentInfo = (req, res) => {
  const { mssv, mamh, diem } = req.body;
  studentModel.updateStudentInfo(mssv, mamh, diem, (err, result) => {
    if (err) {
      console.error('Error in updateStudentInfo:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (result === 0) {
      res.status(404).json({ error: 'Student not found for the given course' });
      return;
    }
    res.status(200).json({ message: 'Student information updated successfully' });
  });
};

const deleteStudent = (req, res) => {
  const { mssv, mamh } = req.query;
  studentModel.deleteStudent(mssv, mamh, (err, result) => {
    if (err) {
      console.error('Error in deleteStudent:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (result === 0) {
      res.status(404).json({ error: 'Student not found for the given course' });
      return;
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  });
};

module.exports = { getStudentInfo, addStudent, updateStudentInfo, deleteStudent };