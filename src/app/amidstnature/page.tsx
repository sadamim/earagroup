// "use client";
// import { useEffect } from "react";
//import './style.css';
import "./../microsite.css";
import Link from "next/link";
export const metadata = {
  title: 'Eara Group Amidst Nature BMRDA Villa Plots in Kanakapura Road',
  description: 'Explore luxury BMRDA approved villa plots at Amidst Nature by Eara Group in Kanakapura Road. Enjoy lush greenery, modern amenities with Connectivity.',
  keywords: 'Amidst Nature Kanakapura Road,  Amidst Nature Price,  BMRDA Approved Sites in Kanakapura Road,  BMRDA Plots For Sale in Kanakapura Road,  BMRDA Residential Plot in Kanakapura Road',
  alternates: {
    canonical: 'https://earagroup.com/amidstnature/',
  },
};
import Image from "next/image";
import AmenitiesMarquee from "../components/AmenitiesMarquee";
import FooterModalForm from "../components/FooterModalForm";
import ContactFormPopup from "../components/ContactFormPopup";
import MicroHomeHeroSlider from "../components/Microsite/MicroHomeHeroSlider";
import Clubhouse from "../components/ClubhouseMarquee";
import MasterPlanSection from "../components/Microsite/MasterPlanSection";
import MyAccordion from "../components/MyAccordion";
import MyAccordionList from "../components/MyAccordionList";
import Gallery from "../components/Gallery";
import Construction from "../components/Construction";

