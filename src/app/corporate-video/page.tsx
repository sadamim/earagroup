'use client';

import Image from "next/image";
import Link from "next/link";

export default function CorporateVideo() {
  return (
    <>
      {/* Banner Section */}
      <div className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/Channel-Partner.avif"
                width={1920}
                height={800}
                className="img-fluid masterpiece"
                alt="Corporate Video"
              />

              <div className="overlay2">
                <div
                  className="text-white d-block"
                  style={{ marginTop: "-120px" }}
                >
                  <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                    Corporate Video
                  </h1>

                  <p className="text-center d-block fs-6">
                    <Link
                      className="text-white text-decoration-none"
                      href="/"
                    >
                      Home
                    </Link>{" "}
                    / Corporate Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="mb-3">EARA Group Corporate Video</h2>

            <p>
              Discover the vision and philosophy behind EARA Group through
              our corporate video. Learn how we create thoughtfully planned
              developments that combine modern living with natural
              surroundings.
            </p>

            <p>
              Our journey is built on trust, transparency, and a commitment
              to developing communities that offer long-term value for
              homeowners and investors.
            </p>
          </div>

          {/* Video */}
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div className="ratio ratio-16x9 shadow rounded overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Corporate Video"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}