'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css'; // Required for flags and layout

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

interface ContactFormProps {
  inputClass?: string;
  buttonClass?: string;
  hideMessageField?: boolean;
  defaultMessage?: string;
}

export default function ContactForm({
  inputClass = 'footer-input rounded-0 mb-2',
  buttonClass = 'btn theme-bg-light text-dark mb-3',
  hideMessageField = false,
  defaultMessage = '',
}: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    message: defaultMessage,
  });

  const [loading, setLoading] = useState(false);
  const [note, setNote] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /** * Specific handler for react-international-phone 
   * since it returns a string value directly.
   */
  const handlePhoneChange = (phone: string) => {
    setForm((prev) => ({ ...prev, mobile: phone }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.mobile) {
      setNote('All fields are required!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setNote('Enter a valid email address!');
      return;
    }

    /**
     * Note: Strict 10-digit validation is removed here to allow 
     * international formats, but we check if it's reasonably long.
     */
    if (form.mobile.length < 10) {
      setNote('Please enter a valid phone number!');
      return;
    }

    setLoading(true);
    setNote('Please wait...');
    setSuccess(false);

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.mobile,
      message: form.message || 'interested',
      subject: 'Enquire From Eara Group - Website',
      form_source: 'Eara Group - Website',
    };

    try {
      const res = await fetch(
        'https://earagroup.com/emailer/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      const text = await res.text();

      if (text.trim() === 'OK') {
        setSuccess(true);
        setNote('Email sent successfully!');
        setForm({ name: '', email: '', mobile: '', message: defaultMessage });
      } else {
        setNote(text || 'Error sending email.');
      }
    } catch (err) {
      console.error(err);
      setNote('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className={inputClass}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className={inputClass}
        required
      />

      {/* International Phone Input Integration */}
      <div className="phone-input-wrapper ">
        <PhoneInput
          defaultCountry="in"
          value={form.mobile}
          onChange={handlePhoneChange}
          inputClassName={inputClass}
          className="w-100"
          inputStyle={{
            width: '100%',
            height: '45px',   
          }}
          style={{
            // CSS Variables to force consistency with your existing styles
            '--react-international-phone-border-radius': '0px',
            '--react-international-phone-height': '45px', // Matches standard Bootstrap/Input height
            '--react-international-phone-border-color': '#dee2e6',
          } as React.CSSProperties}
        />
      </div>

      {!hideMessageField && (
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className={inputClass}
        />
      )}

      <div className="text-center">
        <button type="submit" className={buttonClass} disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </div>

      {note && (
        <p className={`my-2 ${success ? 'text-success' : 'text-danger'}`} style={{ fontWeight: 600 }}>
          {note}
        </p>
      )}
    </form>
  );
}