'use client'
import { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const formData = {
      // Mapping "Subject" to "Company" or adding it to the message so the API handles it
      company: e.target.subject.value || "General Inquiry", 
      email: e.target.email.value,
      volume: "General Contact Form", // Labeling it so you know it came from the contact section
      leadTime: e.target.name.value, // Using the leadTime field to pass the Name
      specs: e.target.message.value,
    }

    try {
      const response = await fetch('/api/send-rfp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-info-item">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div>
                <h4>Address</h4>
                <p>8390 Suite C Terminal Road, Lorton VA 22079</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><i className="fas fa-phone"></i></div>
              <div>
                <h4>Phone</h4>
                <p>(571) 632-6843</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div>
                <h4>Email</h4>
                {/* TIP: Once your domain is ready, update this to info@kanabagsllc.com */}
                <p>operations@kanabagsllc.net</p> 
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Us a Message</h3>
            {status === 'success' ? (
              <div className="success-message" style={{ padding: '20px', background: '#e8f5e9', borderRadius: '8px', color: '#2e7d32' }}>
                <strong>Thank you!</strong> Your message has been sent. Our team will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="e.g. Custom Cup Quote" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'error' && <p style={{ color: 'red', marginTop: '10px' }}>Something went wrong. Please try again.</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact