import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../Main.css';

const Main = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [drnum, setDrnum] = useState("");
  
    function formvalidate() {
      let peru = /^[A-Za-z]+$/;
      let Name = name;
      if (!Name.value.match(peru)) {
        alert("Name should consist of alphabets only");
        return false;
      }
  
      let num = /^[0-9]{10}$/; // /^[0-9]{10,}+$/;
      let phone = phoneNumber;
      if (!phone.value.match(num)) {
        alert("Phone number should consist of numbers only of 10 digits");
        return false;
      }
  
      let pass = password;
      let check_pass =
        /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      if (!pass.value.match(check_pass)) {
        alert(
          "A password must contain at least 2 digits, at least one alphabet character, at least one symbol, at least one lowercase letter, at least one uppercase letter, and be at least 8 characters long."
        );
        return false;
      }
  
      let entered_dob = dob;
      let present_new_date = new Date(entered_dob);
      let present_date = new Date();
      let age = present_date.getFullYear() - present_new_date.getFullYear();
      let month_diff = present_date.getMonth() - present_new_date.getMonth();
      if (
        month_diff < 0 ||
        (month_diff === 0 && present_date.getDate() < present_new_date.getDate())
      ) {
        age--;
      }
      if (age < 18) {
        alert("Age must be 18 or older.");
        return false;
      }
      let dlRegex = /^[A-Z]{2}\d{13}$/;
      let givenDL = drnum;
      if (!givenDL.value.match(dlRegex)) {
        alert("Please enter a valid driving license number.");
        return false;
      }
    }
  
    
        const handleSubmit = async () => {
            console.log("hello");
            try {
              const res = await axios.post("http://localhost:5000/profile/submitProfile", { name,phoneNumber,email,password,gender,dob,drnum });
           console.log(res);
            } catch (err) {
                console.log(err);
            }
          };

  
    return (
      <div className='Main'>
        <label><h1>PROFILE DETAILS</h1></label>
        <div className="input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="name">Phnumber:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="name">Email:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="name">Password:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="name">Gender:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="name">DOB:</label>
          <input
            type="date"
            id="name"
            name="name"
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="name">Dr Number:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setDrnum(e.target.value)}
          />
        </div>
  
        <button onClick={handleSubmit}>Click</button>
      </div>
    );
  };


export default Main;