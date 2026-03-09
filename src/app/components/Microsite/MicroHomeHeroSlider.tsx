'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    type: 'video',
    desktopVideo: '/images/Project.mp4',
    mobileVideo: '/images/Project-mobile.mp4',
    desktopImg: '/images/Eara_banner-image.webp',
    mobileImg: '/images/Eara_banner-image.webp',
  },
  {
    type: 'image',
    desktopImg: '/images/Eara_banner-image.webp',
    mobileImg: '/images/Eara_banner-image.webp',
    heading: ' Luxury villa plots in Kaggalipura    ',
    subheading: 'Crafted for serene living and timeless value.    ',
  },
];
export default function MicroHomeHeroSlider() {
  return (
    <div className="overflow-hidden position-relative">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade, Pagination]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        autoplay={{ delay: 6000 }}
        className="custom-swiper"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="position-relative min-vh-100">
              {/* 🎥 VIDEO SLIDE */}
              {slide.type === 'video' && (
                <>
                  {/* Desktop Video */}
                  <video
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover d-none d-md-block"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={slide.desktopImg}
                  >
                    <source src={slide.desktopVideo} type="video/mp4" />
                  </video>

                  {/* Mobile Video */}
                  <video
                    className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover d-block d-md-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={slide.mobileImg}
                  >
                    <source src={slide.mobileVideo} type="video/mp4" />
                  </video>
                </>
              )}

              {/* 🖼️ IMAGE SLIDE */}
              {slide.type === 'image' && (
                <>
                  <Image
                    src={slide.desktopImg}
                    alt="Slide background"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: -1 }}
                    className="d-none d-md-block"
                  />
                  <Image
                    src={slide.mobileImg}
                    alt="Slide background mobile"
                    fill
                    priority
                    style={{ objectFit: 'cover', zIndex: -1 }}
                    className="d-block d-md-none"
                  />

                  {/* Overlay */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

                  {/* ✅ Centered Text using Bootstrap 5.3 */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
                    <h1 className="display-4 fw-bold mb-0">
                      {slide.heading}
                    </h1>
                    <p className="lead mb-0">{slide.subheading}</p>
                  </div>
                </>
              )}
            </div>
          </SwiperSlide>
        ))}

        {/* ⬅️➡️ Swiper Navigation Buttons */}
        <div className="swiper-button-prev text-white" />
        <div className="swiper-button-next text-white" />
      </Swiper>
    </div>
  );
}