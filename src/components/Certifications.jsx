import React from 'react'

const certsData = [
    {
        title: 'Loyola College ATC Ideathon',
        issuer: 'Loyola College - Achievement',
        year: '20 Sep 2025',
        image: 'https://images.pexels.com/photos/7092456/pexels-photo-7092456.jpeg',
        icon: 'fas fa-trophy',
        delay: '0',
    },
    {
        title: 'Participated in 5-Day AI Agents Intensive Course',
        issuer: 'Google AI Training',
        year: '3 weeks ago',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
        icon: 'fas fa-robot',
        delay: '100',
    },
    {
        title: 'Web Development Certification',
        issuer: 'Professional Development',
        year: '2025',
        image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
        icon: 'fas fa-code',
        delay: '200',
    },
    {
        title: 'Frontend Development with java',
        issuer: 'Advanced JS & React',
        year: '2024',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
        icon: 'fas fa-laptop-code',
        delay: '300',
    },
]

const Certifications = () => {
    return (
        <section id="certifications" className="certifications" data-aos="fade-up">
            <h2>Certifications & Achievements</h2>
            <div className="cert-card-grid">
                {certsData.map((cert, index) => (
                    <div
                        className="cert-card"
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={cert.delay}
                    >
                        <div className="cert-img-container">
                            <img src={cert.image} alt={cert.title} />
                            <div className="cert-overlay">
                                <i className={cert.icon}></i>
                            </div>
                        </div>
                        <div className="cert-details">
                            <h4>{cert.title}</h4>
                            <p>{cert.issuer}</p>
                            <span className="cert-year">{cert.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certifications
