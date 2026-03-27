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
  const [selectedPhase, setSelectedPhase] = useState('highschool')

  const scrollTo = (id) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    setContactSubmitted(true)
  }

  const portfolioImages = [
    { src: wisudah, alt: "Wisudah" },
    { src: mu1, alt: "mu1" },
    { src: mu2, alt: "mu2" },
    { src: mu3, alt: "mu3" },
  ]

  const journeyPhases = [
    {
      id: 'highschool',
      period: '2016 - 2019',
      title: 'Highschool (Teenager)',
      description: 'The beginning of us, from classmates to the first chapters of our story.',
      image: mu1,
      alt: 'Highschool memory',
      memories: [
        { year: '2016', caption: 'Where it all started', src: mu1, alt: 'Memory from 2016' },
        { year: '2017', caption: 'Growing closer every day', src: mu2, alt: 'Memory from 2017' },
        { year: '2018', caption: 'Teenage days full of laughs', src: mu3, alt: 'Memory from 2018' },
        { year: '2019', caption: 'Last school chapter together', src: wisudah, alt: 'Memory from 2019' },
      ],
    },
    {
      id: 'college',
      period: '2019 - 2025',
      title: 'College (Young Adult)',
      description: 'Different routines, bigger dreams, and still choosing each other through every season.',
      image: wisudah,
      alt: 'College memory',
      memories: [
        { year: '2019', caption: 'Stepping into a new phase', src: wisudah, alt: 'Memory from 2019' },
        { year: '2021', caption: 'Long days, stronger bond', src: bubuy, alt: 'Memory from 2021' },
        { year: '2023', caption: 'Still side by side', src: jempol, alt: 'Memory from 2023' },
        { year: '2025', caption: 'A proud milestone together', src: wisuda, alt: 'Memory from 2025' },
      ],
    },
    {
      id: 'work',
      period: '2025 - Forever',
      title: 'Work Phase (Adult)',
      description: 'Building life, careers, and a future together. This chapter keeps growing.',
      image: muanim,
      alt: 'Adult phase memory',
      memories: [
        { year: '2025', caption: 'Starting the adult chapter', src: muanim, alt: 'Memory from 2025' },
        { year: '2026', caption: 'Creating our next routines', src: jempol, alt: 'Memory from 2026' },
        { year: 'Future', caption: 'More memories to come', src: wisuda, alt: 'Future memory' },
      ],
    },
  ]
  const activePhase = journeyPhases.find((phase) => phase.id === selectedPhase) ?? journeyPhases[0]

  return (
    <div className="app">
      {/* Top / Bottom labels - visible after enter */}
      {entered && (
        <>
          <span className="page-label top">Since Sixteen</span>
          <span className="page-label bottom">Our Journey</span>
        </>
      )}

      {/* Overlay Menu */}
      <nav className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
        <button className="menu-back" onClick={() => setMenuOpen(false)}>
          BACK
        </button>
        <div className="menu-links">
          <button onClick={() => scrollTo('journey')}>JOURNEY</button>
          <button onClick={() => scrollTo('memory-library')}>LIBRARY</button>
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
          <h1 className="hero-name">Reepaw &amp; Reecah</h1>
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
            <a href="/" className="logo">Reepaw &amp; Reecah</a>
            <button className="menu-btn" onClick={() => setMenuOpen(true)}>
              MENU
            </button>
          </header>

          <section className="intro-photo">
            <img src={muanim} alt="Main memory" className="intro-photo-img" />
            <div className="intro-photo-copy">
              <p className="intro-kicker">A story from sixteen to forever</p>
              <h2>Every memory has a heartbeat.</h2>
            </div>
          </section>

          <section id="journey" className="section journey">
            <h2>OUR JOURNEY</h2>
            <p className="journey-intro">
              This gallery is our little timeline, a place to keep the moments that built us.
            </p>
            <div className="journey-grid">
              {journeyPhases.map((phase) => (
                <button
                  key={phase.id}
                  type="button"
                  className={`journey-card ${selectedPhase === phase.id ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedPhase(phase.id)
                    scrollTo('memory-library')
                  }}
                >
                  <img src={phase.image} alt={phase.alt} className="journey-img" />
                  <div className="journey-card-content">
                    <p className="journey-year">{phase.period}</p>
                    <h3>{phase.title}</h3>
                    <p>{phase.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section id="memory-library" className="section memory-library">
            <h2>MEMORY LIBRARY</h2>
            <p className="library-subtitle">
              {activePhase.title} - {activePhase.period}
            </p>
            <div className="library-grid">
              {activePhase.memories.map((memory) => (
                <article key={`${activePhase.id}-${memory.year}-${memory.caption}`} className="library-item">
                  <img src={memory.src} alt={memory.alt} className="library-img" />
                  <div className="library-caption">
                    <span>{memory.year}</span>
                    <p>{memory.caption}</p>
                  </div>
                </article>
              ))}
            </div>
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
              We created Since Sixteen to celebrate where we started and how far we have grown together.
              Every photo here is a chapter from our relationship journey.
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
                <textarea placeholder="Leave us a little message" rows={4} required />
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