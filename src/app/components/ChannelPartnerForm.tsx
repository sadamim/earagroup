'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//import "./../career.css";

// Define a type for the form data to improve type safety
interface ChannelPartnerFormData {
    cpFirmName: string;
    cpFirmEmail: string;
    cpFirmMobile: string;
    cpAgencyReraNumber: string;
    prospectName: string;
    prospectEmail: string;
    prospectMobileNumber: string;
    projectInterestedIn: string;
    message: string; // Hidden message/default
}

export default function ChannelPartnerForm() {
    const [formData, setFormData] = useState<ChannelPartnerFormData>({
        cpFirmName: '',
        cpFirmEmail: '',
        cpFirmMobile: '',
        cpAgencyReraNumber: '',
        prospectName: '',
        prospectEmail: '',
        prospectMobileNumber: '',
        projectInterestedIn: '',
        message: 'Interested in Channel Partnership Referral', // Updated default message
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [note, setNote] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setNote('');

        // --- Validation ---
        // Basic required fields (assuming all top fields are mandatory for submission)
        if (!formData.cpFirmName || !formData.cpFirmEmail || !formData.cpFirmMobile || !formData.prospectName || !formData.prospectEmail || !formData.prospectMobileNumber) {
            setNote('Please fill in all required fields (CP/Firm and Prospect details).');
            setLoading(false);
            return;
        }

        // Email validation for both CP and Prospect
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.cpFirmEmail) || !emailRegex.test(formData.prospectEmail)) {
            setNote('Enter a valid email address for both Channel Partner and Prospect!');
            setLoading(false);
            return;
        }

        // Phone validation (assuming CP/Firm Mobile is a 10-digit Indian number as per original logic)
        // Prospect mobile is often handled with country code in UI, but simple 10-digit check for CP mobile is retained.
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.cpFirmMobile)) {
            setNote('Channel Partner Mobile number must be 10 digits!');
            setLoading(false);
            return;
        }

        // --- Submission Logic ---
        try {
            const payload = {
                // Channel Partner / Firm Details
                name: formData.cpFirmName,
                email: formData.cpFirmEmail,
                phone: formData.cpFirmMobile,
                cpAgencyReraNumber: formData.cpAgencyReraNumber,
                // Prospect Details
                prospectName: formData.prospectName,
                prospectEmail: formData.prospectEmail,
                prospectMobileNumber: formData.prospectMobileNumber,
                projectInterestedIn: formData.projectInterestedIn,

                // Standard fields
                // message: `CP RERA: ${formData.cpAgencyReraNumber}. Prospect Project Interest: ${formData.projectInterestedIn}.`, // Combine non-input fields into message
                subject: 'Eara Group - New Channel Partner Referral',
                form_source: 'Eara Group - Channel Partner Referral Form',
                additionalRecipients: ['sales@earagroup.com'],
            };

            const response = await fetch(
                'https://earagroup.com/channel-emailer/',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                }
            );

            const resultText = await response.text();

            if (resultText.trim().toLowerCase() === 'ok') {
                setSuccess(true);
                // Clear all form data fields
                setFormData({
                    cpFirmName: '',
                    cpFirmEmail: '',
                    cpFirmMobile: '',
                    cpAgencyReraNumber: '',
                    prospectName: '',
                    prospectEmail: '',
                    prospectMobileNumber: '',
                    projectInterestedIn: '',
                    message: 'Interested in Channel Partnership Referral'
                });
                setNote('Referral submitted successfully!');
            } else {
                setNote(resultText || 'Error submitting referral. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setNote('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Banner Section (omitted for brevity, assume it remains the same) */}
            <div id="carouselExampleDark" className="header-section ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container">
                            <Image
                                src="/images/Channel-Partner.avif"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece"
                                alt="masterpiece"
                            // style={{objectPosition:"center"}}
                            />
                            <div className="overlay2 ">
                                <div className="text-white d-block" style={{ marginTop: "-120px" }}>
                                    {" "}
                                    <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                                        {" "}
                                        Channel Partner
                                    </h1>
                                    {/* <p className="text-center d-block fs-6 ">
                    <Link
                      className="text-white text-decoration-none"
                      href="/"
                    >
                      {" "}
                      Home
                    </Link>{" "}
                    / Channel Partner{" "}
                  </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <section className="bg-light py-5 theme-bg-light channel section">
                <div className="container">
                    <div className="text-center mb-5 theme-color-dark">
                        <h2 className="mb-2">Become Our Channel Partner</h2>
                        <p className="theme-color-dark text-center">
                            Partner with EARA Group and be part of a visionary journey that drives innovation and success.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                       
                        <div className="col-lg-6">
                            <div className="px-3 px-md-4 py-4 border rounded shadow-sm bg-white">
                                <h5 className="text-uppercase mb-4 theme-color-dark" style={{ color: '#282563' }}>
                                    Partner With Us
                                </h5>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        {/* CP/Firm Details */}
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="cpFirmName" className="form-label visually-hidden">CP/Firm Name</label>
                                            <input
                                                type="text"
                                                name="cpFirmName"
                                                id="cpFirmName"
                                                className="form-control py-2"
                                                placeholder="CP/Firm Name"
                                                value={formData.cpFirmName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        {/* Prospect Name */}
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="prospectName" className="form-label visually-hidden">Prospect Name</label>
                                            <input
                                                type="text"
                                                name="prospectName"
                                                id="prospectName"
                                                className="form-control py-2"
                                                placeholder="Prospect Name"
                                                value={formData.prospectName}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* CP/Firm Email */}
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="cpFirmEmail" className="form-label visually-hidden">CP/Firm Email</label>
                                            <input
                                                type="email"
                                                name="cpFirmEmail"
                                                id="cpFirmEmail"
                                                className="form-control py-2"
                                                placeholder="CP/Firm Email"
                                                value={formData.cpFirmEmail}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        {/* Prospect Email */}
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="prospectEmail" className="form-label visually-hidden">Prospect Email</label>
                                            <input
                                                type="email"
                                                name="prospectEmail"
                                                id="prospectEmail"
                                                className="form-control py-2"
                                                placeholder="Prospect Email"
                                                value={formData.prospectEmail}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* CP/Firm Mobile */}
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="cpFirmMobile" className="form-label visually-hidden">CP/Firm Mobile</label>
                                            <input
                                                type="text"
                                                name="cpFirmMobile"
                                                id="cpFirmMobile"
                                                className="form-control py-2"
                                                placeholder="CP/Firm Mobile"
                                                value={formData.cpFirmMobile}
                                                onChange={handleChange}
                                                required
                                                // Pattern for 10-digit number
                                                pattern="\d{10}"
                                                title="Must be a 10-digit number"
                                            />
                                        </div>
                                        {/* Prospect Mobile Number (with country code placeholder/styling from image) */}
                                        <div className="col-md-6 form-group mb-3 d-flex">
                                            {/* Simplified country code representation from image */}
                                            <div className="input-group">
                                                <span className="input-group-text py-2" style={{ backgroundColor: '#f8f9fa', borderRight: 'none' }}>+91</span>
                                                <label htmlFor="prospectMobileNumber" className="form-label visually-hidden">Prospect Mobile Number</label>
                                                <input
                                                    type="text"
                                                    name="prospectMobileNumber"
                                                    id="prospectMobileNumber"
                                                    className="form-control py-2"
                                                    placeholder="Prospect Mobile Number"
                                                    value={formData.prospectMobileNumber}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* CP Agency Rera Number */}
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="cpAgencyReraNumber" className="form-label visually-hidden">CP Agency Rera Number</label>
                                            <input
                                                type="text"
                                                name="cpAgencyReraNumber"
                                                id="cpAgencyReraNumber"
                                                className="form-control py-2"
                                                placeholder="CP Agency Rera Number"
                                                value={formData.cpAgencyReraNumber}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        {/* Project Interested In (Dropdown) */}
                                        <div className="col-md-6 form-group mb-3">
                                            <label htmlFor="projectInterestedIn" className="form-label visually-hidden">Project Interested In</label>
                                            <select
                                                name="projectInterestedIn"
                                                id="projectInterestedIn"
                                                className="form-select py-2"
                                                value={formData.projectInterestedIn}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Project Interested In</option>
                                                <option value="Amidst Nature">Amidst Nature</option>

                                            </select>
                                        </div>

                                        {/* The original text area is now effectively used for the hidden/default message
                                            but can be left here as an optional message field if desired, or removed. */}
                                        {/* <div className="col-12 form-group mb-3">
                                            <label htmlFor="message" className="form-label visually-hidden">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                className="form-control"
                                                placeholder="Additional Notes (Optional)"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div> */}

                                    </div>

                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-primary text-white py-2 px-4 mt-0"
                                            disabled={loading}
                                        >
                                            {loading ? "Submitting..." : "Submit Referral"}
                                        </button>
                                    </div>

                                    {note && <p className={`mt-2 text-center ${success ? 'text-success' : 'text-danger'}`} style={{ fontWeight: 600 }}>{note}</p>}
                                    {success && <p className="text-success mt-2 text-center">✅ Thank you! Your referral has been submitted.</p>}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}