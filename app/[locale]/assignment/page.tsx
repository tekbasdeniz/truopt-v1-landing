'use client';

import { useState } from 'react';

export default function AssignmentPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    adSpend: '',
    challenge: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/assignment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong');
      }
    } catch (error) {
      alert('Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <main style={{ maxWidth: 600, margin: '80px auto', fontFamily: 'sans-serif' }}>
        <h1>Thank you.</h1>
        <p>Your assignment has been received. We will contact you shortly.</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 600, margin: '80px auto', fontFamily: 'sans-serif' }}>
      <h1>Get Your AI Growth Assignment</h1>
      <p style={{ marginBottom: 20 }}>
        Fill out this short form to receive a tailored growth assessment.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="company" placeholder="Company Name" onChange={handleChange} />
        <input name="website" placeholder="Website URL" onChange={handleChange} />
        <input name="adSpend" placeholder="Monthly Ad Spend" onChange={handleChange} />
        <textarea name="challenge" placeholder="Biggest Growth Challenge" onChange={handleChange} />

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Assignment'}
        </button>
      </form>
    </main>
  );
}
