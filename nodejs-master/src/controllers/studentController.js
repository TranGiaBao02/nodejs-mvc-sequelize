const Student = require('../models/studentModel');

const getStudentByMssv = async (req, res) => {
  try {
    const { mssv, mamh } = req.query;
    const student = await Student.findOne({ where: { mssv, mamh } });
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    console.error('Error in getStudentInfo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get student information
const getStudentInfo = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    console.error('Error in getStudentInfo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add student
const addStudent = async (req, res) => {
  try {
    const { mssv, mamh, diem } = req.body;
    await Student.create({ mssv, mamh, diem });
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    console.error('Error in addStudent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update student information
const updateStudentInfo = async (req, res) => {
  try {
    const { mssv, mamh, diem } = req.body;
    await Student.update({ diem }, { where: { mssv, mamh } });
    res.status(200).json({ message: 'Student information updated successfully' });
  } catch (error) {
    console.error('Error in updateStudentInfo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  try {
    const { mssv, mamh } = req.query;
    await Student.destroy({ where: { mssv, mamh } });
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error in deleteStudent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getStudentByMssv, getStudentInfo, addStudent, updateStudentInfo, deleteStudent };
