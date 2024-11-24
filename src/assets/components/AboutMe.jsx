import React from 'react'

function AboutMe() {
  return (
    <>
      <section id="about-section">
        <div className='unslate_co--site-inner'>
          <div className="unslate_co--section" id="about-section">
            <div className="container">
              <div className="section-heading-wrap text-center mb-5">
                <h2 className="heading-h2 text-center divider">
                  <span className="gsap-reveal">About Me</span>
                </h2>
                <span className="gsap-reveal">
                  <img src="/assets/images/divider.png" alt="divider" width={76} />
                </span>
              </div>
              <div className="row mt-5 justify-content-between">
                <div className="col-lg-7 mb-5 mb-lg-0">
                  <figure className="dotted-bg gsap-reveal-img ">
                    <img
                      src="/assets/images/tattoo/about_color.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="col-lg-4 pr-lg-5">
                  <h3 className="mb-4 heading-h3">
                    <span className="gsap-reveal">Express Yourself with Ink.</span>
                  </h3>
                  <p className="lead gsap-reveal">
                    We believe every tattoo has a story. At Inkyard, we’re here to ensure yours is bold, beautiful, and uniquely<span> yours.</span> </p>
                  <p className="mb-4 gsap-reveal">
                    i Pawan, the owner and skilled artist at Inkyard Tattoo Studio, entered the tattoo industry as an intern in 2019, gradually mastering the craft. In 2021,  I established my own studio, specializing in line work arts, small minimalist tattoos, band tattoos, Realism and piercings. With a focus on customer happiness and satisfaction, Inkyard Tattoo Studio offers unbeatable charges compared to other studios.
                  </p>
                  {/* <p className="gsap-reveal">
                  <a href="#" className="btn btn-outline-pill btn-custom-light">
                    Download my CV
                  </a>
                </p> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>


  )
}

export default AboutMe
