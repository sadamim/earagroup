'use client';

import Image from "next/image";
import Link from "next/link";

import { FaUserTie } from "react-icons/fa";

export default function LeadershipTeam() {
  return (
    <>
      {/* Banner Section */}
      <div className="header-section">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/Leadership-team.webp"
                width={1920}
                height={800}
                className="img-fluid masterpiece"
                alt="Leadership Team"
              />

              <div className="overlay2">
                <div
                  className="text-white d-block"
                  style={{ marginTop: "-120px" }}
                >
                  <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                    Leadership Team
                  </h1>

                  <p className="text-center d-block fs-6">
                    <Link
                      className="text-white text-decoration-none"
                      href="/"
                    >
                      Home
                    </Link>{" "}
                    / Leadership Team
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
            <h2 className="mb-3">Our Leadership Team</h2>

            <p>
              At EARA Group, our leadership team brings together a diverse
              blend of experience, vision, and industry expertise. Guided by a
              shared commitment to excellence, our leaders work together to
              create thoughtfully designed developments that balance
              innovation, sustainability, and long-term value.
            </p>

            <p>
              With extensive experience across real estate development,
              planning, and customer engagement, the leadership team plays a
              vital role in shaping the strategic direction of the
              organization and delivering projects that create lasting value.
            </p>
          </div>

          {/* Leadership Grid */}
       {/* Leadership Grid */}
<div className="row g-4">

  {/* Leader 1 */}
  <div className="col-lg-4 col-md-6">
    <div className="team-card text-center p-4 shadow-sm bg-white h-100">
      <Image
        src="/images/l-n-reddy.jpeg"
        width={300}
        height={350}
        alt="Founder"
        className="img-fluid rounded mb-3"
      />

      <h5 className="mb-1">Mr.E.Lakshmi Narayana Reddy</h5>
      <p className="text-muted small mb-3">
        Founder & Managing Director
      </p>

      <p className="small">
        Mr.E.Lakshmi Narayana Reddy is the founder and guiding force behind EARA Group.
        With extensive experience in the real estate sector, he has led the
        company with a strong vision of developing quality communities that
        combine modern infrastructure, sustainability, and long-term value
        for customers.
      </p>
    </div>
  </div>

  {/* Leader 2 */}
  <div className="col-lg-4 col-md-6">
    <div className="team-card text-center p-4 shadow-sm bg-white h-100">
      <Image
        src="/images/WEBSITE IMAGE-01.webp"
        width={300}
        height={350}
        alt="Director"
        className="img-fluid rounded mb-3"
      />

      <h5 className="mb-1">Anthony Pentony</h5>
      <p className="text-muted small mb-3">
        {/* Director – Strategic Partnerships */}
      </p>

      <p className="small">
       A seasoned professional with 16+ years of experience across Real Estate and multiple industries. Anthony brings strong expertise in sales strategy, marketing leadership, brand development, and large-scale project launches, playing a key role in driving growth and market positioning.
      </p>
    </div>
  </div>

  {/* Leader 3 */}
  <div className="col-lg-4 col-md-6">
    <div className="team-card text-center p-4 shadow-sm bg-white h-100">
            <Image
                src="/images/WEBSITE IMAGE-02.webp"
        width={300}
        height={350}
        alt="Director"
        className="img-fluid rounded mb-3"
      />

      <h5 className="mb-1">Vinay B</h5>
      <p className="text-muted small mb-3">
        {/* Director – Operations */}
      </p>

      <p className="small">
       With 15+ years of experience in the Real Estate industry, Vinay has developed deep expertise in sales leadership, client relationship management, and deal closures, contributing significantly to business expansion and customer trust.
      </p>
    </div>
  </div>

  {/* Leader 4 */}
<div className="col-lg-4 col-md-6">
  <div className="team-card text-center p-4 shadow-sm bg-white h-100">

    <div className="team-icon mb-3">
      <FaUserTie size={240} color="#ccc" />
    </div>

    <h5 className="mb-1">Punith N</h5>

    <p className="text-muted small mb-3"></p>

    <p className="small">
      A dynamic professional with 5+ years of experience in Real Estate,
      specializing in sales operations, customer engagement, and business
      development, ensuring smooth coordination between clients and the
      organization.
    </p>

  </div>
</div>

</div>

        </div>
      </section>
    </>
  );
}