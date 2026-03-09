//"use client";
//import { useEffect } from "react";
import "./homepage.css";
import Link from "next/link";
import { posts } from "./data/posts";
import Preloader from "./components/Preloader";
import UpcomingSlider from "./components/UpcomingSlider";
// import HomeHeroSlider from "./components/Home/HeroSlider";
import Image from "next/image";
import TestimonialSlider from "./components/Home/TestimonialSlider";
import LatestBlogs from "./components/LatestBlogs";
import CoreValuesSlider from "./components/CoreValuesSlider";
import Ongoing from "./components/Ongoing";
import ImageCompare from "./components/ImageCompare";
import RealEstateHero from "./components/RealEstateHero";
export const metadata = {
  title: "Eara Group - Luxury Villa Plots for Sale in Kanakapura Road.",
  description:
    "Discover Eara Group's luxury villa plots for sale in Kanakapura Road. Build your dream home amidst nature with premium amenities & great connectivity.",
  keywords:
    "Eara Group, Luxury villa plots for sale in Kanakapura Main Road, Plots for Sale in Kanakapura Main Road, Villa plots sale near Kanakapura Main Road, Premium villa plots for sale in Kaggalipura",
  alternates: {
    canonical: "https://earagroup.com/",
  },
  other: {
    "link:preload": [
      {
        rel: "preload",
        as: "image",
        href: "/images/hero-image-edit-4-new.avif",
        type: "image/avif",
      },
      {
        rel: "preload",
        as: "image",
        href: "/images/mobile-img.avif",
        type: "image/avif",
      },
      {
        rel: "preload",
        as: "image",
        href: "/images/Green-thinking-2.avif",
        type: "image/avif",
      },
    ],
  },
};

export default function Home() {
  // In the page where you want to display the slider (e.g., HomePage.js)

  const upcomingProjects = [
    {
      id: 1,
      title: "Ultra Luxury Plotted Development (Phase I)",
      location: "Kaggalipura, Off Kanakapura Main Road",
      description:
        "The project is nestled just Off Kanakapura Main Road, thoughtfully designed to offer a blend of serene living and modern infrastructure.",
      highlights: [
        "Plot sizes ranging from 1500 - 3300 sq ft.",
        "11,000 sqft. clubhouse with gym, pool, yoga room, caf&eacute; & library",
        "Indoor and outdoor party zones",
        "Sacred space, amphitheatre, elders&rsquo; park, children&rsquo;s play area",
        "Cricket pitch & pickleball court",
        "Underground electrical cabling & LED streetlights",
        "Rainwater harvesting & sewage treatment plant",
        "Avenue plantation & landscaped green zones",
      ],
      link: "#",
      // Crucial image props for the ImageCompare component
      beforeImg: "/images/upcoming-projects.png",
      afterImg: "/images/upcoming-projects.avif",
    },
    {
      id: 2,
      title: "Ultra Luxury Plotted Development (Phase II)",
      location: "Kaggalipura, Off Kanakapura Main Road",
      description:
        "The project is nestled just Off Kanakapura Main Road, thoughtfully designed to offer a blend of serene living and modern infrastructure.",
      highlights: [
        "Plot sizes ranging from 1500 - 3300 sq ft.",
        "11,000 sqft. clubhouse with gym, pool, yoga room, caf&eacute; & library",
        "Indoor and outdoor party zones",
        "Sacred space, amphitheatre, elders&rsquo; park, children&rsquo;s play area",
        "Cricket pitch & pickleball court",
        "Underground electrical cabling & LED streetlights",
        "Rainwater harvesting & sewage treatment plant",
        "Avenue plantation & landscaped green zones",
      ],
      link: "#",
      // Crucial image props for the ImageCompare component
      beforeImg: "/images/upcoming-projects.png",
      afterImg: "/images/upcoming-projects.avif",
    },
  ];

  return (
    <>

      <main className="main-wrapper">
        <h1 className="d-none" style={{ display: "none" }}>Eara Group</h1>
        <div className="overflow-clip" id="main-slider">
          <div
            id="carouselExampleDark"
            className="header-section position-relative"
          >
            <div className="row">
              <div className="col-md-12">
                <div
                  className="video-container position-relative "
                  style={{ lineHeight: "0 !important" }}
                >
                 

                  <video
                    className="w-100 h-100 object-fit-cover d-none d-md-block"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    fetchPriority="high"
                    // poster="/images/desktop-home-video.png"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source
                      src="/images/Eara Nature Web Video_2.mp4"
                      style={{
                        objectFit: "cover",
                        height: "100vh",
                        width: "100%",
                      }}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  <video
                    className="w-100 h-100 object-fit-cover d-md-none"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    // poster="/images/mobile-home-video.webp" // fallback image before video loads
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <source
                      src="/images/Eara-WebsiteHmeBannerMobileVersion.mp4"
                      style={{
                        objectFit: "cover",
                        height: "100vh",
                        width: "100%",
                      }}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        <div id="scroll-more">
          <section className="section-1  px-3 theme-bg-light homehome">
            <div className="container">
              <div className="row ">
                <div className="col-md-5 offset-md-6 ">
                  <h2 className="mb-0 theme-color-dark">
                    Green Thinking.<br /> Luxurious Living.
                  </h2>
                  <span className="fs-4 theme-color-dark">
                    Because true luxury is not loud. It&rsquo;s peaceful.
                  </span>
                  <p className="mt-3 theme-color-dark m-center">
                    At EARA Group, we&rsquo;re redefining the future of real
                    estate with a strong vision to build premium communities
                    that balance modern living with environmental
                    responsibility.
                  </p>
                  <p className=" m-center">
                    Backed by 20+ years of industry experience, our foundation
                    is rooted in sustainability and driven by innovation. We
                    specialise in developing real estate projects designed to
                    integrate seamlessly with nature. Every square foot is
                    planned with precision, combining modern infrastructure,
                    long-term value, and green living at its core.
                  </p>
                  <div className="text-start m-center mb-md-5 pb-4">
                    <Link
                      href="/about"
                      className="btn btn-primary  border mt-1 mt-md-3  mb-md-5 "
                    >
                      {" "}
                      Explore More
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 d-md-none ">
                  <div className="" style={{ minHeight: "100px" }}>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="same-gap position-relative bg-light theme-bg-dark up-coming d-none">
            <div className="container">
              <div
                id="upcoming-project"
                className="noclass"
                data-bs-ride="carousel"
              >
                <div className="row">
                  <div className="title text-center mb-3">
                    <h2 className="text-black mb-4 theme-color-light">
                      Ongoing Project
                    </h2>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-6 px-md-5 px-md-0 text-center">
                    <Image src="/images/upcoming-projects.avif" className="img-luid" width={550} height={470} alt="ongoing projects" />
                    {/* <ImageCompare
                      beforeImg="/images/upcoming-projects.webp"
                      afterImg="/images/upcoming-projects.avif"
                    /> */}

                  </div>
                  <div
                    className="col-md-5 px-md-3 px-3 py-3 d-flex align-items-center"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <div>
                      <div className="title text-left ">
                        <h4 className="text-black my-2 fs-4 theme-color-light fw-bold m-center">
                          Ultra Luxury Plotted Development
                        </h4>
                        <p className="m-center">
                          <span className="theme-color-light  m-center">
                            <svg
                              style={{ width: "20px", height: "20px" }}
                              className="w-8 h-8 theme-color-light m-center"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 640"
                            >
                              <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                            </svg>
                            Kaggalipura, Off Kanakapura Main Road
                          </span>
                        </p>
                      </div>
                      <div className="">
                        <p className="text-justify m-center lh-md text-black mt-3 theme-color-light ">
                          The project is nestled just Off Kanakapura Main Road,
                          thoughtfully designed to offer a blend of
                          serene living and modern infrastructure.
                        </p>
                      </div>
                      <div className="row align-items-start mb-3 mt-4 mob-center">
                        <div className="col-12 text-black">
                          <h5 className="mb-3 theme-color-light fs-4  m-center">
                            Key Highlights of the Project:
                          </h5>
                          <ul className="text-black ps-3 theme-color-light  ps-md-3 ps-5 px-md-0 px-4 homeHighlights">
                            <li className="">
                              Plot sizes ranging from 1500 - 3300 sq ft.
                            </li>
                            <li className="">
                              11,000 sqft. clubhouse with gym, pool, yoga room,
                              caf&eacute; & library
                            </li>
                            <li className="">Indoor and outdoor party zones</li>
                            <li className="">
                              Sacred space, amphitheatre, elders&rsquo; park,
                              children&rsquo;s play area
                            </li>
                            <li className="">
                              Cricket pitch & pickleball court
                            </li>
                            <li className="">
                              Underground electrical cabling & LED streetlights
                            </li>
                            <li className="">
                              Rainwater harvesting & sewage treatment plant
                            </li>
                            <li className="">
                              Avenue plantation & landscaped green zones
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="m-center py-md-0 py-1">
                        <a href="/amidstnature" className="btn btn-primary">
                          Explore More
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          {/* Section 2: 360 Lifestyle Cards */}
          {/* <CoreValuesSlider /> */}
          <RealEstateHero />
          <TestimonialSlider />
          {/* Section 4: Blog Section */}

          <section className=" px-3 theme-bg-light blog">
            <div className="container">
              <h2 className="text-center theme-color-dark">LATEST BLOGS</h2>

              <div className="blog-grid">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.slug} className="blog-card theme-bg-dark">
                    <Image
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      width={578}
                      height={200}
                      style={{ objectFit: "cover" }}
                      className="w-100 h-auto object-cover rounded-0"
                    />

                    <div className="content">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-decoration-none"
                      >
                        <h4
                          className="theme-color-light text-center cursor-pointer fs-5"
                          style={{ fontWeight: 600 }}
                        >
                          {post.title}
                        </h4>
                      </Link>


                      <p className=' mb-0 theme-color-light' dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                      <div className="text-center pt-5 mb-3 my-3 small mt-auto">
                        <Link href={`/blog/${post.slug}`} className="btn btn-primary">Read More</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </section>
        </div>
      </main>
    </>
  );
}
