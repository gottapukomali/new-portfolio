import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        })

        // Scroll detection for custom scrollbar
        let scrollTimeout;
        const handleScroll = () => {
            document.body.classList.add('is-scrolling');
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                document.body.classList.remove('is-scrolling');
            }, 1000);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return (
        <div>
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
