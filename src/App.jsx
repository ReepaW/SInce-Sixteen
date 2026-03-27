import { useState } from 'react'
import './App.css'
import jempol from './assets/jempol.JPG'
import wisuda from './assets/wisuda.JPG'
import bubuy from './assets/bubuy.JPG'
import wisudah from './assets/wisudah.JPG'
import mu1 from './assets/mu1.JPG'
import mu2 from './assets/mu2.JPG'
import mu3 from './assets/mu3.JPG'
import muanim from './assets/muanim.JPG'

function App() {
  const [entered, setEntered] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setContactSubmitted(true)
  }

  // Define portfolio images array OUTSIDE JSX
  const portfolioImages = [
    { src: wisudah, alt: "Wisudah" },
    { src: mu1, alt: "mu1" },
    { src: mu2, alt: "mu2" },
    { src: mu3, alt: "mu3" },
    

  
  ]

  return (
    <div className="app">
      {/* Top / Bottom labels - visible after enter */}
      {entered && (
        <>
          <span className="page-label top"> </span>
          <span className="page-label bottom"> </span>
        </>
      )}

      {/* Overlay Menu */}
      <nav className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <button className="menu-back" onClick={() => setMenuOpen(false)}>
          BACK
        </button>
        <div className="menu-links">
          <button onClick={() => scrollTo('portfolio')}>PORTFOLIO</button>
          <button onClick={() => scrollTo('about')}>ABOUT</button>
          <button onClick={() => scrollTo('contact')}>CONTACT</button>
        </div>
      </nav>

      {/* Hero / Landing - full screen until ENTER */}
      <section className={`hero ${entered ? 'exited' : ''}`}>
        <div className="hero-bg">
          <img src={mu1} alt="mu1" className="hero-bg-img" />
        </div>
        <div className="hero-content">
          <h1 className="hero-name">Reepaw & Reecah</h1>
          <p className="hero-role">Our Life Journey</p>
          <button className="enter-btn" onClick={() => setEntered(true)}>
            ENTER
          </button>
        </div>
      </section>

      {/* Main site - appears after ENTER */}
      {entered && (
        <main className="main">
          <header className="header">
            <a href="/" className="logo">ReepaW & Reecah</a>
            <button className="menu-btn" onClick={() => setMenuOpen(true)}>
              MENU
            </button>
          </header>

          <section className="intro-photo">
            <img src={muanim}
            
            alt="Main memory" className="intro-photo-img" />
          </section>

          <section id="portfolio" className="section portfolio">
            <h2>PORTFOLIO</h2>
            <div className="gallery">
              {portfolioImages.map((image, i) => (
                <div key={i} className="gallery-item">
                  <img src={image.src} alt={image.alt} className="gallery-img" />
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="section about">
            <h2>ABOUT</h2>
            <p className="about-text">
              Write Description Here
            </p>
          </section>

          <section id="contact" className="section contact">
            <h2>CONTACT</h2>
            {contactSubmitted ? (
              <p className="thank-you">THANK YOU.</p>
            ) : (
              <form onSubmit={handleContactSubmit} className="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message" rows={4} required />
                <button type="submit" className="submit-btn">SUBMIT</button>
              </form>
            )}
          </section>
        </main>
      )}
    </div>
  )
}

export default App