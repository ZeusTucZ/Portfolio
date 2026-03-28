import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const ContactMe = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: 'idle',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSendEmail = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'No se pudo enviar el mensaje.');
      }

      setForm(initialForm);
      setStatus({
        type: 'success',
        message: 'Tu mensaje fue enviado correctamente.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Ocurrió un error al enviar el mensaje.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      Contact Me
      <form onSubmit={handleSendEmail}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleOnChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleOnChange}
            required
          />
        </div>
        <div style={{ paddingTop: '20px' }}>
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleOnChange}
            required
          />
        </div>
        <div style={{ paddingTop: '20px' }}>
          <textarea
            name="message"
            rows="10"
            cols="50"
            placeholder="Message"
            value={form.message}
            onChange={handleOnChange}
            required
          />
        </div>
        <button style={{ width: '140px', height: '40px' }} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Contact Me'}
        </button>
      </form>
      {status.message ? (
        <p style={{ color: status.type === 'error' ? 'crimson' : 'green' }}>
          {status.message}
        </p>
      ) : null}
    </div>
  );
};

export default ContactMe;
