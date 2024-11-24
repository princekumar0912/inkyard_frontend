import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhoneAlt, faCalendarAlt, faVenusMars, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    gender: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.gender) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thanks for booking an appointment! We will contact you shortly to confirm your booking.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          gender: '',
          notes: '',
        });
      } else {
        toast.error('Failed to book appointment. Please try again.');
        console.error('Failed to submit:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred while booking the appointment.');
    } finally {
      setLoading(false);  // Set loading state to false after the request
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="main-container mt-2">
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-header">
            <img className="form-img" src="/assets/images/tattoo/logo.jpeg" alt="Tattoo Studio Logo" />
            <h2>Book Your Appointment Now!</h2>
          </div>
          <div className="form-body">
            <div className="input-group">
              <FontAwesomeIcon icon={faUser} className="input-icon" />
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faPhoneAlt} className="input-icon" />
              <input
                type="tel"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group ">
              <FontAwesomeIcon icon={faCalendarAlt} className="input-icon" />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={today}  // Set the minimum date to today's date
              />
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faVenusMars} className="input-icon" />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <FontAwesomeIcon icon={faStickyNote} className="input-icon" />
              <textarea
                rows={3}
                placeholder="Any additional notes (optional)"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              className="button60"
              type="submit"
              disabled={loading}  // Disable button while loading
            >
              {loading ? 'Submitting...' : 'Book Appointment'}  {/* Show loading text */}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Appointment;
