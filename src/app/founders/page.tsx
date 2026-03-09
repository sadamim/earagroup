'use client';

import Image from "next/image";
import Link from "next/link";

export default function FounderMessage() {
  return (
    <>
      {/* Banner Section */}
      <div className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/Founder-message.webp"
                width={1920}
                height={800}
                className="img-fluid masterpiece"
                alt="Founder Message"
              />

              <div className="overlay2">
                <div
                  className="text-white d-block"
                  style={{ marginTop: "-120px" }}
                >
                  <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                    Founder’s Message
                  </h1>

                  <p className="text-center d-block fs-6">
                    <Link
                      className="text-white text-decoration-none"
                      href="/"
                    >
                      Home
                    </Link>{" "}
                    / Founder’s Message
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Message Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left Image */}
            <div className="col-lg-5">
              <div className="founder-image text-center">
                <Image
                  src="/images/l-n-reddy.jpeg"
                  width={600}
                  height={700}
                  alt="Founder EARA Group"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>

            {/* Right Content */}
          <div className="col-lg-7">
  <h2 className="mb-4">Founder & CEO – EARA Group</h2>

  <p>
    Mr. E. Lakshminarayana Reddy is the Founder and CEO of EARA Group, a
    visionary real estate development company focused on creating
    thoughtfully planned communities that blend luxury with nature.
  </p>

  <p>
    With a strong entrepreneurial mindset and a passion for sustainable
    development, he established EARA Group with the vision of building
    future-ready residential environments that enhance quality of life
    while respecting nature.
  </p>

  <p>
    Under his leadership, the company is committed to delivering
    developments that emphasize thoughtful planning, eco-friendly
    infrastructure, and long-term value for homeowners and investors.
  </p>

  <p>
    Mr. Reddy believes that real estate is not just about developing land —
    it is about creating lasting communities, enriching lifestyles, and
    shaping environments where future generations can thrive.
  </p>

  <h5 className="mt-4 fw-bold">— Mr. E. Lakshminarayana Reddy</h5>
</div>

          </div>
        </div>
      </section>
    </>
  );
}