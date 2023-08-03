import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>My projects</h1>
          <p>
            A headless CMS is a back-end only content management system that
            provides content creators with an intuitive interface for creating
            and managing content, while leaving the front-end presentation layer
            to be handled by a separate system or platform. This approach allows
            for greater flexibility and scalability, as the content can be
            easily distributed to multiple channels and devices, without being
            limited by the constraints of a particular front-end system.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="undraw image" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
