export default function WhatSetsUsApart() {
  const features = [
    {
      title: "Thoughtful Planning",
      desc: "Every project is designed with meticulous attention to infrastructure, landscaping, and long-term sustainability to ensure lasting value for our communities.",
    },
    {
      title: "Nature-Inspired Living",
      desc: "We develop communities where green spaces, water elements, and eco-friendly practices are seamlessly integrated to create a harmonious living environment.",
    },
    {
      title: "Premium Lifestyle",
      desc: "Our developments are crafted to offer comfort, privacy, and an elevated lifestyle with thoughtfully designed spaces and modern amenities.",
    },
    {
      title: "Trust & Transparency",
      desc: "Integrity and customer trust are at the heart of everything we build, ensuring complete transparency and long-term relationships with our clients.",
    },
  ];

  return (
    <section className="section-padding mysection py-5 bg-white" id="why-choose-us">
      <div className="container">
        <div className="row text-center">

          <div className="col-12 mb-5">
            <h2 className="headingH1 t-g">What Sets Us Apart</h2>
          </div>

          {features.map((item, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="feature-box p-4 h-100">
                <h4 className="fw-bold t-g mb-3">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}