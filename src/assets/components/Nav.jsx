// import React, { useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { scroller } from "react-scroll";

// function Nav() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleScroll = (section) => {
//     if (location.pathname !== "/") {
//       // Navigate to homepage first
//       navigate("/", { state: { scrollTo: section } });
//     } else {
//       // Scroll directly if already on the homepage
//       scroller.scrollTo(section, { smooth: true, duration: 600 });
//     }
//   };

//   useEffect(() => {
//     if (location.state?.scrollTo) {
//       const section = location.state.scrollTo;
//       scroller.scrollTo(section, { smooth: true, duration: 600 });
//       navigate(location.pathname, { replace: true });
//     }
//   }, [location, navigate]);

//   const closeMenu = () => {
//     document.body.classList.remove("menu-open");
//   };

//   const handleMobileNavClick = (section) => {
//     handleScroll(section);
//     closeMenu(); // Close the menu after clicking a link
//   };

//   return (
//     <>
//       {/* Mobile Menu */}
//       <nav className="unslate_co--site-mobile-menu">
//         <div className="site-mobile-inner">
//           <ul
//             style={{
//               listStyle: "none",
//               padding: "0",
//               textAlign: "center",
//               fontFamily: `"Sevillana", cursive`,
//               fontSize: "20px",



//             }}
//           >
//             {[
//               { name: "Home", section: "home-section" },
//               { name: "Gallery", section: "gallery-section" },
//               { name: "About", section: "about-section" },
//               { name: "Services", section: "service-section" },
//               { name: "Testimonial", section: "testimonial-section" },
//               { name: "Contact", section: "contactus-section" },
//               { name: "Why-us", section: "why_us-section" },
//             ].map((item) => (
//               <li key={item.section} style={{ margin: "15px 0" }}>
//                 <button
//                   onClick={() => handleMobileNavClick(item.section)}
//                   style={{
//                     background: "none",
//                     border: "none",
//                     color: "black",
//                     cursor: "pointer",
//                     fontWeight: "bolder",


//                   }}
//                 >
//                   {item.name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Desktop Nav */}
//       <nav className="unslate_co--site-nav site-nav-target">
//         <div className="container ">
//           <div className="row align-items-center justify-content-between text-left p-2">
//             <div className="col-md-5 text-right">
//               <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
//                 <li>
//                   <Link
//                     onClick={() => handleScroll("home-section")}
//                     className="nav-link"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => handleScroll("gallery-section")}
//                     className="nav-link"
//                   >
//                     Gallery
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => handleScroll("about-section")}
//                     className="nav-link"
//                   >
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => handleScroll("service-section")}
//                     className="nav-link"
//                   >
//                     Services
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="site-logo pos-absolute">
//               <Link
//                 onClick={() => handleScroll("home-section")}
//                 className="unslate_co--site-logo img"
//               >
//                 <img src="/assets/images/tattoo/inkyardlogo.png" alt="Logo" />
//               </Link>
//             </div>
//             <div className="col-md-5 text-right text-lg-left">
//               <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
//                 <li>
//                   <Link
//                     onClick={() => handleScroll("testimonial-section")}
//                     className="nav-link"
//                   >
//                     Testimonial
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => handleScroll("contactus-section")}
//                     className="nav-link"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     onClick={() => handleScroll("why_us-section")}
//                     className="nav-link"
//                   >
//                     Why-us
//                   </Link>
//                 </li>
//               </ul>
//               <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
//                 <li>
//                   <button
//                     className="js-menu-toggle"
//                     style={{
//                       background: "white",
//                       border: "none",
//                       fontSize: "18px",
//                       cursor: "pointer",
//                       color: "black",

//                     }}
//                   >
//                     Menu
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </nav >
//     </>
//   );
// }

// export default Nav;

////////////new  


import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (section) => {
    if (location.pathname !== "/") {
      // Navigate to homepage first
      navigate("/", { state: { scrollTo: section } });
    } else {
      // Scroll directly if already on the homepage
      scroller.scrollTo(section, { smooth: true, duration: 600 });
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = location.state.scrollTo;
      // Scroll to the specified section
      scroller.scrollTo(section, { smooth: true, duration: 600 });
      // Clear the state after scrolling to prevent repeated scrolls
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);


  const closeMenu = () => {
    document.body.classList.remove("menu-open");
  };

  const handleMobileNavClick = (section) => {
    handleScroll(section);
    closeMenu(); // Close the menu after clicking a link
  };

  return (
    <>
      {/* Mobile Menu */}
      <nav className="unslate_co--site-mobile-menu">
        <div className="site-mobile-inner">
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              textAlign: "center",
              fontFamily: `"Sevillana", cursive`,
              fontSize: "20px",


            }}
          >
            {[
              { name: "Home", section: "home-section" },
              { name: "Gallery", section: "gallery-section" },
              { name: "About", section: "about-section" },
              { name: "Services", section: "service-section" },
              { name: "Testimonial", section: "testimonial-section" },
              { name: "Contact", section: "contactus-section" },
              { name: "Why-us", section: "why_us-section" },
            ].map((item) => (
              <li key={item.section} style={{ margin: "15px 0", }}>
                <Link
                  to="/"
                  state={{ scrollTo: item.section }}
                  className="nav-link"
                  onClick={closeMenu} // Close the menu after clicking
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Desktop Nav */}
      <nav className="unslate_co--site-nav site-nav-target">
        <div className="container ">
          <div className="row align-items-center justify-content-between text-left p-2">
            <div className="col-md-5 text-right">
              <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "home-section" }}
                    className="nav-link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "gallery-section" }}
                    className="nav-link"

                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "about-section" }}
                    className="nav-link"

                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "service-section" }}
                    className="nav-link"

                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="site-logo pos-absolute">
              <Link
                to="/"
                state={{ scrollTo: "home-section" }}
                className="nav-link unslate_co--site-logo img"

              >
                <img src="/assets/images/tattoo/inkyardlogo.png" alt="Logo" />
              </Link>
            </div>
            <div className="col-md-5 text-right text-lg-left">
              <ul className="site-nav-ul js-clone-nav text-left d-none d-lg-inline-block">
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "testimonial-section" }}
                    className="nav-link"

                  >
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "why_us-section" }}
                    className="nav-link"

                  >
                    Whyus
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "contactus-section" }}
                    className="nav-link"

                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <ul className="site-nav-ul-none-onepage text-right d-inline-block d-lg-none">
                <li>
                  <button
                    className="js-menu-toggle"
                    style={{
                      background: "none",
                      border: "",
                      fontSize: "22px",
                      cursor: "pointer",
                      color: "black",
                      fontWeight: "800",
                      textShadow: "1px 1px 2px white, -1px -1px 2px black, 2px 2px 2px white"


                    }}
                  >
                    Menu
                  </button>


                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}

export default Nav;
