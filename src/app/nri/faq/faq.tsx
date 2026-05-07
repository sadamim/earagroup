'use client';

import Image from "next/image";
import Link from "next/link";

export default function NriFaq() {
  return (
    <>
      {/* Banner Section */}
      <div className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/NRI-faq.webp"
                width={1920}
                height={800}
                className="img-fluid masterpiece"
                alt="NRI FAQ"
              />

              <div className="overlay2">
                <div className="text-white d-block" style={{ marginTop: "-120px" }}>
                  <h1 className="text-center d-block fs-1 mb-3 ">
                    NRI FAQs
                  </h1>

                  <p className="text-center d-block fs-6 d-none">
                    <Link className="text-white text-decoration-none" href="/">
                      Home
                    </Link>{" "}
                    / NRI FAQs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="bg-light py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="mb-3">NRI Real Estate Investment FAQs</h2>

            <p className="theme-color-dark">
              At EARA Group, we understand that Non-Resident Indians often seek
              opportunities to stay connected to their homeland through
              meaningful investments.
            </p>

            <p>
              Our team supports NRI buyers with the right guidance on property
              regulations, documentation and investment procedures in India.
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="row g-4">

            {/* FAQ 1 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>1. Can NRIs purchase property in India?</h5>
                <p>
                  Yes. Non-Resident Indians (NRIs) and Overseas Citizens of India
                  (OCI) are permitted to purchase residential and commercial
                  properties in India under RBI and FEMA regulations.
                </p>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>2. Can NRIs buy plots in India?</h5>
                <p>
                  NRIs are allowed to purchase residential plots in approved
                  plotted developments but cannot buy agricultural land,
                  plantation property or farmhouses unless inherited.
                </p>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>3. Can NRIs invest in EARA plotted developments?</h5>
                <p>
                  Yes. NRIs can invest in residential plots offered by EARA
                  Group subject to compliance with RBI and FEMA regulations.
                </p>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>4. Do NRIs need to be present in India?</h5>
                <p>
                  No. NRIs can complete the purchase process remotely by
                  appointing a trusted representative through Power of
                  Attorney (PoA).
                </p>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>5. How can NRIs make payments?</h5>
                <p>
                  Payments must be made through NRE accounts, NRO accounts or
                  inward remittance via approved banking channels according to
                  RBI guidelines.
                </p>
              </div>
            </div>

            {/* FAQ 6 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>6. Can NRIs avail home loans?</h5>
                <p>
                  Yes. Many banks and housing finance institutions in India
                  offer home loans to NRIs for purchasing residential
                  properties.
                </p>
              </div>
            </div>

            {/* FAQ 7 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>7. What documents are required?</h5>
                <p>
                  Documents typically include passport, visa or OCI card,
                  PAN card, overseas address proof and passport-size photos.
                </p>
              </div>
            </div>

            {/* FAQ 8 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>8. What taxes apply?</h5>
                <p>
                  NRIs must pay applicable stamp duty and registration
                  charges during purchase and capital gains tax during resale.
                </p>
              </div>
            </div>

            {/* FAQ 9 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>9. Can NRIs repatriate funds?</h5>
                <p>
                  Yes. Funds from property sale can be repatriated through
                  NRE or NRO accounts subject to RBI regulations and taxes.
                </p>
              </div>
            </div>

            {/* FAQ 10 */}
            <div className="col-md-6">
              <div className="faq-card p-4 shadow-sm bg-white h-100">
                <h5>10. How does EARA assist NRI buyers?</h5>
                <p>
                  EARA Group provides guidance on documentation,
                  regulatory requirements and purchase procedures to ensure
                  a seamless investment experience.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}