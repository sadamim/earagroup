"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const menuItems = [
  { id: 0, label: "People First", image: "/images/core/People First.webp", text: "We put human well-being, happiness and meaningful experiences at the heart of everything we create.", },
  { id: 1, label: "Excellence", image: "/images/core/Excellence.webp", text: "We pursue the highest standards in quality, design, service, innovation and execution.", },
  { id: 2, label: "Sustainability", image: "/images/core/Sustainability.webp", text: "We build responsibly, respecting nature and creating solutions that contribute to a healthier planet and a better tomorrow.", },
  { id: 3, label: "Integrity", image: "/images/core/Integrity.webp", text: "We operate with transparency, accountability, trust and ethical responsibility in every relationship.", },
  { id: 4, label: "Innovation", image: "/images/core/Innovation.webp", text: "We continuously challenge conventional thinking to create smarter, more relevant and future-ready solutions.", },
];

export default function RealEstateHero() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    if (!swiperRef || swiperRef.realIndex === index) return;
    swiperRef.slideToLoop(index);
    setActiveIndex(index);
  };

  return (
    <section className="hero-section p-0 pt-5">
      <div className="container-fluid p-0 section-start">
        <div className="row  justify-content-center">
          <div className="title text-center mb-3">
            <h2 className="text-black  theme-color-dark fw-bold">
              Our Core Values
            </h2>
          </div>
        </div>
        {/* g-0 is critical to remove the gap between menu and slider */}
        <div className="row g-0 align-items-stretch">

          {/* LEFT MENU - col-md-4 ensures a 1/3 width */}
          <div className="col-md-4 ps-md-5">
            <div className="hero-menu ps-md-5">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className={`hero-menu-item ${activeIndex === index ? "active" : ""}`}
                  onMouseEnter={() => handleChange(index)}
                  onClick={() => handleChange(index)}
                >
                  <h2 className="menu-text mb-0">{item.label}</h2>
                  {/* Arrow is absolute positioned to the right edge */}
                  <div className="menu-arrow" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SLIDER - col-md-8 takes the remaining 2/3 width */}
          <div className="col-md-8">
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              speed={2000}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              onSwiper={setSwiperRef}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="hero-swiper p-0"

            >
              {menuItems.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="hero-slide">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="hero-image"
                    />
                    <div className="white-overlay">
                      <div className="">
                        <p className="text-white fs-5 position-absolute bottom-0 start-50 translate-middle-x w-100 text-center px-3 px-md-5 mb-5">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}