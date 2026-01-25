import Link from 'next/link' // Import Link

const Products = () => {
  return (
    <section className="products" id="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          
          {/* 1. PAPER CUPS - CLICKABLE */}
          <Link href="/products/paper-cups" className="product-card-link">
            <div className="product-card clickable-card">
              <div 
                className="product-image" 
                style={{ 
                  backgroundImage: "url('/images/global/products/paper-cup-stack-2.jpeg')" 
                }}
              ></div>
              <div className="product-content">
                <h3>Paper Cups</h3>
                <p>Our new line of eco-friendly paper cups for hot and cold beverages. Made from sustainable materials with customizable designs.</p>
                <span className="view-details">View Technical Specs →</span>
              </div>
            </div>
          </Link>

          {/* 2. RETAIL BAGS */}
          <div className="product-card">
            <div 
              className="product-image" 
              style={{ backgroundImage: "url('/images/global/products/retail-paper-bag.png')" }}
            ></div>
            <div className="product-content">
              <h3>Retail Paper Bags (Coming Soon)</h3>
              <p>Durable and stylish paper bags perfect for retail stores. Available in various sizes and custom printing options.</p>
            </div>
          </div>

          {/* 3. GROCERY BAGS */}
          <div className="product-card">
            <div 
              className="product-image" 
              style={{ backgroundImage: "url('/images/global/products/paper-bag.png')" }}
            ></div>
            <div className="product-content">
              <h3>Grocery Paper Bags</h3>
              <p>Strong and reliable paper bags designed for grocery stores. Reinforced handles for easy carrying.</p>
            </div>
          </div>
           
        </div>
      </div>
    </section>
  )
}
  
export default Products