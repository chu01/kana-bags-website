const About = () => {
    return (
      <section id="about">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>From Humble Beginnings to Industry Leaders</h3>
              <p>Founded in 2025, KanaBags LLC is a growing, family-owned manufacturing company dedicated to producing high-quality, eco-friendly packaging products. Established with the goal of entering the market as a reliable provider of sustainable alternatives to plastic, KanaBags strives to combine environmental responsibility with superior product performance.</p>
              <p>Our mission is to support businesses in reducing their ecological footprint by offering durable, affordable, and sustainable packaging solutions. We began with the production of paper bags and are now expanding into paper cup manufacturing, driven by the increasing demand for environmentally conscious products.</p>
              <p>As a young and ambitious company, KanaBags LLC continues to invest in innovation, quality control, and community partnerships to strengthen our presence in the market and contribute to a greener future.</p>
              <a href="#contact" className="btn">Get in Touch</a>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1587334894130-1c43e0c76ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="KanaBags Factory" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About