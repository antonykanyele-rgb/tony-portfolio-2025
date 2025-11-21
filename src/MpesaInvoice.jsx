import { useState, useRef } from 'react'

function MpesaInvoice({ darkMode, theme, onBack }) {
  const [business, setBusiness] = useState({
    name: '',
    phone: '',
    email: '',
    mpesaType: 'till',
    mpesaNumber: ''
  })
  
  const [client, setClient] = useState({
    name: '',
    email: '',
    phone: ''
  })
  
  const [items, setItems] = useState([
    { description: '', quantity: 1, price: 0 }
  ])
  
  const [invoiceNumber, setInvoiceNumber] = useState('INV-' + Date.now().toString().slice(-6))
  const [showPreview, setShowPreview] = useState(false)
  
  const invoiceRef = useRef(null)

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, price: 0 }])
  }

  const removeItem = (index) => {
    if (items.length > 1) {
      setItems(items.filter((_, i) => i !== index))
    }
  }

  const updateItem = (index, field, value) => {
    const newItems = [...items]
    newItems[index][field] = field === 'description' ? value : Number(value)
    setItems(newItems)
  }

  const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.price), 0)
  const total = subtotal

  const handlePrint = () => {
    const printContent = invoiceRef.current.innerHTML
    const printWindow = window.open('', '', 'width=800,height=600')
    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice ${invoiceNumber}</title>
          <style>
            body { font-family: system-ui, sans-serif; padding: 2rem; color: #0f172a; }
            .invoice-box { max-width: 800px; margin: 0 auto; }
            table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
            th, td { padding: 0.75rem; text-align: left; border-bottom: 1px solid #e2e8f0; }
            th { background: #f8fafc; font-weight: 600; }
            .text-right { text-align: right; }
            .mpesa-box { background: #22c55e; color: white; padding: 1.5rem; border-radius: 0.5rem; margin-top: 2rem; }
            .header { display: flex; justify-content: space-between; margin-bottom: 2rem; }
            .total-row { font-weight: bold; font-size: 1.25rem; }
          </style>
        </head>
        <body>${printContent}</body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }

  const inputStyle = {
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: `1px solid ${theme.cardBorder}`,
    background: theme.input,
    color: theme.text,
    fontSize: '0.95rem',
    width: '100%',
    boxSizing: 'border-box'
  }

  const labelStyle = {
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '0.25rem',
    display: 'block',
    color: theme.textMuted
  }

  if (showPreview) {
    return (
      <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem' }}>
          <button onClick={() => setShowPreview(false)} style={{
            padding: '0.75rem 1.5rem',
            background: theme.card,
            border: `1px solid ${theme.cardBorder}`,
            borderRadius: '0.5rem',
            cursor: 'pointer',
            color: theme.text
          }}>
            ← Edit Invoice
          </button>
          <button onClick={handlePrint} style={{
            padding: '0.75rem 1.5rem',
            background: theme.accent,
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            color: '#000',
            fontWeight: 600
          }}>
            Download / Print PDF
          </button>
        </div>

        <div ref={invoiceRef} style={{
          background: '#ffffff',
          color: '#0f172a',
          padding: '3rem',
          borderRadius: '0.5rem',
          border: `1px solid ${theme.cardBorder}`
        }}>
          <div className="header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{business.name || 'Your Business'}</h1>
              <p style={{ color: '#64748b', margin: '0.25rem 0' }}>{business.phone}</p>
              <p style={{ color: '#64748b', margin: '0.25rem 0' }}>{business.email}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#0ea5e9', margin: 0 }}>INVOICE</h2>
              <p style={{ color: '#64748b', margin: '0.5rem 0' }}>{invoiceNumber}</p>
              <p style={{ color: '#64748b', margin: '0.25rem 0' }}>{new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div style={{ marginBottom: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '0.5rem' }}>
            <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Bill To:</p>
            <p style={{ margin: '0.25rem 0' }}>{client.name || 'Client Name'}</p>
            <p style={{ color: '#64748b', margin: '0.25rem 0' }}>{client.email}</p>
            <p style={{ color: '#64748b', margin: '0.25rem 0' }}>{client.phone}</p>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #e2e8f0' }}>Description</th>
                <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0' }}>Qty</th>
                <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0' }}>Price (KES)</th>
                <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '2px solid #e2e8f0' }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>{item.description || '-'}</td>
                  <td style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>{item.quantity}</td>
                  <td style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>{item.price.toLocaleString()}</td>
                  <td style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #e2e8f0' }}>{(item.quantity * item.price).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" style={{ padding: '1rem 0.75rem', textAlign: 'right', fontWeight: 700, fontSize: '1.25rem' }}>Total:</td>
                <td style={{ padding: '1rem 0.75rem', textAlign: 'right', fontWeight: 700, fontSize: '1.25rem', color: '#0ea5e9' }}>KES {total.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>

          <div style={{ background: '#22c55e', color: 'white', padding: '1.5rem', borderRadius: '0.5rem', marginTop: '2rem' }}>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem' }}>Payment via M-Pesa</h3>
            <p style={{ margin: '0.25rem 0', fontSize: '1rem' }}>
              {business.mpesaType === 'till' ? 'Buy Goods Till Number' : 'Paybill Number'}: <strong>{business.mpesaNumber || 'XXXXXX'}</strong>
            </p>
            {business.mpesaType === 'paybill' && (
              <p style={{ margin: '0.25rem 0', fontSize: '1rem' }}>Account Number: <strong>{invoiceNumber}</strong></p>
            )}
            <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.9rem', opacity: 0.9 }}>
              Please use invoice number as reference when paying.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <button onClick={onBack} style={{
        padding: '0.5rem 1rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: theme.accent,
        fontSize: '0.95rem',
        marginBottom: '1rem'
      }}>
        ← Back to Portfolio
      </button>

      <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>M-Pesa Invoice Generator</h1>
      <p style={{ color: theme.textMuted, marginBottom: '2rem' }}>Create professional invoices with M-Pesa payment details</p>

      {/* Business Details */}
      <div style={{
        background: theme.card,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: '1rem',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Your Business Details</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <label style={labelStyle}>Business Name</label>
            <input
              type="text"
              placeholder="Your Business Name"
              value={business.name}
              onChange={(e) => setBusiness({...business, name: e.target.value})}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input
              type="tel"
              placeholder="0712 345 678"
              value={business.phone}
              onChange={(e) => setBusiness({...business, phone: e.target.value})}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              value={business.email}
              onChange={(e) => setBusiness({...business, email: e.target.value})}
              style={inputStyle}
            />
          </div>
        </div>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', marginTop: '1rem' }}>
          <div>
            <label style={labelStyle}>M-Pesa Type</label>
            <select
              value={business.mpesaType}
              onChange={(e) => setBusiness({...business, mpesaType: e.target.value})}
              style={inputStyle}
            >
              <option value="till">Buy Goods (Till)</option>
              <option value="paybill">Paybill</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>{business.mpesaType === 'till' ? 'Till Number' : 'Paybill Number'}</label>
            <input
              type="text"
              placeholder={business.mpesaType === 'till' ? '123456' : '888888'}
              value={business.mpesaNumber}
              onChange={(e) => setBusiness({...business, mpesaNumber: e.target.value})}
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Client Details */}
      <div style={{
        background: theme.card,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: '1rem',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Client Details</h2>
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <label style={labelStyle}>Client Name</label>
            <input
              type="text"
              placeholder="Client or Company Name"
              value={client.name}
              onChange={(e) => setClient({...client, name: e.target.value})}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Client Email</label>
            <input
              type="email"
              placeholder="client@email.com"
              value={client.email}
              onChange={(e) => setClient({...client, email: e.target.value})}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Client Phone</label>
            <input
              type="tel"
              placeholder="0712 345 678"
              value={client.phone}
              onChange={(e) => setClient({...client, phone: e.target.value})}
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Line Items */}
      <div style={{
        background: theme.card,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: '1rem',
        padding: '1.5rem',
        marginBottom: '1.5rem'
      }}>
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1rem' }}>Invoice Items</h2>
        
        {items.map((item, index) => (
          <div key={index} style={{
            display: 'grid',
            gap: '0.75rem',
            gridTemplateColumns: '1fr auto auto auto',
            alignItems: 'end',
            marginBottom: '0.75rem',
            paddingBottom: '0.75rem',
            borderBottom: index < items.length - 1 ? `1px solid ${theme.cardBorder}` : 'none'
          }}>
            <div>
              <label style={labelStyle}>Description</label>
              <input
                type="text"
                placeholder="Service or product"
                value={item.description}
                onChange={(e) => updateItem(index, 'description', e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={{ width: '80px' }}>
              <label style={labelStyle}>Qty</label>
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={{ width: '120px' }}>
              <label style={labelStyle}>Price (KES)</label>
              <input
                type="number"
                min="0"
                value={item.price}
                onChange={(e) => updateItem(index, 'price', e.target.value)}
                style={inputStyle}
              />
            </div>
            <button
              onClick={() => removeItem(index)}
              style={{
                padding: '0.75rem',
                background: '#fee2e2',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                color: '#dc2626'
              }}
            >
              ✕
            </button>
          </div>
        ))}

        <button onClick={addItem} style={{
          padding: '0.75rem 1.5rem',
          background: 'transparent',
          border: `1px dashed ${theme.cardBorder}`,
          borderRadius: '0.5rem',
          cursor: 'pointer',
          color: theme.textMuted,
          width: '100%',
          marginTop: '0.5rem'
        }}>
          + Add Item
        </button>

        <div style={{
          marginTop: '1.5rem',
          paddingTop: '1rem',
          borderTop: `2px solid ${theme.cardBorder}`,
          textAlign: 'right'
        }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            Total: <span style={{ color: theme.accent }}>KES {total.toLocaleString()}</span>
          </span>
        </div>
      </div>

      <button onClick={() => setShowPreview(true)} style={{
        padding: '1rem 2rem',
        background: theme.accent,
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        color: '#000',
        fontWeight: 600,
        fontSize: '1rem',
        width: '100%'
      }}>
        Preview Invoice →
      </button>
    </div>
  )
}

export default MpesaInvoice
