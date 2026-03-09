'use client';

import { useState, useEffect } from 'react';

interface FooterModalFormProps {
 autoShowTime?: number; // time in ms for auto popup
 redirectUrl?: string;   // optional redirect after success
}

export default function FooterModalForm({ autoShowTime = 3500, redirectUrl }: FooterModalFormProps) {
 const [show, setShow] = useState(false);
 const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
 const [note, setNote] = useState<string | null>(null);
 const [submitting, setSubmitting] = useState(false);

 // Auto popup modal
 useEffect(() => {
  const timer = setInterval(() => setShow(true), autoShowTime);
  return () => clearTimeout(timer);
 }, [autoShowTime]);

 // Stop modal click propagation
 const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation();

 const handleClose = () => {
  setShow(false);
  setNote(null);
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 // Validation
 const validateForm = () => {
  let isValid = true;
  if (!formData.name.match(/^[a-zA-Z ]+$/)) {
   setNote('Name must only contain letters and spaces.');
   isValid = false;
  } else if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
   setNote('Please enter a valid email address.');
   isValid = false;
  } else if (!formData.phone.match(/^\d{10}$/)) {
   setNote('Phone number must be 10 digits.');
   isValid = false;
  } else {
   setNote(null);
  }
  return isValid;
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  setSubmitting(true);
  setNote('Please wait...');

  const payload = {
   name: formData.name,
   email: formData.email,
   phone: formData.phone,
   message: formData.message || 'interested',
   subject: 'Enquire From Eara Group - Website',
   form_source: 'Eara Group - Website',

   additionalRecipients: ['sales@earagroup.com'],
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
   const msg = await res.text();

   if (msg === 'OK') {
    setNote('Email Sent Successfully!');
    setFormData({ name: '', email: '', phone: '', message: '' });
    if (redirectUrl) {
     setTimeout(() => (window.location.href = redirectUrl), 2000);
    }
   } else {
    setNote(msg);
   }
  } catch (error) {
   setNote('Error sending email!');
  } finally {
   setSubmitting(false);
  }
 };

 return (
  <>
   {/* <button className="btn btn-primary" onClick={() => setShow(true)}>
    Contact Us
   </button> */}

   {show && (
    <div
     className="modal fade show d-block"
     tabIndex={-1}
     style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
     onClick={handleClose}
    >
     <div className="modal-dialog modal-dialog-centered" onClick={stopPropagation}>
      <div className="modal-content theme-bg-dark">
       <div className="modal-header">
        <h5 className="modal-title theme-color-light">Get in Touch</h5>
        <button type="button" className="btn-close theme-bg-light" onClick={handleClose}></button>
       </div>
       <div className="modal-body">
        {note && <p style={{ color: note.includes('Error') ? 'red' : 'green', fontWeight: 600 }}>{note}</p>}
        <form onSubmit={handleSubmit}>
         <div className="mb-1">
          {/* <label className="form-label">Name</label> */}
          <input
           type="text"
           name="name"
           placeholder='Name'
           className="form-control"
           value={formData.name}
           onChange={handleChange}
           required
           disabled={submitting}
          />
         </div>
         <div className="mb-1">
          {/* <label className="form-label">Email</label> */}
          <input
           type="email"
           name="email"
           placeholder='Email'
           className="form-control"
           value={formData.email}
           onChange={handleChange}
           required
           disabled={submitting}
          />
         </div>
         <div className="mb-1">
          {/* <label className="form-label">Phone</label> */}
          <input
           type="tel"
           name="phone"
           placeholder='Phone'
           className="form-control"
           value={formData.phone}
           onChange={handleChange}
           required
           disabled={submitting}
          />
         </div>
         <div className="mb-1">
          {/* <label className="form-label">Message</label> */}
          <textarea
           name="message"
           placeholder='Message'
           className="form-control"
           value={formData.message}
           onChange={handleChange}
           rows={3}
           disabled={submitting}
          ></textarea>
         </div>
         <div className='text-center'>
          <button type="submit" className="btn btn-dark" disabled={submitting}>
           {submitting ? 'Please Wait...' : 'Submit'}
          </button>
         </div>

        </form>
       </div>
      </div>
     </div>
    </div>
   )}
  </>
 );
}
