import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
// import { Navigate, useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
function HeroSection() {

  // const navigate = useNavigate();
  // const handlebooking = () => {
  //   navigate('/booking')
  // }
  return (

    <div>
      <div className="unslate_co--site-wrap">
        <div className="unslate_co--site-inner">
          <div className="lines-wrap">
            <div className="lines-inner">
              <div className="lines" />
            </div>
          </div>
          <div
            className="cover-v1 jarallax "
            style={{ backgroundImage: 'url("/assets/images/heroimage.jpeg")' }}
            id="home-section"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-7 mx-auto text-center">
                  <h1 className="heading gsap-reveal-hero">Inkyard.</h1>
                  <div className=" gsap-reveal-hero  mt-2  ">
                    {/* <p><strong>"Where</strong></p> Every Stroke of <p>Ink</p> Tells a Unique Story on Your <p>Skin"</p> */}
                    <h2 className="subheadinghero  ">Where Every Stroke of <p>Ink.</p> <br />Tells a Unique Story on Your <p>Skin.</p></h2>
                  </div>

                  <div className='gsap-reveal-hero mt-2'>
                    <Link to='/booking'> <button className="button-57" role="button"><FontAwesomeIcon className='mr-2' icon={faCalendarCheck} /><span className="text">Appointment</span><span>BookNow</span></button></Link>
                    {/* <Link to='/buyproducts'><button className="button-57 ml-3" role="button"><FontAwesomeIcon className='mr-2' icon={faCartShopping} /><span className="text">SHOP</span><span>Shopnow</span></button></Link> */}
                  </div>
                </div>
              </div>
            </div>
            <a href="#portfolio-section" className="mouse-wrap smoothscroll">
              <span className="mouse">
                <span className="scroll" />
              </span>
              <span className="mouse-label">Scroll</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection