'use client'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    e.target.reset()
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing to our newsletter!')
    e.target.reset()
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Address</h4>
                <p>123 Green Street, Eco City, EC 12345</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@kanabags.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h4>Business Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact