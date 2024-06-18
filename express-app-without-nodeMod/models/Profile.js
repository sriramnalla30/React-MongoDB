const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  Name: String,
  PhoneNum: String,
  Email: String,
  Password: String,
  Gender: String,
  DOB: Date,
  DrivingLicenseNumber: String
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
