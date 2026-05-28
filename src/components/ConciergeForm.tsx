import { motion } from 'motion/react'
import { useState } from 'react'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'rgba(12,12,14,0.04)',
  border: '1px solid rgba(12,12,14,0.1)',
  color: '#0c0c0e',
  fontSize: 11,
  letterSpacing: '0.12em',
  padding: '14px 16px',
  borderRadius: 2,
  fontFamily: 'inherit',
  textTransform: 'uppercase',
  outline: 'none',
}

const labelStyle: React.CSSProperties = {
  fontSize: 8,
  letterSpacing: '0.3em',
  color: 'rgba(12,12,14,0.5)',
  marginBottom: 6,
  display: 'block',
}

export default function ConciergeForm() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    vessel: '',
    destination: '',
    dates: '',
    requests: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)', background: 'white' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'var(--accent)' }}>PRIVATE CONCIERGE</span>
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
        </div>
        <h2
          dangerouslySetInnerHTML={{ __html: 'CHARTER A<br/>MOMENT.' }}
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#0c0c0e',
            letterSpacing: '-0.01em',
          }}
        />
      </div>

      {/* Form Card */}
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          background: 'white',
          border: '1px solid rgba(12,12,14,0.06)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          borderRadius: 4,
          padding: 'clamp(32px,5vw,56px)',
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>FULL NAME</label>
              <input
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>EMAIL ADDRESS</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div>
              <label style={labelStyle}>PHONE NUMBER</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>PREFERRED VESSEL</label>
              <select
                name="vessel"
                value={form.vessel}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value=""></option>
                <option value="OCEAN ECLIPSE">OCEAN ECLIPSE</option>
                <option value="BLACK SOVEREIGN">BLACK SOVEREIGN</option>
                <option value="AZURE HORIZON">AZURE HORIZON</option>
                <option value="NO PREFERENCE">NO PREFERENCE</option>
              </select>
            </div>
          </div>

          {/* Destination */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>DESTINATION OR REGION</label>
            <input
              name="destination"
              value={form.destination}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {/* Preferred Dates */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>PREFERRED DATES</label>
            <input
              name="dates"
              value={form.dates}
              onChange={handleChange}
              placeholder="PLEASE SPECIFY OR NOTE FLEXIBILITY"
              style={inputStyle}
            />
          </div>

          {/* Additional Requests */}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>ADDITIONAL REQUESTS</label>
            <textarea
              name="requests"
              value={form.requests}
              onChange={handleChange}
              rows={4}
              placeholder="SHARE ANY PARTICULAR WISHES OR REQUIREMENTS..."
              style={{ ...inputStyle, resize: 'vertical' }}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{
              width: '100%',
              marginTop: 8,
              background: 'var(--accent)',
              color: 'white',
              padding: 16,
              fontSize: 10,
              letterSpacing: '0.25em',
              borderRadius: 2,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
            }}
          >
            SUBMIT REQUEST
          </motion.button>

          {/* Confidentiality */}
          <p
            style={{
              textAlign: 'center',
              marginTop: 16,
              fontSize: 8,
              letterSpacing: '0.2em',
              color: 'rgba(12,12,14,0.35)',
            }}
          >
            ALL ENQUIRIES ARE HANDLED WITH THE STRICTEST CONFIDENCE.
          </p>
        </form>
      </div>
    </section>
  )
}
