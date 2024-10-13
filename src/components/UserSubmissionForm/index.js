import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

function UserSubmissionForm() {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('INSTAGRAM');
  const [images, setImages] = useState([]);
  
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object to send the image data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMediaHandle', socialMediaHandle);
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await fetch('https://social-task-backend.onrender.com/submit-form', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle successful submission
        console.log('Submission successful!');
        // Clear form data for a fresh submission (optional)
        setName('');
        setSocialMediaHandle('');
        setImages([]);
        navigate('/admin-dashboard')
      } else {
        // Handle errors
        console.error('Submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
        <h1 className='heading'>User Submssions</h1>
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='input-box'
      />
      <select  type="text"
        placeholder="Social Media Handle"
        value={socialMediaHandle}
        onChange={(e) => setSocialMediaHandle(e.target.value)}
        className='input-box'>
       <option value='INSTAGRAM'>Instagram</option>
       <option value='FACEBOOK'>Facebook</option>
        </select>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => setImages(Array.from(e.target.files))}
        className='input-box'
      />
      <button type="submit" className='submit-btn'>Submit</button>
    </form>
    </div>
  );
}

export default UserSubmissionForm;