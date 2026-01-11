import React from 'react'

const projectsData = [
    {
        title: 'Agritech Advisor',
        description: 'AI-powered agricultural analysis and crop health monitoring system integrated with Google AI Studio',
        image: '/agritech.png', // High-quality AI agriculture image
        link: 'https://aistudio.google.com/apps/drive/1rwGtCBgfOmhHvRr6SfotajWgXc3WNzPe?showAssistant=true&showPreview=true&fullscreenApplet=true',
        tech: ['React', 'Python', 'ML', 'TensorFlow'],
        delay: '0',
    },
    {
        title: 'Restaurant Menu',
        description: 'Interactive restaurant menu with modern design',
        image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
        link: 'https://svsrestaurant.netlify.app/',
        tech: ['HTML', 'CSS', 'JS'],
        delay: '100',
    },
    {
        title: 'Image Website',
        description: 'Images of college Tip company with modern features',
        image: 'https://t4.ftcdn.net/jpg/06/71/73/17/360_F_671731734_ZPhCahorORvCYlXrBjx2LdW4W5FfTneu.jpg',
        link: 'https://lovable.dev/projects/87ba9f28-ed38-4cd9-aa9e-d796a46f66ef',
        tech: ['React', 'Vite'],
        delay: '200',
    },
]

const Projects = () => {
    return (
        <section id="projects" className="projects-section" data-aos="fade-up">
            <h2>My Projects</h2>
            <div className="project-list">
                {projectsData.map((project, index) => (
                    <div
                        className="project"
                        data-aos="fade-up"
                        data-aos-delay={project.delay}
                        key={index}
                    >
                        <div className="project-img">
                            <img src={project.image} alt={project.title} />
                            <div className="project-overlay">
                                <div className="tech-stack">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a
                            href={project.link}
                            className="btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
