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

export default function ChannelPartner() {
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
                       {/* <div className="col-lg-6 d-flex align-items-center">
                            <div>
                                <p className='lh-lg'>
                                    At EARA Group, we believe that great collaborations build greater success stories. As an Eara Group Channel Partner, you become an integral part of our vision - shaping communities, driving innovation, and redefining excellence in real estate.   </p>
                                <p className='lh-lg'> If you’re looking to grow as a trusted real estate channel partner in Bangalore, this is your opportunity to join a brand built on trust, transparency, and long-term value. Together, we’ll unlock new opportunities, create lasting value, and grow stronger as one team with a shared purpose. </p>

                                <p className='lh-lg'>
                                    Partner with us and be a part of a journey that’s truly transformative.

                                </p>
                            </div>
                        </div> */}
                     <div className="col-lg-4 p-4">
  <div className="qr-hover-box">

    <Image
      src="/img/QR.png"
      className="img-fluid"
      width={1024}
      height={1024}
      alt="channel partner qr"
    />

    <div className="qr-hover-overlay">
      <button
        className="qr-hover-btn"
        onClick={() => {
          window.location.href =
            "https://eara.tranquilserver.in/agentsform/mbaddagent/1";
        }}
      >
        Register Now
      </button>
    </div>

  </div>
</div>

                       
                    </div>
                </div>
            </section>
        </>
    );
}