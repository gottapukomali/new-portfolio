import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleScroll = (e, id) => {
        e.preventDefault()
        const element = document.querySelector(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsOpen(false)
        }
    }

    return (
        <header>
            <nav>
                <div className="logo">Portfolio.</div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <i className="fas fa-bars"></i>
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a></li>
                    <li><a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a></li>
                    <li><a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a></li>
                    <li><a href="#experience" onClick={(e) => handleScroll(e, '#experience')}>Experience</a></li>
                    <li><a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a></li>
                    <li><a href="#certifications" onClick={(e) => handleScroll(e, '#certifications')}>Certifications</a></li>
                    <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
