import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/contact', formData)
      .then(() => {
        alert('Message sent successfully');
        setFormData({
          name: '',
          email: ''
        });
      })
      .catch(error => {
        alert('Error sending message');
        console.error('There was an error!', error);
      });
  };
  

  return (
    <section id="contact" className="p-8 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 bg-white p-8 shadow-md rounded">
          <div>
            <label htmlFor="name" className="block text-left mb-2">Name *</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border p-2" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-left mb-2">Email *</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2" required />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;