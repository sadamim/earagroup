'use client';

import Image from "next/image";
import Link from "next/link";

export default function AwardsTestimonials() {
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
                alt="Awards and Testimonials"
              />

              <div className="overlay2">
                <div
                  className="text-white d-block"
                  style={{ marginTop: "-120px" }}
                >
                  <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                    Awards & Testimonials
                  </h1>

                  <p className="text-center d-block fs-6">
                    <Link className="text-white text-decoration-none" href="/">
                      Home
                    </Link>{" "}
                    / Awards & Testimonials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-5 bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="mb-3">Recognition & Customer Experiences</h2>

            <p>
              At EARA Group, every milestone we achieve is a reflection of the
              trust placed in us by our customers and partners. Our commitment
              to quality, transparency, and thoughtful development has helped
              us earn recognition within the real estate industry.
            </p>

            <p>
              We believe that the true measure of success lies in the
              satisfaction of the communities we build. The appreciation and
              testimonials from our customers inspire us to continue delivering
              exceptional living spaces.
            </p>
          </div>

          {/* Awards Section */}
          <div className="mb-5">
            <h3 className="text-center mb-4">Our Awards</h3>

            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <div className="award-card text-center p-4 shadow-sm bg-white h-100">
                  <Image
                    src="/images/award1.png"
                    width={120}
                    height={120}
                    alt="Award"
                    className="mb-3"
                  />

                  <h5>Best Emerging Developer</h5>
                  <p className="small text-muted">Real Estate Excellence Awards – 2023</p>

                  <p className="small">
                    Recognized for delivering innovative plotted developments
                    and creating thoughtfully planned residential communities.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="award-card text-center p-4 shadow-sm bg-white h-100">
                  <Image
                    src="/images/award2.png"
                    width={120}
                    height={120}
                    alt="Award"
                    className="mb-3"
                  />

                  <h5>Excellence in Sustainable Development</h5>
                  <p className="small text-muted">Property Leaders Summit – 2024</p>

                  <p className="small">
                    Awarded for integrating eco-conscious planning and natural
                    landscapes within modern residential communities.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="award-card text-center p-4 shadow-sm bg-white h-100">
                  <Image
                    src="/images/award3.png"
                    width={120}
                    height={120}
                    alt="Award"
                    className="mb-3"
                  />

                  <h5>Customer Trust Award</h5>
                  <p className="small text-muted">Real Estate Conclave – 2024</p>

                  <p className="small">
                    Honored for maintaining transparency and delivering
                    projects that exceed customer expectations.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Testimonials Section */}
          <div>
            <h3 className="text-center mb-4">Customer Testimonials</h3>

            <div className="row g-4">

              <div className="col-lg-4 col-md-6">
                <div className="testimonial-card p-4 shadow-sm bg-white h-100">
                  <p className="fst-italic">
                    “Investing with EARA Group has been a smooth and
                    transparent experience. The team guided us through every
                    step of the process, making property ownership effortless.”
                  </p>

                  <h6 className="mt-3 mb-0">— Ravi Kumar</h6>
                  <small className="text-muted">Homebuyer</small>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="testimonial-card p-4 shadow-sm bg-white h-100">
                  <p className="fst-italic">
                    “The planning and natural surroundings of the project are
                    truly impressive. EARA developments provide a perfect
                    balance between modern infrastructure and nature.”
                  </p>

                  <h6 className="mt-3 mb-0">— Anjali Mehta</h6>
                  <small className="text-muted">Investor</small>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="testimonial-card p-4 shadow-sm bg-white h-100">
                  <p className="fst-italic">
                    “What stood out the most was the transparency and
                    professionalism of the team. I would highly recommend EARA
                    to anyone looking for a reliable real estate investment.”
                  </p>

                  <h6 className="mt-3 mb-0">— Suresh Reddy</h6>
                  <small className="text-muted">Property Buyer</small>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}