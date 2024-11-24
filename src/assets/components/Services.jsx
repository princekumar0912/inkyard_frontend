import React from 'react'

function Services() {
  return (

    <>
      <section id="service-section">
        <div className="section-heading-wrap text-center mb-5">
          <h2 className="heading-h2 text-center divider">
            <span className="gsap-reveal">Services</span>
          </h2>
          <span className="gsap-reveal">
            <img src="/assets/images/divider.png" alt="divider" width={76} />
          </span>
        </div>
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <span className="gsap-reveal">
                  <img
                    src="assets/images/tattoo/tattoo-service.jpg"
                    className="lazyload  img-fluid"
                    alt="Images"
                  />
                </span>
              </div>
              <div className="card_content">
                {/* <h2 className="card_title">Tattoo</h2> */}
                {/* <p className="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid layout
                  </p> */}
                <p className='btn services-name'>Tattoos</p>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <span className="gsap-reveal">
                  <img
                    src="assets/images/tattoo/piercing.jpg"
                    className="lazyload  img-fluid"
                    alt="Images"
                  />
                </span>
              </div>
              <div className="card_content">
                {/* <h2 className="card_title">Card Grid Layout</h2> */}
                {/* <p className="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid layout
                  </p> */}
                <h3 className="btn services-name ">Piercing</h3>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image">
                <span className="gsap-reveal">
                  <img
                    src="assets/images/tattoo/tattoo-classes.jpg"
                    className="lazyload  img-fluid"
                    alt="Images"
                  />
                </span>
              </div>
              <div className="card_content">
                {/* <h2 className="card_title">Card Grid Layout</h2> */}
                {/* <p className="card_text">
                    Demo of pixel perfect pure CSS simple responsive card grid layout
                  </p> */}
                <h3 className="btn services-name">Tattoo classes</h3>
              </div>
            </div>
          </li>
        </ul>
      </section>

    </>


  )
}

export default Services
