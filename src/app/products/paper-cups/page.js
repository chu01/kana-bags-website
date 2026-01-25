import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PaperCupPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '120px 0 60px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
            <div>
               <img src="/images/global/products/paper-cup-stack-2.jpeg" alt="Paper Cups" style={{ borderRadius: '12px', width: '100%' }} />
            </div>
            <div>
              <h1 style={{ color: '#1e3932', fontSize: '2.5rem' }}>Premium Industrial Paper Cups</h1>
              <p style={{ fontSize: '1.2rem', margin: '20px 0', color: '#666' }}>
                Engineered for high-volume QSR (Quick Service Restaurant) environments. Our cups feature superior heat retention and eco-friendly linings.
              </p>
              
              <h3 style={{ marginTop: '30px' }}>Technical Specifications</h3>
              <table className="fact-table" style={{ marginTop: '10px' }}>
                <tbody>
                  <tr><td><strong>Available Sizes</strong></td><td>8oz, 12oz, 16oz, 20oz</td></tr>
                  <tr><td><strong>Material</strong></td><td>FSC-Certified Premium Paperboard</td></tr>
                  <tr><td><strong>Lining Options</strong></td><td>Aqueous Coating or PLA (Compostable)</td></tr>
                  <tr><td><strong>Lid Compatibility</strong></td><td>Universal 90mm fitment</td></tr>
                  <tr><td><strong>Customization</strong></td><td>Up to 6-color Flexographic Printing</td></tr>
                </tbody>
              </table>

              <div style={{ marginTop: '40px' }}>
                <a href="/#procurement-form" className="btn">Request Sample Kit</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}