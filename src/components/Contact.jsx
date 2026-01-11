import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [isSending, setIsSending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSending(true)

        // EmailJS implementation
        // NOTE: You need to create an account at https://www.emailjs.com/
        // and replace these placeholders with your actual IDs
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            e.target,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                console.log(result.text)
                alert('Thank you! Your message has been sent successfully.')
                e.target.reset()
            }, (error) => {
                console.log(error.text)
                alert('Oops! Something went wrong. Please try again or email me directly.')
            })
            .finally(() => {
                setIsSending(false)
            })
    }

    return (
        <section id="contact" className="contact" data-aos="fade-up">
            <h2>Contact Me</h2>
            <div className="contact-container">
                <div className="contact-info" data-aos="fade-right">
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="info-details">
                            <h3>Email</h3>
                            <p>
                                <a href="mailto:komaligottpu@gmail.com" className="contact-link">
                                    komaligottpu@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className="info-details">
                            <h3>LinkedIn</h3>
                            <p>
                                <a
                                    href="https://www.linkedin.com/in/komali-gottapu-webdeveloper/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    Komali Gottapu
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <div className="info-details">
                            <h3>GitHub</h3>
                            <p>
                                <a
                                    href="https://github.com/gottapukomali"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    gottapukomali
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="info-details">
                            <h3>Twitter</h3>
                            <p>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    @komali
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper" data-aos="fade-left">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" placeholder="Your email ID" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Subject</label>
                            <input type="text" name="subject" placeholder="Subject of your message" required />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" placeholder="Write your message here..." required></textarea>
                        </div>
                        <button type="submit" className="btn submit-btn" disabled={isSending}>
                            <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                            <i className={`fas ${isSending ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
