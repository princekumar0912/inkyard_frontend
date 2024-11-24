import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',

  });

  const handleChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(form);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Thanks for contacting us!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        toast.error('Failed to send mesasge. Please try again.');
        console.error('Failed to submit:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('An error occurred while booking the appointment.');
    }
  };
  return (
    <>
      <ToastContainer />
      <section id="contactus-section">
        <div className="unslate_co--site-wrap">
          <div className="unslate_co--section">
            <div className="container">
              <div className="section-heading-wrap text-center mb-5">
                <h2 className="heading-h2 text-center divider">
                  <span className="gsap-reveal">Get In Touch</span>
                </h2>
                <span className="gsap-reveal">
                  <img src="/assets/images/divider.png" alt="divider" width={76} />
                </span>
              </div>
              <div className="row justify-content-between">
                <div className="col-md-6">
                  <form
                    method="post"
                    className="form-outline-style-v1"
                    id="contactForm"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group row mb-0">
                      <div className="col-lg-6 form-group gsap-reveal">
                        <label htmlFor="name">Name</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control"

                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6 form-group gsap-reveal">
                        <label htmlFor="email">Email</label>
                        <input
                          name="email"
                          type="email"
                          className="form-control"

                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-6 form-group gsap-reveal">
                        <label htmlFor="contact">Phone</label>
                        <input
                          name="phone"
                          type="phone"
                          className="form-control"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col-lg-12 form-group gsap-reveal">
                        <label htmlFor="message">Write your message...</label>
                        <textarea
                          name="message"
                          onChange={handleChange}
                          cols={30}
                          rows={7}
                          className="form-control"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="form-group row gsap-reveal">
                      <div className="col-md-12 d-flex align-items-center">
                        <input
                          type="submit"
                          className="btn btn-outline-pill btn-custom-light mr-3"
                          defaultValue="Send Message"
                        />

                      </div>
                    </div>
                  </form>

                </div>
                <div className="col-md-4">
                  <div className="contact-info-v1">
                    <div className="gsap-reveal d-block">
                      <span className="d-block contact-info-label">Email</span>
                      <h5>
                        ikyardtattoostudio@gmail.com</h5>

                    </div>
                    <div className="gsap-reveal d-block">
                      <span className="d-block contact-info-label">Phone</span>
                      <a href="#" className="contact-info-val">
                        +91&nbsp;9517344270
                      </a>
                    </div>
                    <div className="gsap-reveal d-block">
                      <span className="d-block contact-info-label">Address</span>
                      <address className="contact-info-val">
                        shop no 18 , Main market kichlu nagar <br /> Ludhiana, Punjab
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>

  )
}

export default GetInTouch
