import Image from "next/image";
import Link from "next/link";
import "./../about.css";
import TestimonialSlider from "../components/Home/TestimonialSliderAbout";
import WhatSetsUsApart from "../components/WhatSetsUsApart";
export const metadata = {
  title: 'Premium Residential Plots in Kanakapura Main Road - Eara Group',
  description: 'Discover Premium Villa Plots in Kanakapura Main Road by Eara Group. Invest in spacious, well-planned plots with excellent connectivity and modern amenities.',
  keywords: 'BMRDA Residential Plot in Kanakapura Main Road, Premium Villa Plots in Kanakapura Main Road, Premium Residential Plots in Kanakapura Main Road, Plots for Sale in Kanakapura Main Road',
  alternates: {
    canonical: 'https://earagroup.com/about/',
  },
};
export default function About() {

  return (
    <>
      <div id="carouselExampleDark" className="header-section ">
        <div className="row">
          <div className="col-md-12">
            <div className="image-container">
              <Image
                src="/images/Abouts us_EARA.webp"
                height={2880}
                width={1920}
                className="img-fluid masterpiece"
                alt="masterpiece"
                style={{ objectPosition: "bottom" }}
              />
              <div className="overlay2 ">
                <div className="text-white d-block text-brown">
                  {" "}
                  <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                    {" "}
                    About us
                  </h1>
                  <p className="text-center d-block fs-6 d-none">
                    <Link
                      className="text-white text-decoration-none text-brown"
                      href="/"
                    >
                      {" "}
                      Home
                    </Link>{" "}
                    / About Us{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* <div id="carouselExampleDark" className="header-section position-relative">
        <div className="row">
          <div className="col-md-12">
            <div className="video-container position-relative">
              <video
                className="w-100 h-100 object-fit-cover d-md-block d-none"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                // poster="/images/About_new copy_Eara.avif"
                style={{
                  objectFit: "cover",
                  height: "100% !important",
                  width: "100%",
                }}
              >
                <source src="/images/Aboutus.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video
                className="w-100 h-100 object-fit-cover d-md-none"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                // poster="/images/About_new copy_Eara.avif"
                style={{
                  objectFit: "cover",
                  height: "auto !important",
                  width: "100%",
                }}
              >
                <source src="/images/abou-mobile.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="overlay2 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-brown">
                <h1 className="text-center fs-1 mb-3 text-uppercase">About Us</h1>

              </div>
            </div>
          </div>
        </div>
      </div> */}

      <section className="theme-bg-light section pb-0" id="TOP">
        <div className="container-fluid">
          <div className="row">
           
            <div className="col-md-12">
              <div className=" text-center ">
                <h2
                  data-animate={2}
                  className="heading-style-h2 mb-1 text-center theme-color-dark"
                >
                  Welcome to <strong >Eara Group</strong>, where vision meets
                  reality.
                </h2>
                <p className="theme-color-dark text-size-regular theme-color-dark fs-5 mb-0 w-75 d-block mx-auto text-center">Join us on our journey as we continue to shape the landscapes of tomorrow and create spaces where dreams thrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4  theme-bg-light mb-4">
        <div className="container">
          <div className="row">
             <div className="col-md-6">
              <Image src="/images/About_us2.webp" className="img-fluid p-3" width={636} height={421} alt="about" />
            </div>
            <div className="col-md-6  pt-4 py-5 d-flex align-items-center">
              <div>
                <h2 className="mb-2 theme-color-dark fs-2 text-center">About Us</h2>
               <p className="mb-2 theme-color-dark">
  EARA Group is a progressive real estate development company dedicated to creating exceptional living environments that harmonize luxury with nature. With a strong commitment to quality, sustainability, and thoughtful design, we develop spaces that enrich lifestyles and stand the test of time.
</p>

<p className="mb-2 theme-color-dark">
 Our philosophy goes beyond building properties. We believe in crafting communities where architecture, environment, and lifestyle come together seamlessly.
</p>

<p className="mb-5 theme-color-dark">
 Our philosophy goes beyond building properties. We believe in crafting communities where architecture, environment, and lifestyle come together seamlessly.  <br/> <br/> Every EARA development reflects meticulous planning, superior infrastructure, and a vision for future-ready living.
</p>

              </div>
            </div>
          </div>

        </div>
        <Image
          alt="Luxury interior"
          width={648}
          height={338}
          className="img-fluid  m-0 d-md-none"
          src="/images/about-mobile-banner.png"
          style={{ objectFit: "cover", objectPosition: "center", minHeight: "350px", marginTop: "-20% !important" }}
        />
      </section>


      <section id="" className="section_amenities-hero theme-bg-dark page-about-mv section">
        <div className="padding-global">
          <div className="container-large">


            {/* Mission & Vision Section */}
            <div className="noclass" >
              <div className="container">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <div className=" text-center ">
                      <h2 className="mb-1 theme-color-light">Our Mission &amp; Vision</h2>
                      <p className="theme-color-light fs-5 mx-auto d-block text-center">What drives us forward and what we aim to achieve</p>
                    </div>
                  </div>
                </div>

                <div className="row my-3 ">
                  <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light" >
                    <div className="text-center">
                      <h3 className="fw-bold theme-color-dark">Our Mission</h3>
                      <p className="theme-color-dark">
                        To develop world-class residential environments that combine thoughtful design, environmental responsibility, and long-term value for our customers and stakeholders.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light" >
                    <div className="text-center">
                      <h3 className="fw-bold theme-color-dark">Our Vision</h3>
                      <p className="theme-color-dark">
                        To create sustainable communities that redefine luxury living and inspire future generations.
                      </p>
                    </div>
                  </div>
                   <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light mt-5" >
                    <div className="text-center">
                      <h3 className="fw-bold theme-color-dark">Our Philosophy
</h3>
                      <p className="theme-color-dark">
                       At EARA Group, we believe true luxury lies in balance — the balance between modern living and the natural world. <br/>
Our developments are designed to foster well-being, community, and environmental harmony while delivering uncompromising quality.

                      </p>
                    </div>
                  </div>
                  

                   {/* Our Developments */}
  <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light mt-5" >
    <div className="text-center">
      <h3 className="fw-bold theme-color-dark">Our Developments</h3>

      <p className="theme-color-dark">
        EARA Group focuses on developing premium plotted communities and
        lifestyle destinations in carefully chosen locations that offer
        both natural beauty and strong investment potential.
      </p>

      <p className="theme-color-dark">
        Each project reflects our commitment to sustainable development,
        world-class infrastructure, and timeless design.
      </p>
    </div>
  </div>

  {/* Sustainability */}
   <div className="col-md-5 d-block mx-auto  px-md-5 py-md-5 py-4 bg-white mb-3 theme-bg-light mt-5" >
    <div className="text-center">
      <h3 className="fw-bold theme-color-dark">Sustainability</h3>

      <p className="theme-color-dark">
        Sustainability is not an option — it is a responsibility.
      </p>

      <p className="theme-color-dark">
        EARA Group integrates environmentally conscious practices across
        every stage of development. From green infrastructure and water
        conservation systems to eco-friendly materials and landscape
        preservation, our projects are designed to create a healthier
        future for generations to come.
      </p>
    </div>
  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </section>
    <WhatSetsUsApart/>

    






      {/* <TestimonialSlider
         sectionClass = " px-3 bg-light theme-bg-light testimonials-light"
  headingClass = "text-center mb-4 fw-bold theme-color-light"
  cardClass = "info-box px-5 py-5 bg-white theme-bg-dark shadow-sm h-100 rounded d-flex flex-column justify-content-between mb-md-5"
  textClass = "theme-color-dark my-3 lh-lg"
  nameClass = "text-center fw-bold theme-color-dark fw-bold mt-auto "
      /> */}

      


    </>
  );
}
