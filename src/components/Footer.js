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
            <p>Providing eco-friendly paper packaging solutions since 2010. Committed to quality, sustainability, and customer satisfaction.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#environment">Environment</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Products</h3>
            <ul className="footer-links">
              <li><a href="#">Retail Bags</a></li>
              <li><a href="#">Grocery Bags</a></li>
              <li><a href="#">Custom Printing</a></li>
              <li><a href="#">Paper Cups (Coming Soon)</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates on new products and sustainability initiatives.</p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="form-group">
                <input type="email" placeholder="Your email address" required />
              </div>
              <button type="submit" className="btn">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 KanaBags LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer