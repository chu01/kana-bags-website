import Image from 'next/image'

const About = () => {
    return (
      <section id="about">
        <div className="container">
          <h2 className="section-title">Our Story</h2>
          <div className="about-content">
            <div className="about-text">
            <h3>From Humble Beginnings to Global Growth</h3>
            <p>KanaBags LLC, established in 2025 in the United States, is a proud extension of <strong>Kana PLC</strong> — a well-established company founded in 2010 with operations across various parts of Africa. As a diversified industry leader, Kana PLC has built a strong reputation as a service provider and manufacturer in multiple sectors, committed to excellence and sustainable development.</p>
            <p>Building on this solid foundation, KanaBags LLC was created to focus on eco-friendly packaging solutions. As a family-owned manufacturing company, we are dedicated to producing high-quality, environmentally responsible products that serve as sustainable alternatives to plastics.</p>
            <p>Our mission is to help businesses reduce their ecological footprint by offering durable, affordable, and innovative packaging products. Starting with the production of paper bags, KanaBags LLC is now expanding into paper cup manufacturing to meet the growing global demand for sustainable packaging.</p>
            <p>With the shared values of innovation, quality, and community responsibility that define Kana PLC, KanaBags LLC is committed to advancing green manufacturing and contributing to a cleaner, more sustainable future.</p>

              <a href="#contact" className="btn">Get in Touch</a>
            </div>
            <div className="about-image">
              <Image 
                src="/images/global/about/office-building.jpg" 
                alt="Factory" 
                width={600} 
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default About