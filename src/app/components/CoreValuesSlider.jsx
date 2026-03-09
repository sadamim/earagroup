"use client";

const coreValues = [
  {
    title: "Sustainability",
    text: "Creating future-ready communities that respect the land and restore balance with nature.",
    img: "/images/Sustainability_Eara.webp",
  },
  {
    title: "Innovation",
    text: "Blending thoughtful design with cutting-edge planning to build smarter, greener spaces.",
    img: "/images/Innovations_Eara.webp",
  },
  {
    title: "Integrity",
    text: "Rooted in transparency and trust — every decision guided by what’s right and reliable.",
    img: "/images/Integrity_Eara.webp",
  },
  {
    title: "Quality",
    text: "Delivering excellence in every detail, from foundation to finish.",
    img: "/images/Quality_Eara.webp",
  },
];

export default function CoreValuesGrid() {
  return (
    <section className="lifestyle-section section theme-bg-light">
      <div className="container">
        <div className="row  justify-content-center">
                    <div className="title text-center mb-3">
                        <h2 className="text-black mb-4 theme-color-dark fw-bold">
                            Our Core Values
                        </h2>
                    </div>
                </div>
        <div className="row  g-4">
          {coreValues.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="corevalue-card">

                {/* Image */}
                <div
                  className="corevalue-img"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>

                {/* Text */}
                <div className="corevalue-content">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
