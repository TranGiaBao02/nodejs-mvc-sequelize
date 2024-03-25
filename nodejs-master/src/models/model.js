// models/studentModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Student = sequelize.define('Student', {
  mssv: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  mamh: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  diem: {
    type: DataTypes.FLOAT,
  },
});

const getStudentInfo = async (mssv, mamh) => {
  return await Student.findOne({
    where: { mssv, mamh },
    attributes: ['diem'],
  });
};

const addStudent = async (mssv, mamh, diem) => {
  return await Student.create({ mssv, mamh, diem });
};

const updateStudentInfo = async (mssv, mamh, diem) => {
  const result = await Student.update({ diem }, { where: { mssv, mamh } });
  return result[0];
};

const deleteStudent = async (mssv, mamh) => {
  const result = await Student.destroy({ where: { mssv, mamh } });
  return result;
};

module.exports = { getStudentInfo, addStudent, updateStudentInfo, deleteStudent };

