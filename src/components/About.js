const About = () => {
    return (
      <section id="about">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <div className="about-text">
              <h3>From Humble Beginnings to Industry Leaders</h3>
              <p>Founded in 2010, KanaBags LLC started as a small family-owned operation with a simple mission: to provide businesses with sustainable packaging solutions that don't compromise on quality.</p>
              <p>Our founder, John Kana, recognized the growing need for eco-friendly alternatives to plastic bags and set out to create products that would help businesses reduce their environmental footprint.</p>
              <p>Today, we've grown into a leading manufacturer of paper bags, serving clients across multiple industries. And we're excited to announce our expansion into paper cup production, offering the same commitment to quality and sustainability.</p>
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