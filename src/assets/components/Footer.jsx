import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

<FontAwesomeIcon icon="fa-brands fa-x-twitter" />
function Footer() {
  return (
    <div>
      <div className="footer-dark ">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Tattoo</a>
                  </li>
                  <li>
                    <a href="#">Piercing</a>
                  </li>
                  <li>
                    <a href="#">Tattoo classes</a>
                  </li>
                </ul>
              </div>
              {/* <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div> */}
              <div className="col-md-6 item text">
                <h3>Inkyard Tattoo Studio</h3>
                <p>
                  At Inkyard, we create more than tattoos – we craft stories that live on your skin. Every design is personal, unique, and made with precision to reflect your journey.
                </p>
              </div>
              <div className="col item social ">
                <Link to="https://www.facebook.com/pawan.shergill.104/">
                  <i><FaFacebook /></i>
                </Link>
                <Link to="https://www.instagram.com/inkyard_/">
                  <i><FaInstagram /></i>
                </Link>
                <Link to="https://www.youtube.com/@inkyard_">
                  <i><FaYoutube /></i>

                </Link>
                <Link to="https://x.com/inkyard_" style={{ textDecoration: 'none', fontSize: '20px' }}>
                  X
                </Link>

              </div>
            </div>
            <p className="copyright">Inkyard © 2024</p>
          </div>
        </footer>
      </div >
    </div >
  )
}

export default Footer
