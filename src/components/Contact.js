import React, { useState } from 'react';
import { supabase } from '../integrations/supabase/client.js';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const { error } = await supabase.from('ContactMessages').insert([
        { name: form.name, email: form.email, message: form.message }
      ]);
      if (error) throw error;
      setStatus('Message sent! Thank you.');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Message
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default Contact; 