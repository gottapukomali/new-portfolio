import React from 'react'

const About = () => {
    return (
        <section id="about" className="about" data-aos="fade-up">
            <div className="about-image" data-aos="fade-right">
                <img
                    src="/about-tech.png"
                    alt="About Me - Tech Stack"
                />
            </div>
            <div className="about-content" data-aos="fade-left">
                <h2>About Me</h2>
                <p>
                    I’m a full-stack web developer with a strong focus on building scalable,
                    high-performance applications that integrate modern frontend engineering
                    with AI-driven systems. My work spans React-based interfaces, backend
                    development with Node.js and Python, and the integration of machine
                    learning models into real-world web solutions.
                </p>
                <p>
                    Currently pursuing my <strong>B.Tech (3rd year)</strong> at Eluru College
                    of Engineering and Technology, I have hands-on experience through
                    multiple internships and production-level projects. I prioritize clean
                    architecture, performance optimization, and user-centric design, aiming
                    to build software that is both technically solid and practically impactful.
                </p>
                <div className="stats">
                    <div className="stat">
                        <span className="number">3rd</span>
                        <span className="label">Year B.Tech</span>
                    </div>
                    <div className="stat">
                        <span className="number">5+</span>
                        <span className="label">AI Projects</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
