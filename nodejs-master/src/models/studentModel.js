const { DataTypes } = require('sequelize');
const sequelize = require('../models/db');

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

module.exports = Student;
