'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import './../career.css'; 

export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: '',
    post1: 'Sales Manager',
    experience: 'Fresher',
    msg: '',
    fileatt: null,
  });

  const [statusMessage, setStatusMessage] = useState(''); // ✅ To show response message
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>(''); // ✅ Success/Error state

  const reasons = [
    'Culture of Integrity',
    'Innovation-First Mindset',
    'Impact-Driven Work',
    'Trusted Legacy',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) form.append(key, value);
    });

    try {
      const response = await fetch('https://earagroup.com/send-application/', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        const errorResult = await response.json().catch(() => ({ message: 'Server error occurred.' }));
        throw new Error(`Submission failed: ${response.status} - ${errorResult.message}`);
      }

      const result = await response.json();

      // ✅ Show success message
      setStatusMessage(result.message || 'Form submitted successfully!');
      setStatusType('success');

      // ✅ Reset form fields
      setFormData({
        name: '',
        email: '',
        city: '',
        phone: '',
        post1: 'Sales Manager',
        experience: 'Fresher',
        msg: '',
        fileatt: null,
      });

      // Optional: Hide message after few seconds
      setTimeout(() => {
        setStatusMessage('');
        setStatusType('');
      }, 5000);
    } catch (err) {
      console.error('Submission Error:', err);
      setStatusMessage('Error submitting form. Please try again later.');
      setStatusType('error');
    }
  };

  return (
    <>
      {/* Banner */}
      <div id="carouselExampleDark" className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image 
                src="/images/Career-header.avif" 
                height={2880} 
                width={1920} 
                className="img-fluid masterpiece" 
                alt="Career Banner" 
              />
              <div className="overlay2" style={{ marginTop: "-120px" }}>
                <div className="text-white text-center">
                  <h1 className="fs-1 mb-0 text-uppercase">Career</h1>
                  {/* <p className="px-md-0 px-3">Explore exciting job openings in Eara Group and become part of a purpose-driven future.</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Career Section */}
      <section className="bg-light py-5 theme-bg-light career-section">
        <div className="container">
          <div className="text-center mb-5 theme-color-dark">
            <h2 className="mb-2">Build the Future with EARA Group</h2>
            <span className="theme-color-dark">
              Be part of a mission where values lead, ideas thrive, and growth is a shared journey.
            </span>
          </div>

          <div className="row align-items-center">
            {/* Why Join */}
            <div className="col-lg-6 mb-4">
              <h2 className="theme-color-dark mb-4">
                Why Join <span className="text-dark fw-bold">EARA</span> Group?
              </h2>
              <div className="row">
                {reasons.map((reason) => (
                  <div key={reason} className="col-12 px-2 mb-3 ps-md-4 ps-5">
                    <div className="row px-1">
                      <div className="col-md-10 col-10 px-0">  
                        <FaCheckCircle className="text-color-accent me-2 text-dark" /> 
                        <span className="text-black text">{reason}</span> 
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mb-4 theme-color-dark">
                At EARA Group, we’re building more than a brand — we’re growing a culture rooted in purpose, innovation, and integrity.
              </p>
            </div>

            {/* Job Form */}
            <div className="col-lg-6 mb-5">
              <div className="px-3 px-md-4 py-4 border rounded shadow-sm bg-white">
                <h5 className="text-uppercase mb-3 theme-color-dark">APPLY FOR YOUR JOB</h5>

                {/* ✅ Status Message */}
                {statusMessage && (
                  <div
                    className={`alert ${
                      statusType === 'success' ? 'alert-success' : 'alert-danger'
                    } py-2`}
                  >
                    {statusMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                    {[
                      ['name', 'Name', 'text', 'Name'],
                      ['email', 'Email address', 'email', 'Email'],
                      ['city', 'City', 'text', 'City'],
                      ['phone', 'Phone Number', 'text', 'Mobile No.'],
                    ].map(([name, label, type, placeholder]) => (
                      <div className="form-group col-md-6" key={name}>
                        <input
                          type={type}
                          name={name}
                          value={formData[name]}
                          className="form-control mb-3 py-2"
                          onChange={handleChange}
                          required
                          placeholder={placeholder}
                        />
                      </div>
                    ))}

                    <div className="form-group col-md-12">
                      <select
                        name="experience"
                        className="form-control mb-3 py-2"
                        onChange={handleChange}
                        value={formData.experience}
                      >
                        <option value="Fresher">Fresher</option>
                        <option value="1-2 Years">1-2 Years</option>
                        <option value="2-5 Years">2-5 Years</option>
                        <option value="5-7 Years">5-7 Years</option>
                        <option value="7-10 Years">7-10 Years</option>
                      </select>
                    </div>

                    <div className="form-group col-md-12">
                      <textarea
                        name="msg"
                        value={formData.msg}
                        className="form-control mb-3 py-2"
                        onChange={handleChange}
                        required
                        placeholder="Description"
                      ></textarea>
                    </div>

                    <div className="form-group col-md-12">
                      <input
                        type="file"
                        name="fileatt"
                        className="form-control mb-3 py-2"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="text-center col-md-12">
                      <button type="submit" className="btn btn-primary py-2 px-4 mt-2">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
