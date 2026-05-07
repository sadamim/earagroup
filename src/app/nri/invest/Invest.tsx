'use client';

import Image from "next/image";
import Link from "next/link";

export default function WhyInvestInEara() {
  return (
    <>
      {/* Banner Section */}
      <div className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/Why-invest.webp"
                width={1920}
                height={800}
                className="img-fluid masterpiece"
                alt="Why Invest in EARA"
              />

              <div className="overlay2">
                <div
                  className="text-white d-block"
                  style={{ marginTop: "-120px" }}
                >
                  <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                    Why Invest in EARA
                  </h1>

                  {/* Breadcrumb */}
                  <p className="text-center d-block fs-6 d-none">
                    <Link
                      className="text-white text-decoration-none"
                      href="/"
                    >
                      Home
                    </Link>{" "}
                    / Why Invest in EARA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="bg-light py-5 theme-bg-light">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="mb-3">Why Invest in EARA</h2>
            <p className="theme-color-dark">
              Investing in real estate is not only about owning property — it is
              about securing long-term value, stability and a meaningful
              connection to your homeland.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-6">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="mb-3">Strategic Location Advantage</h5>
                <p>
                  EARA developments are carefully located in emerging growth
                  corridors that offer strong connectivity and future
                  appreciation potential. Projects near Kanakapura Main Road
                  benefit from improving infrastructure, accessibility and
                  increasing residential demand.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="mb-3">Premium Plotted Developments</h5>
                <p>
                  EARA focuses on luxury plotted communities designed with open
                  spaces, greenery and well-planned layouts. Buyers have the
                  freedom to design and build homes that reflect their lifestyle
                  while enjoying the benefits of a thoughtfully developed
                  community.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="mb-3">Nature-Inspired Living</h5>
                <p>
                  EARA projects are designed around the idea of living amidst
                  nature. Landscaped surroundings, open spaces and peaceful
                  environments create a lifestyle that balances modern comforts
                  with greenery.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="mb-3">Transparent and Reliable Process</h5>
                <p>
                  Transparency and clear communication form the foundation of
                  every EARA development. Buyers are guided through
                  documentation, processes and project details with clarity.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="mb-3">Long-Term Value Potential</h5>
                <p>
                  Real estate continues to be one of the most trusted investment
                  avenues for NRIs. Strategically located plotted developments
                  in growing regions often offer strong appreciation potential,
                  making them valuable long-term investments.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="p-4 shadow-sm bg-white h-100 rounded">
                <h5 className="mb-3">Seamless Support for NRI Buyers</h5>
                <p>
                  EARA understands the unique requirements of overseas
                  investors. Our team provides assistance with project
                  information, documentation guidance and the overall purchase
                  process to ensure a smooth investment experience.
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Text */}
          <div className="text-center mt-5">
            <h4 className="mb-3">Explore Investment Opportunities With EARA</h4>
            <p>
              Whether you are planning to build a future home in India or
              looking for a long-term real estate investment, EARA developments
              offer a combination of nature, thoughtful planning and promising
              growth potential.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}