'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Thumbs, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const slides = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/progress/Images${i + 1}.webp`,
  alt: `Construction Image ${i + 1}`,
}));

export default function Construction() {
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  const handleSlideClick = useCallback(
    (src: string, index: number) => {
      mainSwiper?.slideToLoop(index, 500);
      setPopupImage(src);
    },
    [mainSwiper]
  );

  const handleThumbScroll = useCallback(
    (swiper: any) => {
      if (mainSwiper && !swiper.params.cssMode) {
        mainSwiper.slideToLoop(swiper.realIndex, 0);
      }
    },
    [mainSwiper]
  );

  const renderedSlides = useMemo(
    () =>
      slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1080}
            className="img-fluid rounded-xl"
            loading="lazy"
            fetchPriority={index === 0 ? 'high' : 'auto'}
            style={{ cursor: 'zoom-in', width: '100%', height: 'auto' }}
            onClick={() => handleSlideClick(slide.src, index)}
          />
        </SwiperSlide>
      )),
    [handleSlideClick]
  );

  return (
    <section
      className="gallery-section same-gap construction theme-bg-light py-5"
      id="const"
    >
      <div className="container">
        <div className="title text-center mb-4">
          <h2 className="theme-color-dark">Project Progress</h2>
        </div>

        <div className="row">
          {/* Main Swiper */}
          <div className="col-md-8 position-relative d-flex align-items-center">
            <Swiper
              onSwiper={setMainSwiper}
              modules={[Autoplay, Navigation, Thumbs]}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop
              spaceBetween={15}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-main-construction',
                prevEl: '.swiper-button-prev-main-construction',
              }}
              thumbs={{ swiper: thumbsSwiper }}
              className="main-construction-swiper rounded-xl overflow-hidden"
            >
              {renderedSlides}

              {/* Navigation Buttons (Mobile only) */}
              <div className="swiper-button-prev swiper-button-prev-main-construction theme-bg-dark d-md-none" />
              <div className="swiper-button-next swiper-button-next-main-construction theme-bg-dark d-md-none" />
            </Swiper>
          </div>

          {/* Thumbnails Swiper */}
          <div className="col-md-4 d-md-flex d-none align-items-center position-relative">
            <Swiper
              modules={[Navigation, Thumbs, Mousewheel]}
              onSwiper={setThumbsSwiper}
              direction="vertical"
              spaceBetween={20}
              slidesPerView={2}
              freeMode
              watchSlidesProgress
              loop
              mousewheel
              onSlideChangeTransitionEnd={handleThumbScroll}
              navigation={{
                nextEl: '.swiper-button-next-thumbs-construction',
                prevEl: '.swiper-button-prev-thumbs-construction',
              }}
              className="mySwiper-thumbs-construction h-100"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={350}
                    height={186}
                    className="img-fluid rounded-2 swiper-thumb-image-construction"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Popup Lightbox */}
      {popupImage && (
        <div
          className="popup-overlay"
          onClick={() => setPopupImage(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <div className="popup-inner">
            <Image
              src={popupImage}
              alt="Popup Image"
              width={1920}
              height={1080}
              className="popup-img"
            />
            <button
              onClick={() => setPopupImage(null)}
              className="popup-close"
              aria-label="Close popup"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Thumbnails */
        .mySwiper-thumbs-construction {
          height: 100%;
          max-height: 400px;
        }
        .swiper-thumb-image-construction {
          transition: transform 0.3s, opacity 0.3s;
          opacity: 0.6;
          cursor: pointer;
        }
        .mySwiper-thumbs-construction .swiper-slide-thumb-active .swiper-thumb-image-construction {
          opacity: 1;
          transform: scale(1.05);
          border: 3px solid var(--theme-color-dark, #000);
        }

        /* Main Slider Nav Buttons */
        .swiper-button-prev-main-construction,
        .swiper-button-next-main-construction {
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-prev-main-construction::after,
        .swiper-button-next-main-construction::after {
          font-size: 1rem;
        }

        /* Lightbox */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          cursor: zoom-out;
        }
        .popup-inner {
          position: relative;
          max-width: 90%;
          max-height: 90%;
        }
        .popup-img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
        .popup-close {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          color: #fff;
          border: none;
          font-size: 2rem;
          cursor: pointer;
        }
        .swiper-button-prev-main-construction {
          left: 10px !important;
          top:55% !important;
        }
        .swiper-button-next-main-construction {
          right: 10px !important;
          top:55% !important;
        }
      `}</style>
    </section>
  );
}
