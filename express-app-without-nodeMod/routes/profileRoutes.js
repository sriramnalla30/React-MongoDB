const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

router.post("/submitProfile", async (req, res) => {
  try {
    
    const {name,phoneNumber,email,password,gender,dob,drnum}=req.body;
    console.log(name,phoneNumber,email,password,gender,dob,drnum)
    const newProfile = await Profile.create({ 
        Name: name,
        PhoneNum: phoneNumber,
        Email: email,
        Password: password,
        Gender: gender,
        DOB: dob,
        DrivingLicenseNumber: drnum});
console.log(newProfile);


    res.status(201).send("Form submitted successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).send("Error submitting form");
  }
});

module.exports = router;