export default function Home() {
  const faqItems = [
    {
      id: 1, title: 'SCHOOLS & COLLEGES', content: `  <ul dir="ltr">
    <li>Delhi Public School (DPS) south 20 mins</li>
    <li>The Valley School (Krishnamurti Foundation) 14 mins</li>
    <li>Sri Kumaran Public School 10 mins&nbsp;</li>
    <li>Dayananda Sagar Business Academy 06 mins</li>
    <li>Jain University (Global Campus) 48 mins</li>
    <li>Dayananda Sagar Medical College 30 mins</li>
    <li>Rashtrotthana School, Kanakapura main road 10 mins</li>
  </ul>
` },
    {
      id: 2, title: 'HOSPITALS', content: `<ul dir="ltr">
    <li>Sri Sri Hospital 12 mins</li>
    <li>Manipal Hospitals Kanakpura road 20 mins</li>
    <li>Aster RV Hospital 26 mins</li>
    <li>BGS Hospital 26 mins</li>
    <li>Apollo Hospitals, Bannerghatta 28 mins</li>
  </ul>` },
    {
      id: 3, title: 'LEISURE & HOTSPOTS', content: `<ul dir="ltr">
    <li>Art of Living International Centre 07 mins</li>
    <li>Turahalli Forest Cycling Trails 15 mins</li>

    <li>Cuhantra 12 mins</li>
    <li>Metro Station (upcoming) 5 mins</li>
    <li>Forum Mall South 18 mins</li>
    <li>Birds of Paradise 14 mins</li>
  </ul>
  ` },
    {
      id: 4, title: 'WORKPLACE AND CONNECTIVITY ', content: `<ul dir="ltr">
        <li>Whitefield: 45 minutes</li>
        <li>Electronic City: 30 minutes</li>
        <li> Harohalli Industrial Area: 20 minutes</li>
  
      </ul>
    ` },
    {
      id: 5, title: 'SUPERIOR CONNECTIVITY', content: `<ul dir="ltr">
          <li>Project is 200 meters from Proposed PRR 2.</li>
          <li>10 minutes from Nice Road Junction.</li>
         
      </ul>
    ` },
  ];
  /*
  useEffect(() => {

    const form = document.getElementById(
      "wf-form-Melodies-of-Life-Contact-Form"
    );
    const trigger = document.getElementById("brochure-download-trigger");
    const popup = document.getElementById("popup-form");
    const thankYou = document.getElementById("popup-thankyou");




    if (trigger && popup) {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "flex";
      });
    }

    const closePopup = () => {
      if (popup) popup.style.display = "none";
      if (thankYou) thankYou.style.display = "none";
    };


  }, []);
  */

  return (
    <>
      <main className="main-wrapper">

        <div className="overflow-clip" id="main-slider">

          <div id="carouselExampleDark" className="header-section position-relative ">
            <div className="row">
              <div className="col-md-12">
                <div className="video-container position-relative " style={{ lineHeight: "0 !important" }}>

                  <video
                    className="w-100 h-100 object-fit-cover d-md-block d-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"

                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src="/images/Project.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <video
                    className="w-100 h-100 object-fit-cover d-md-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"

                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source src="/images/Project-mobile.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-0"></div>

                  {/* ✅ Centered Text using Bootstrap 5.3 */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3 ">
                    <div className="micrositeslidertext">
                      <h1 className="display-4 fw-bold  mb-0 ">
                        Luxury villa plots in Kaggalipura
                      </h1>
                      <p className="lead mb-0 text-center">Crafted for serene living and timeless value.</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <MicroHomeHeroSlider /> */}
        </div>
        <div id="scroll-more">
<section className="project-info-section theme-bg-dark py-5 mobileoverview">
  <div className="container">
    <div className="row row-cols-2 row-cols-md-4 text-center text-white g-4">

      {/* Project Size */}
      <div className="col border-end border-light">
        <i className="bi bi-arrows-fullscreen fs-1 mb-2 theme-color-light"></i>
        <h6 className="fw-bold text-uppercase fs-6 mb-2 theme-color-light">
          Project Size
        </h6>
        <span className="fs-5 fw-light theme-color-light">18+ Acres</span>
      </div>

      {/* Approved By */}
      <div className="col border-end border-light">
        <i className="bi bi-patch-check fs-1 mb-2 theme-color-light"></i>
        <h6 className="fw-bold text-uppercase fs-6 mb-2 theme-color-light">
          Approved By
        </h6>
        <span className="fs-5 fw-light theme-color-light">BMRDA</span>
      </div>

      {/* Possession */}
      <div className="col border-end border-light">
        <i className="bi bi-calendar-check fs-1 mb-2 theme-color-light"></i>
        <h6 className="fw-bold text-uppercase fs-6 mb-2 theme-color-light">
          Possession
        </h6>
        <span className="fs-5 fw-light theme-color-light">18 Months</span>
      </div>

      {/* Plot Sizes */}
      <div className="col">
        <i className="bi bi-bounding-box fs-1 mb-2 theme-color-light"></i>
        <h6 className="fw-bold text-uppercase fs-6 mb-2 theme-color-light">
          Plot Sizes
        </h6>
        <span className="fs-5 fw-light theme-color-light">
          1500 - 3300 sq.ft
        </span>
      </div>

      {/* Amenities */}
      <div className="col border-end border-light">
        <i className="bi bi-stars fs-1 mb-2 theme-color-light"></i>
        <h6 className="fw-bold text-uppercase fs-6 mb-2 theme-color-light">
          Amenities
        </h6>
        <span className="fs-5 fw-light theme-color-light">30+</span>
      </div>

      {/* Clubhouse */}
      <div className="col border-end border-light">
        <i className="bi bi-building fs-1 mb-2 theme-color-light"></i>
        <h6 className="fw-bold text-uppercase fs-6 mb-2 theme-color-light">
          Clubhouse
        </h6>
        <span className="fs-5 fw-light theme-color-light">
          25,000 sq.ft
        </span>
      </div>

      {/* Villa Plots */}
      <div className="col border-end border-light">
        <i className="bi bi-house-door fs-1 mb-2 theme-color-light"></i>
        <h6 className="fw-bold text-uppercase fs-6 mb-2 theme-color-light">
          Villa Plots
        </h6>
        <span className="fs-5 fw-light theme-color-light">141</span>
      </div>

      {/* Project Type */}
      <div className="col">
        <i className="bi bi-gem fs-1 mb-2 theme-color-light"></i>
        <h6 className="fw-bold text-uppercase fs-6 mb-2 theme-color-light">
          Project Type
        </h6>
        <span className="fs-5 fw-light theme-color-light">
          Luxury Villa Plots
        </span>
      </div>

    </div>
  </div>
</section>




         <section className="section theme-bg-light page-project-evergreen" id="about">
  <div className="container">
    <div className="row px-md-5">
      <div className="col-md-6 d-flex align-items-center">
        <div>
          <h2 className="mb-0 theme-color-dark text-center line-height-1_8 ">CODENAME EVERGREEN</h2>
          <span className="fs-5 theme-color-dark text-center d-block line-height-1_8 ">
            A Community Rooted in <span className="text-success">Nature</span>
          </span>
          <p className="mt-4 theme-color-dark line-height-1_8 ">
            <strong>
              Every plot at Codename Evergreen reflects a lifestyle shaped by nature, space, and thoughtful design.
            </strong>
          </p>
          <p className="theme-color-dark line-height-1_8">
            Spread across 18+ lush acres in Kaggalipura, just off Kanakapura Main Road, this ultra-luxury plotted development
            brings together serene landscapes and well-planned infrastructure. Designed to balance nature’s calm with modern comforts,
            the community offers the freedom to create a home that feels timeless, private, and deeply connected to its surroundings.
          </p>
          <div className="text-center my-4">
            <ContactFormPopup
              buttonText="Download Brochure"
              buttonClassName="btn btn-dark px-3 py-2 text-decoration-none rounded-2"
              redirectUrl="/download-page"
            />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="px-md-5">
          <Image
            alt="Codename Evergreen Project"
            src="/images/Amidstnature_project-pg.avif"
            width={5500}
            height={750}
            className="img-fluid mb-3 rounded-4"
            priority
            fetchPriority="high"
            style={{ maxHeight: "50vh", objectFit: "cover", objectPosition: "bottom center" }}
          />
        </div>
      </div>
    </div>
  </div>
</section>
          <div className="py-5 theme-bg-dark d-none" >
            <div className="padding-global">
              <div className="container-large">
                <div className="home-stats_components">
                  <div className="home-stats_content-wrapper">
                    <div className="home-stats_text-wrapper">
                      <div className="text-color-grey">
                        <div className="text-size-medium theme-color-light fs-5">
                          Enter and see a sprawling canvas of green within the
                          city
                        </div>
                      </div>
                    </div>
                    <div className="home-stats_items highlights">
                      <div
                        id="w-node-cdea1d55-fe63-8f1c-3822-d0c3250461c3-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">Acres</h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">15 acres</div>
                        </div>
                      </div>
                      <div
                        id="w-node-f6750213-c322-5874-8b4c-dd2586408f82-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">
                            Plot Sizes<span className="heading-style-h5"></span>
                          </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">
                            1500 – 3300 Sqft
                          </div>
                        </div>
                      </div>
                      <div
                        id="w-node-_1989e816-fb39-3880-661b-bed1357559b4-ac1b3e9a"
                        className="home-stats_item"
                      >
                        <div className="text-color-accent">
                          <h2 className="heading-style-h1 theme-color-light">Approved </h2>
                        </div>
                        <div className="text-color-offwhite">
                          <div className="text-size-regular theme-color-light">
                            BMRDA
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<section className="pricing-section py-5" id="price">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="main-title">Select Your Plot</h2>
    </div>

    <div className="pricing-table">

      <div className="pricing-header">
        <div>TYPE</div>
        <div>AREA</div>
        <div>PRICE</div>
      </div>

      <div className="pricing-row">
        <div>ODD Site</div>
        <div>-</div>
        <div>
          <button className="request-btn">On Request*</button>
        </div>
      </div>

      <div className="pricing-row">
        <div>30 x 50</div>
        <div>1500 sq.ft.</div>
        <div>
          <button className="request-btn">On Request*</button>
        </div>
      </div>

      <div className="pricing-row">
        <div>40 x 60</div>
        <div>2400 sq.ft.</div>
        <div>
          <button className="request-btn">On Request*</button>
        </div>
      </div>

      <div className="pricing-row">
        <div>40 x 70</div>
        <div>2800 sq.ft.</div>
        <div>
          <button className="request-btn">On Request*</button>
        </div>
      </div>

    </div>

   

  </div>
</section>
<section className="masterplan-section py-5" id="masterplan">
  <div className="container">

    <div className="text-center mb-5">
      <h2 className="main-title">Master Plan</h2>
      <p className="subtitle text-center">Thoughtfully designed layout with premium villa plots</p>
    </div>

    <div className="row justify-content-center">
      <div className="col-lg-10 text-center">

        <div className="masterplan-image">

          {/* Master Plan Image */}
          <Image
            src="/images/master-plan.jpeg"
            alt="Project Master Plan"
            className="img-fluid blur-price"
            width={500}
            height={200}
          />

          {/* Overlay Button */}
          <div className="masterplan-overlay">
            <a href="#" className="masterplan-btn">
              View Full Master Plan
            </a>
          </div>

        </div>

      </div>
    </div>

  </div>
</section>
          <section className="padding-global mysection visible theme-bg-dark " >
            <div className="container-fluid">
              <div className="row p-0">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                  <div className="p-3">
                    <div className="row">
                      <div className="col-md-12">
                        <div><div className="title text-center">
                          <h2 className="mb-3 theme-color-light text-center">Project Unique Selling Points (USPs)</h2>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 px-md-5 d-flex justify-content-center align-items-center">
                  <div className="p-3">
                    <div className="row">
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Accessibility.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Accessibility
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Comfort.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Comfort
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Community.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Community
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Freedom.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Freedom
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Legacy.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Legacy
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Open space.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Open space
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Safety.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Safety
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Security.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Security
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Serenity.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Serenity
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Smart living.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Smart living
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Tranquility.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Tranquility
                            </h4>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 ">
                        <div className="services-item shine-animate-item bg-white mb-3">
                          <div className="services-thumb">
                            <img alt="upsc" width={392} height={271} decoding="async" className="img-fluid mb-1" src="/images/usp/Wellness.webp" />
                          </div>
                          <div className="services-content px-3 mb-3">
                            <h4 className="title fs-6 mb-0 text-center py-3">Wellness
                            </h4>

                          </div>
                        </div>
                      </div>




                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: 360 Lifestyle Cards */}
          <section className="section_biodiversity-benefits py-5  theme-bg-light" id="amenities"  >
            <div className="padding-global" >
              <div className="container-large" >
                <div className="biodiversity-benefits_components">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className=""
                  >
                    <h2 data-animate={1} className="m-center text-center  theme-color-dark">
                      Amenities
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <AmenitiesMarquee />

          </section>


          {/* Section 2: 360 Lifestyle Cards */}
          <section className="section_biodiversity-benefits py-5 theme-bg-dark section-small" id="amenities">
            <div className="padding-global">
              <div className="container-large">
                <div className="biodiversity-benefits_components">
                  <div
                    id="w-node-_147bc8d0-b385-cc95-4439-b2fc20fb618b-ac1b3eca"
                    className=""
                  >
                    <h2 data-animate={1} className=" theme-color-light text-center">
                      Club House
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <Clubhouse />
          </section>


          {/* <MasterPlanSection /> */}
          <Gallery />
          {/*  <Construction />*/}

          <section className="section_home-connectivity theme-bg-light page-about-mv d-none" id="location">
            <div className="padding-global">
              <div className="container-large">
                <div className="home-connectivity_content">
                  <div className="home-connectivity_heading-wrapper text-center">
                    <h2
                      data-animate={1}
                      className="heading-style-h2 text-color-offwhite theme-color-light m-center"
                    >
                      Location
                    </h2>
                  </div>
                </div>
                <div className="home-connectivity_components">
                  <div className="home-connectivity_image-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7781.187708608875!2d77.51706043914793!3d12.804854316360881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4169b07f2a7b%3A0xe6d9ff13f19a5517!2sAmidst%20Nature!5e0!3m2!1sen!2sin!4v1759994801277!5m2!1sen!2sin" width="100%" height="680" loading="lazy"></iframe>
                  </div>
                  <div
                    id="w-node-ae28a13d-3673-7d72-6c93-35ac2b8ff216-ac1b3e9a"
                    className="home-connectivity_content-wrapper  position-relative"
                  >
                    <div className="home-connectivity_content">
                      <div className="home-connectivity_heading-wrapper">
                        <h3
                          data-animate={1}
                          className="fs-2 text-color-offwhite theme-color-light m-center mb-3"
                        >
                          Located in{" "}
                          <span className="text-black">
                            Kaggalipura,
                          </span>{" "}
                          Off Kanakapura Main  Road, Bengaluru.
                        </h3>
                      </div>
                      <div className="w-100">
                        <div className="text-size-regular   m-center lh">
                          <p className="text-start m-center">
                            Surrounded by serene greenery and nestled along the city&rsquo;s fast-developing Kanakapura stretch, Amidst Nature is among the most sought-after premium villa plots in Kanakapura Road.
                          </p>
                          <p className="text-start  m-center">
                            For those seeking villa plots in Kaggalipura, this address offers unmatched tranquility and long-term value -  perfectly placed for families and investors alike.
                          </p>

                          <br />


                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <MyAccordion items={faqItems} />
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section_home-connectivity theme-bg-light page-about-mv" id="location">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2
                    data-animate={1}
                    className="heading-style-h2 text-color-offwhite theme-color-light m-center text-center"
                  >
                    Location
                  </h2>
                </div>
                <div className="row">
                  <div className="col-md-12">
                   
                    <div className=" mt-3">
                      <h3
                        data-animate={1}
                        className="fs-2 text-color-offwhite theme-color-light m-center mb-3"
                      >
                        Located in{" "}
                        <span className="text-black">
                          Kaggalipura,
                        </span>{" "}
                        Off Kanakapura Main  Road, Bengaluru.
                      </h3>
                    </div>
                    <div className="w-100">
                      <div className="   m-center lh">
                        <p className="text-start m-center">
                          Surrounded by serene greenery and nestled along the city&rsquo;s fast-developing Kanakapura stretch, Amidst Nature is among the most sought-after premium villa plots in Kanakapura Road.
                        </p>
                        <p className="text-start  m-center">
                          For those seeking villa plots in Kaggalipura, this address offers unmatched tranquility and long-term value -  perfectly placed for families and investors alike.
                        </p>

                       


                      </div>
                    </div>
                     <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7781.187708608875!2d77.51706043914793!3d12.804854316360881!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4169b07f2a7b%3A0xe6d9ff13f19a5517!2sAmidst%20Nature!5e0!3m2!1sen!2sin!4v1759994801277!5m2!1sen!2sin" width="100%" height="380" loading="lazy" className="mb-3"></iframe>
                  </div>
                </div>
                <MyAccordionList items={faqItems} />
              </div>
            </div>
          </section>
          <section className="section_home-masterplan theme-bg-light lifestyle-section py-5 d-none" id="master-plan">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-12 d-block mx-auto">
                  <div className="row">
                    <div className="col-md-12 mb-5">
                      <div className="text-center">
                        <h2 className="text-color-dark-rainforest theme-color-dark mb-md-4 mb-4 m-center text-center">
                          About the Developer
                        </h2>
                        {/* Masterplan Image with Clickable Popup */}
                        <div

                        >
                          <Image
                            src="/images/logo-dark.webp"
                            alt="logo"
                            width={150}
                            height={66}
                            className="logo theme-logo mb-3 d-block mx-auto"
                          />

                          <p className="theme-color-dark text-center">We don&#39;t chase trends - we grow value.<br />
                            With every project, we honour land and its legacy.<br />
                            We build for those who think deeper.</p>

                          <p className="theme-color-dark text-center">At EARA Group, we&#39;re redefining the future of real estate with a strong vision to build premium communities that balance modern living with environmental responsibility. Backed by 20 years of industry experience, our foundation is rooted in sustainability and driven by innovation.
                            <br />
                            We specialize in plotted developments and gated layouts that integrate seamlessly with nature - perfect for those looking for luxury villa plots in Kaggalipura or peaceful plots near Kanakapura Road. Every square foot is planned with precision, combining modern infrastructure, long-term value, and green living at its core.</p>

                        </div>
                      </div>
                    </div>

                    {/* Hidden Columns (optional) */}

                  </div>
                </div>
              </div>
            </div>



          </section>

          <FooterModalForm autoShowTime={1145000} />
        </div >
      </main >

    </>
  );
}
