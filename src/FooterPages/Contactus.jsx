import React, { useState } from 'react';
import SEOHelmet from '../Components/SEO/SeoHelmet';
import Footer from '../Components/Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
     <SEOHelmet
        title="Contact Us | Herbal Science"
        description="Discover the philosophy behind Herbal Science — safe, honest, and effective beauty solutions."
      />
   
    <div style={{ display: 'flex', padding: '40px', gap: '40px' }}>
      {/* Left Section */}
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#9D4C42' }}>Customer Support</h2>
        <p><strong>Herbal Science PVT. LTD.</strong><br/>
        9691997997
        </p>
        <p>Email: support@herbaljivan.com<br/>
           Phone: +91-9691997997<br/>
           Whatsapp: +91-9691997997
        </p>

        <p>For any query or grievance with respect to this privacy statement or to exercise your privacy rights, you can reach out to our grievance officer. Details of the Grievance officer are:</p>

        <p><strong>Grievance Officer Name :</strong> Manish Kumar<br/>
           <strong>Address :</strong>Corporate add-A-1/197,HASTSAL ROAD ,UTTAM NAGAR 
           DELHI -110059<br/>
           <strong>Email address :</strong> herbalscience28@gmail.com<br/>
           <strong>Contact telephone number:</strong> +91-9691997997<br/>
           <strong>Availability:</strong> 9:30 AM to 5:30 PM from Monday to Friday except Public, National & Festival Holidays
        </p>

        <h3 style={{ color: '#9D4C42' }}>Whatsapp Us</h3>
        <p>Do you want to know which JH products will suit your skin the best?<br/>
           Get a bespoke skin and product consultation on Whatsapp at +91-9691997997<br/>
           (Mon-Sat 10a.m. - 6p.m. IST)
        </p>

        <h3 style={{ color: '#9D4C42' }}>Return Address</h3>
        <p>Corporate add-A-1/197,HASTSAL ROAD ,UTTAM NAGAR 
        DELHI -110059
        </p>
      </div>

      {/* Right Section - Form */}
      <div style={{ flex: 1 }}>
        <h2 style={{ color: '#9D4C42' }}>Stay In Touch</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>NAME</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', backgroundColor: '#f2f2f2', border: 'none' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>EMAIL</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', backgroundColor: '#f2f2f2', border: 'none' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>PHONE NUMBER</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', backgroundColor: '#f2f2f2', border: 'none' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>MESSAGE (optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              style={{ width: '100%', padding: '10px', backgroundColor: '#f2f2f2', border: 'none' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>
              <input
                type="checkbox"
                name="termsAgreed"
                checked={formData.termsAgreed}
                onChange={handleChange}
              />{' '}
              I agree to the Terms and Conditions.
            </label>
          </div>
          <button type="submit" style={{ backgroundColor: '#9D4C42', color: 'white', padding: '10px 20px', border: 'none' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactForm;