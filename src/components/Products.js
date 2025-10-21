const Products = () => {
    return (
      <section className="products" id="products">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1557170336-a4d03c6d434e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="product-content">
                <h3>Retail Paper Bags</h3>
                <p>Durable and stylish paper bags perfect for retail stores, boutiques, and gift shops. Available in various sizes and custom printing options.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="product-content">
                <h3>Grocery Paper Bags</h3>
                <p>Strong and reliable paper bags designed for grocery stores and markets. Reinforced handles for easy carrying of heavier items.</p>
              </div>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"}}></div>
              <div className="product-content">
                <h3>Paper Cups (Coming Soon)</h3>
                <p>Our new line of eco-friendly paper cups for hot and cold beverages. Made from sustainable materials with customizable designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Products