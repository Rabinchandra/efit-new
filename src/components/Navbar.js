import logo from '../images/efit-logo.png'
import closePng from '../images/close.png'
import { useState } from 'react'

function Navbar() {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <>
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="links">
            <a href="#hero" className='active'>Home</a>
            <a href="#who-we-are">About</a>
            <a href="#what-we-do">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="hamburger" onClick={() => setIsClosed(false)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
    </nav>
    <div className={isClosed?"sidebar-overlay overlay-closed":'sidebar-overlay'}></div>
    <div className={isClosed? 'sidebar is-closed':'sidebar'}>
          <div className="side-links">
            <div className="close">
              <img src={closePng} alt="" onClick={() => setIsClosed(true)}/>
            </div>
            <a href="#hero">Home</a>
            <a href="#who-we-are">About</a>
            <a href="#what-we-do">Services</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
    </div>
    </>
  )
}

export default Navbar