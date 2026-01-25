'use client';
import { useState } from 'react';

const ProcurementForm = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = {
      company: e.target.company.value,
      email: e.target.email.value,
      volume: e.target.volume.value,
      leadTime: e.target.leadTime.value,
      specs: e.target.specs.value,
      // Capturing the sample request value
      requestSample: e.target.requestSample.checked ? "YES - Free Sample Kit Requested" : "No",
    };

    const response = await fetch('/api/send-rfp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="procurement-form" className="procurement section">
      <div className="container">
        <div className="procurement-container">
          <div className="procurement-header">
            <h2>Enterprise Partnership Inquiry</h2>
            <p>Direct access to our Lorton, VA manufacturing facility for high-volume retail partners.</p>
          </div>

          {status === 'success' ? (
            <div style={{textAlign: 'center', padding: '40px'}}>
              <h3 style={{color: 'var(--primary)'}}>RFP Successfully Submitted</h3>
              <p>Our industrial sales team will review your requirements and respond within 24 business hours.</p>
            </div>
          ) : (
            <form className="procurement-form-grid" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Company Name</label>
                <input name="company" type="text" placeholder="e.g. Starbucks Regional" required />
              </div>
              <div className="form-group">
                <label>Corporate Email</label>
                <input name="email" type="email" placeholder="name@company.com" required />
              </div>
              <div className="form-group">
                <label>Monthly Volume</label>
                <select name="volume" required>
                  <option value="">Select Target Volume</option>
                  <option>100k - 500k units</option>
                  <option>500k - 1M units</option>
                  <option>1M+ units (Enterprise)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Desired Lead Time</label>
                <input name="leadTime" type="text" placeholder="e.g. 45 Days" />
              </div>

              {/* NEW: Free Sample Request Toggle */}
              <div className="form-group full-width" style={{ 
                background: '#f0fdf4', 
                padding: '15px', 
                borderRadius: '8px', 
                border: '1px solid #bbf7d0',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <input 
                  type="checkbox" 
                  name="requestSample" 
                  id="requestSample" 
                  style={{ width: '20px', height: '20px', cursor: 'pointer' }} 
                />
                <label htmlFor="requestSample" style={{ margin: 0, cursor: 'pointer', color: '#166534', fontWeight: 'bold' }}>
                  Send me a Free Sample Kit (Cups & Bags) to my corporate address
                </label>
              </div>

              <div className="form-group full-width">
                <label>Technical Specifications / Shipping Address for Samples</label>
                <textarea name="specs" rows="4" placeholder="If requesting samples, please provide your shipping address here..."></textarea>
              </div>

              <div className="full-width">
                <button type="submit" className="btn btn-enterprise" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Processing...' : 'Submit Technical RFP'}
                </button>
                {status === 'error' && <p style={{color: 'red', marginTop: '10px'}}>Error sending. Please try again.</p>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcurementForm;