import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '/public/assets/css/style.css'
const Testimonials = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1, // Number of testimonials to show at a time
  };
  // #D9D9D9
  return (
    <section id='testimonial-section'>
      <div className="unslate_co--section" id="testimonial-section">
        <div className="container">
          <div className="section-heading-wrap text-center mb-5">
            <h2 className="heading-h2 text-center divider">
              <span>My Happy Clients</span>
            </h2>
            <span>
              <img src="/assets/images/divider.png" alt="divider" width={76} />
            </span>
          </div>
        </div>
        <OwlCarousel className="owl-carousel testimonial-slider" {...options}>
          <div>
            <div className="testimonial-v1">
              <div className="testimonial-inner-bg">
                <span className="quote">“</span>
                <blockquote>
                  "The design process was a dream! I shared my vision, and the artist at Inkyard turned it into a masterpiece. The environment was welcoming, and the hygiene standards were top-notch. A 10/10 experience!"</blockquote>
              </div>
              <div className="testimonial-author-info">
                <img src="/assets/images/tattoo/pk.jpg" alt="Image" />

              </div>
            </div>
          </div><div>
            <div className="testimonial-v1">
              <div className="testimonial-inner-bg">
                <span className="quote">“</span>
                <blockquote>
                  "I’ve had tattoos done at a few places, but Inkyard stands out. The attention to detail and the way they bring your ideas to life is amazing. The team is so friendly and truly passionate about their work. Highly recommended!"                </blockquote>
              </div>
              <div className="testimonial-author-info">
                <img src="/assets/images/tattoo/manav.jpg" alt="Image" />

              </div>
            </div>
          </div><div>
            <div className="testimonial-v1">
              <div className="testimonial-inner-bg">
                <span className="quote">“</span>
                <blockquote>
                  "Absolutely love my new tattoo! The artists at Inkyard are incredibly talented and professional. The studio was super clean, and they made me feel completely comfortable throughout the process. I can’t wait to come back for my next one!"  </blockquote>
              </div>
              <div className="testimonial-author-info">
                <img src="/assets/images/tattoo/arun.jpg" alt="Image" />

              </div>
            </div>
          </div><div>
            <div className="testimonial-v1">
              <div className="testimonial-inner-bg">
                <span className="quote">“</span>
                <blockquote>
                  "From the first consultation to the finished tattoo, everything was perfect. The team is professional and super talented. They took their time to ensure every detail was flawless. I couldn’t be happier with the result!"                </blockquote>
              </div>
              <div className="testimonial-author-info">
                <img src="/assets/images/tattoo/harsh.jpg" alt="Image" />

              </div>
            </div>
          </div>
          {/* Repeat similar blocks for more testimonials */}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Testimonials;
