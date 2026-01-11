import React, { useEffect, useRef } from 'react'

const skillsData = [
    {
        name: 'Frontend Development',
        icon: 'fas fa-code',
        iconClass: 'frontend-icon',
        percentage: '95%',
        delay: '0',
    },
    {
        name: 'Backend (Node.js/Python)',
        icon: 'fas fa-server',
        iconClass: 'python-icon',
        percentage: '85%',
        delay: '100',
    },
    {
        name: 'API Design & Rest',
        icon: 'fas fa-project-diagram',
        iconClass: 'api-icon',
        percentage: '90%',
        delay: '200',
    },
    {
        name: 'Authentication & JWT',
        icon: 'fas fa-lock',
        iconClass: 'auth-icon',
        percentage: '88%',
        delay: '300',
    },
    {
        name: 'Databases (SQL/NoSQL)',
        icon: 'fas fa-database',
        iconClass: 'database-icon',
        percentage: '85%',
        delay: '400',
    },
    {
        name: 'System Integration',
        icon: 'fas fa-network-wired',
        iconClass: 'integration-icon',
        percentage: '85%',
        delay: '500',
    },
    {
        name: 'AI Agent Architectures',
        icon: 'fas fa-robot',
        iconClass: 'ai-icon',
        percentage: '90%',
        delay: '600',
    },
    {
        name: 'Version Control (Git)',
        icon: 'fab fa-git-alt',
        iconClass: 'git-icon',
        percentage: '92%',
        delay: '700',
    },
    {
        name: 'Deployment (CI/CD)',
        icon: 'fas fa-cloud-upload-alt',
        iconClass: 'deployment-icon',
        percentage: '80%',
        delay: '800',
    },
    {
        name: 'Debugging & Testing',
        icon: 'fas fa-bug',
        iconClass: 'debug-icon',
        percentage: '85%',
        delay: '900',
    },
    {
        name: 'Web Security',
        icon: 'fas fa-shield-alt',
        iconClass: 'security-icon',
        percentage: '82%',
        delay: '1000',
    },
]

const Skills = () => {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate')
                    }
                })
            },
            { threshold: 0.5 }
        )

        const bars = sectionRef.current.querySelectorAll('.progress-bar')
        bars.forEach((bar) => observer.observe(bar))

        return () => {
            bars.forEach((bar) => observer.unobserve(bar))
        }
    }, [])

    return (
        <section id="skills" className="skills" data-aos="fade-up" ref={sectionRef}>
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <div
                        className="skill-card"
                        data-aos="flip-left"
                        data-aos-delay={skill.delay}
                        key={index}
                    >
                        <div className={skill.iconClass}>
                            <i className={skill.icon}></i>
                        </div>
                        <h3>{skill.name}</h3>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{ width: skill.percentage }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
