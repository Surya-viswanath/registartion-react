

// import React, { useState } from 'react';
// import './Registartion.css'
// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     motherName: '',
//     birthday: '',
//     nationality: '',
//     gender: '',
//     email: '',
//     maritalStatus: '',
//     mobileNumber: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('https://formspree.io/f/mrgnvobe', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Form submitted successfully!');
//       } else {
//         alert('Failed to submit the form.');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
     
//                <div style={{display:'flex'}}>
//     <label >Full Name:</label>
    
//           <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required  style={{marginLeft:'39px'}}/>
          
//     </div>
//      <div style={{display:'flex'}}>
//       <label>Mother's Name:</label>
//          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
//      </div>
//       <div style={{display:'flex'}}>
//          <label>Birthday:</label>
//           <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required  style={{marginLeft:'51px'}}/>
//      </div>
//         <div style={{display:'flex'}}>
//          <label>Nationality:</label>
//         <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required  style={{marginLeft:'35px'}}/>
//         </div>
//       <div style={{display:'flex'}}>
//           <label>Gender:</label>
//      <select name="gender" value={formData.gender} onChange={handleChange} required style={{marginLeft:'59px'}}>
//             <option value="">Select</option>
//         <option value="male">Male</option>
//           <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//       </div>
//          <div style={{display:'flex'}}>
//           <label>Email:</label>
//          <input type="email" name="email" value={formData.email} onChange={handleChange} required  style={{marginLeft:'72px'}}/>
//        </div>
//        <div style={{display:'flex'}}>
//           <label>Marital Status:</label>
//      <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required style={{marginLeft:'10px'}}>
//             <option value="">Select</option>
//         <option value="male">Single</option>
//           <option value="female">Married</option>
//             <option value="other">Engaged</option>
//           </select>
//       </div>
 
//        <div style={{display:'flex'}}>
//         <label>Mobile Number:</label>
//           <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
//        </div>
//          <div style={{display:'flex'}}>
//          <label>Upload Photo:</label>
//          <input type="file" name="photo" onChange={handleChange} required />
//       </div>
//         <button type="submit" style={{backgroundColor:'#659651'}}>Submit</button>
//     </form>
//   );
// }

// export default RegistrationForm;



// important above


// import React, { useState } from 'react';
// import './Registartion.css'
// function RegistrationForm() {
//     const [formData, setFormData] = useState({
//         fullName: '',
//         motherName: '',
//         birthday: '',
//         nationality: '',
//         gender: '',
//         email: '',
//         maritalStatus: '',
//         mobileNumber: '',
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//       };
    
//       const handleSubmit = (e) => {
//         e.preventDefault();
    
//         const emailContent = `
//           Full Name: ${formData.fullName}
//           Mother's Name: ${formData.motherName}
//           Birthday: ${formData.birthday}
//           Nationality: ${formData.nationality}
//           Gender: ${formData.gender}
//           Email: ${formData.email}
//           Marital Status: ${formData.maritalStatus}
//           Mobile Number: ${formData.mobileNumber}
//         `;
    
//         const mailtoLink = `mailto:suryaviswanath22@gmail.com?subject=New Registration Form Submission&body=${encodeURIComponent(emailContent)}`;
    
//         window.location.href = mailtoLink;
//       };
    
//   return (
//     <form onSubmit={handleSubmit}>
     
//                <div>
//     <label>Full Name:</label>
//           <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
//     </div>
//      <div>
//       <label>Mother's Name:</label>
//          <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
//      </div>
//       <div>
//          <label>Birthday:</label>
//           <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
//      </div>
//         <div>
//          <label>Nationality:</label>
//         <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} required />
//         </div>
//       <div>
//           <label>Gender:</label>
//      <select name="gender" value={formData.gender} onChange={handleChange} required>
//             <option value="">Select</option>
//         <option value="male">Male</option>
//           <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//       </div>
//          <div>
//           <label>Email:</label>
//          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
//        </div>
//  <div>
//          <label>Marital Status:</label>
//          <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required />
//       </div>
//        <div>
//         <label>Mobile Number:</label>
//           <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
//        </div>
//          <div>
//          <label>Upload Passport Size Photo:</label>
//          <input type="file" name="photo" onChange={handleChange} required />
//       </div>
//         <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default RegistrationForm;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import './Registartion.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    motherName: '',
    fatherName: '',
    birthday: '',
    nationality: '',
    gender: '',
    residentCountry: '',
    address: '',
    email: '',
    maritalStatus: '',
    mobileNumber: '',
    secondMobileNumber: '',
  });
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(response => {
      const countryOptions = response.data.map(country => ({
        value: country.cca2.toLowerCase(),
        label: country.name.common,
      }));
      setCountries(countryOptions);
    });

    const input = document.querySelector("#mobileNumber");
    const iti = intlTelInput(input, {
      initialCountry: "auto",
      geoIpLookup: function(callback) {
        axios.get('https://ipinfo.io?token=<your_token>')
          .then(response => callback(response.data.country))
          .catch(() => callback('us'));
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
    });

    const secondInput = document.querySelector("#secondMobileNumber");
    const itiSecond = intlTelInput(secondInput, {
      initialCountry: "auto",
      geoIpLookup: function(callback) {
        axios.get('https://ipinfo.io?token=<your_token>')
          .then(response => callback(response.data.country))
          .catch(() => callback('us'));
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"
    });

    return () => {
      iti.destroy();
      itiSecond.destroy();
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData({
      ...formData,
      [name]: selectedOption ? selectedOption.value : ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.fullName.length <= 6) {
      alert('Full Name must be greater than 6 letters.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      if (response.status === 201) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="motherName">Mother's Name:</label>
        <input type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="fatherName">Father's Name:</label>
        <input type="text" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" value={formData.birthday} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="nationality">Nationality:</label>
        <Select id="nationality" name="nationality" options={countries} onChange={handleSelectChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="residentCountry">Resident Country:</label>
        <Select id="residentCountry" name="residentCountry" options={countries} onChange={handleSelectChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="maritalStatus">Marital Status:</label>
        <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="engaged">Engaged</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input type="tel" id="mobileNumber" name="mobileNumber" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="secondMobileNumber">2nd no:(Opt.):</label>
        <input type="tel" id="secondMobileNumber" name="secondMobileNumber" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="photo">Upload Photo:</label>
        <input type="file" id="photo" name="photo" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;