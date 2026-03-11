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
  <h2 className="mb-4">About Mr. E. Lakshminarayana Reddy</h2>

  <p>
    Mr. E. Lakshminarayana Reddy is the <strong> Founder & CEO of EARA Group </strong>, a leading real estate and construction company based in Bengaluru, Karnataka. A first-generation entrepreneur, he has dedicated his career to building premium residential communities in Bengaluru. With over two decades of experience, he leads the company with a vision rooted in integrity, transparency, and sustainability.
  </p>

  <p>
    His mission is simple yet powerful: to create spaces that enrich lifestyles and stand as legacies for generations to come. Under his leadership, EARA Group has become a trusted name in real estate development, driving the company’s vision of creating future-ready neighborhoods that deliver long-term value.
  </p>

  <p>
    Beyond business, Mr. Reddy is actively engaged in community service through organizations like <strong>Rotary International </strong> , reflecting his commitment to social responsibility. His philosophy is rooted in integrity, innovation, and the belief that real estate is not just about constructing buildings, but about shaping legacies for generations to come.
  </p>

  <h5 className="mt-4 fw-bold">— Mr. E. Lakshminarayana Reddy</h5>
</div>
          </div>
        </div>
      </section>

       <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="text-center">
  <h2 className="mb-4">Message from the Founder & CEO</h2>``

  <p>
    At EARA Group, we believe real estate is more than just land and buildings—it is about creating communities, nurturing dreams, and building legacies. As a first-generation entrepreneur, my vision has always been to deliver developments that combine trust, transparency, and long-term value.
  </p>

  <p>
    Our projects are designed to offer not just a place to live, but a lifestyle enriched with comfort, security, and sustainability. We understand that buying a home is one of life’s most important decisions, and we are committed to making that journey rewarding and worry-free.
  </p>

  <p>
    EARA Group represents reliability and growth. With premium residential plots along Bengaluru’s fast-developing corridors, we ensure that every investment is backed by quality, foresight, and appreciation potential. Our focus on timely delivery and ethical practices makes us a trusted partner in wealth creation.
  </p>

  <p>
    Together, let us shape neighborhoods that stand the test of time and create spaces where families and futures can flourish.
  </p>

  <h5 className="mt-4 fw-bold text-end">
    — Mr. E. Lakshminarayana Reddy, 
  </h5>
</div>
          </div>
        </div>
      </section>

     
    </>
  );
}