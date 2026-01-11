import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                'Full-Stack Developer',
                'Python Backend Developer',
                'API Designer',
                'Web Developer',
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <section id="home" className="hero" data-aos="fade-up">
            <div className="content">
                <h2>Hello, It's Me</h2>
                <h1>Gottapu Komali</h1>
                <h3>
                    And I'm a <span className="typed-text" ref={el}></span>
                </h3>
                <p>
                    Passionate about creating seamless and interactive web experiences.
                </p>
                <div className="social-icons">
                    <a
                        href="https://github.com/gottapukomali"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a
                        href="https://stackoverflow.com/users/30393016/komali-gottapu?tab=profile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-stack-overflow"></i>
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <br />
                <a href="/resume.pdf" download className="btn">
                    Download CV
                </a>
            </div>
            <div className="image" data-aos="fade-left">
                <img src="/img.jpeg" alt="Gottapu Komali - Frontend Developer" />
            </div>
        </section>
    )
}

export default Hero
