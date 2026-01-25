const Hero = () => {
  return (
    <section className="hero bg-slate-50 py-20" id="home">
      <div className="container mx-auto px-6 text-center lg:text-left flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <span className="text-green-700 font-bold tracking-widest uppercase text-sm">Industrial Grade Packaging</span>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mt-4 leading-tight">
            Scalable Sustainable Packaging for <span className="text-green-700">Global Brands.</span>
          </h1>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl">
            Kanabags LLC provides high-capacity, FSC-certified manufacturing for paper cups and retail bags. Engineered in Lorton, VA, for the world's leading coffee and retail chains.
          </p>
          <div className="hero-buttons mt-10 flex gap-4">
            <a href="#procurement-form" className="btn bg-green-700 text-white px-8 py-4 rounded-md font-bold hover:bg-green-800 transition">
              Request Enterprise Quote
            </a>
            <a href="#products" className="btn-secondary border-2 border-slate-900 px-8 py-4 rounded-md font-bold hover:bg-slate-900 hover:text-white transition">
              View Catalog
            </a>
          </div>
        </div>
        
        {/* Visual proof: You can put a high-res image of your machines or products here */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="rounded-xl overflow-hidden shadow-2xl bg-white p-2">
             <img src="/factory-production.jpg" alt="Kanabags Manufacturing" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero