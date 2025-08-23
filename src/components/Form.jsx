import React, { useState } from 'react';
import '../styles/Form.css';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [course, setCourse] = useState('');
  const [batch, setBatch] = useState('');
  const [branch, setBranch] = useState('');
  const [skills, setSkills] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !contactNumber || !course || !batch || !branch || !skills || !email) {
      alert('Please fill in all the required fields.');
      return;
    }

    const formData = {
      fullName,
      contactNumber,
      course,
      batch,
      branch,
      skills,
      email,
    };

    setTimeout(() => {
      setIsSubmitted(true);

      setFullName('');
      setContactNumber('');
      setCourse('');
      setBatch('');
      setBranch('');
      setSkills('');
      setEmail('');
    }, 1000);
  };

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Contact Number:
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Course:
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Batch:
        <input
          type="text"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Branch:
        <input
          type="text"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Your good skill set:
        <textarea
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email ID:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      {isSubmitted ? (
        <p className="success-message">Form submitted successfully!</p>
      ) : (
        <button type="submit">Submit</button>
      )}
    </form>
    <hr style={{width: '80vw', margin: 'auto'}}/>
    </>
  );
};

export default Form;
