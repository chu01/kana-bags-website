'use client';
import { useState } from 'react';

const ProcurementForm = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const formData = {
      company: e.target.company.value,
      email: e.target.email.value,
      volume: e.target.volume.value,
      leadTime: e.target.leadTime.value,
      specs: e.target.specs.value,
    };

    const response = await fetch('/api/send-rfp', {
      method: 'POST',
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
              <div className="form-group full-width">
                <label>Technical Specifications</label>
                <textarea name="specs" rows="4" placeholder="Detail sizing, GSM, and custom branding needs..."></textarea>
              </div>
              <div className="full-width">
                <button type="submit" className="btn btn-enterprise" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Sending...' : 'Submit Technical RFP'}
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