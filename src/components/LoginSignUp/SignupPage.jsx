import React, { useState } from "react";
import "../LoginSignUp/SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    photo: null,
    licensePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields (you can add more specific validation)
    if (
      !formData.name ||
      !formData.phoneNumber ||
      !formData.photo ||
      !formData.licensePhoto
    ) {
      alert("All fields are required");
      return;
    }

    if (formData.phoneNumber.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    // Now you can submit the form data or perform any other action
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            pattern="[0-9]{10}"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Photo:
          <input type="file" name="photo" onChange={handleChange} required />
        </label>
        <br />
        <label>
          Driving Licence Photo:
          <input
            type="file"
            name="licensePhoto"
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
      <p>
        Already have an account? <a href="/Login">Login</a>
      </p>
    </div>
  );
};

export default SignupPage;
