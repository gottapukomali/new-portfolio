import React from 'react'

const experienceData = [
    {
        role: 'Web Developer Intern',
        organization: 'collegetips.in',
        duration: 'Sept 2024 - Present',
        description: 'Working on frontend and backend developments, ensuring high performance and responsiveness of web applications.',
        delay: '0',
    },
    {
        role: 'Full Stack Developer Intern',
        organization: 'Tech Innovations Inc.',
        duration: 'June 2024 - Aug 2024',
        description: 'Developing AI-integrated web applications, optimizing database queries, and implementing real-time data visualization dashboards.',
        delay: '100',
    },
    {
        role: 'Web Development Intern',
        organization: 'Global Soft Solutions',
        duration: 'Jan 2024 - May 2024',
        description: 'Collaborated on building responsive e-commerce platforms using React and Node.js. Improved site performance by 30% through code optimization.',
        delay: '200',
    },
]

const Experience = () => {
    return (
        <section id="experience" className="experience" data-aos="fade-up">
            <h2>My Experience</h2>
            <div className="experience-grid">
                {experienceData.map((exp, index) => (
                    <div
                        className="experience-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={exp.delay}
                    >
                        <div className="exp-icon">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <div className="exp-content">
                            <h3>{exp.role}</h3>
                            <h4>{exp.organization}</h4>
                            <span className="exp-duration">{exp.duration}</span>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience
