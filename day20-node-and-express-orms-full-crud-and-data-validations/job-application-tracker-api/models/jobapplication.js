'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobApplication.init({ // attributes of our model object
    // company: DataTypes.STRING,
    company: {
      type: DataTypes.STRING,
      allowNull: false, // do not allow the company name to be empty
    }, // transfrom the company from a datatype to an object with the above elements
    // do the same for the below items
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minSalary: DataTypes.INTEGER, // models in this file will be camelCased
    maxSalary: DataTypes.INTEGER,
    location: DataTypes.STRING,
    postDate: DataTypes.DATE,
    jobPostUrl: DataTypes.STRING,
    applicationDate: DataTypes.DATE,
    lastContactDate: DataTypes.DATE,
    companyContact: DataTypes.STRING,
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
  }, {
    sequelize,
    modelName: 'JobApplication',
    tableName: 'job_applications',// explicit snake cased table name
    underscored: true // this option converts camelCased columns to snake_case in the DB,
  });
  return JobApplication; // returning the class after we initialized it
};