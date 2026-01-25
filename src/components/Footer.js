'use client'

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for subscribing to our newsletter!')
    e.target.reset()
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>KanaBags LLC</h3>
            <p>
              Based in <strong>Lorton, Virginia</strong>, Kanabags is the forward-thinking packaging division of Kana PLC. 
              Established in 2025, we specialize in high-volume, eco-friendly paper solutions for the North American supply chain.
            </p>
            {/* <div className="social-links">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="X (Twitter)"><i className="fab fa-x-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#environment">Environment</a></li>
              <li><a href="#procurement-form">Procurement Portal</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Facility Location</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.8' }}>
              8390 Suite C Terminal Road<br />
              Lorton, VA 22079<br />
              <strong>Phone:</strong> (571) 632-6843<br />
              <strong>Email:</strong> kanabags001@gmail.com OR info@kanabagsllc.com
            </p>
          </div>

          {/* <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Get technical updates on our manufacturing capacity and new sustainable product lines.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="form-group">
                <input type="email" placeholder="Corporate email" required />
              </div>
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div> */}
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} KanaBags LLC. Manufactured in the USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer