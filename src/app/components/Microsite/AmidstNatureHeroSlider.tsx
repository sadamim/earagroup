'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function AmidstNatureHeroSlider() {
  return (
    <div id="carouselExampleDark" className="header-section position-relative">
      <div className="row m-0 p-0">
        <div className="col-12 m-0 p-0">
          <div style={{ position: "relative", height: "100vh", width: "100%" }}>
            <div className="video-container w-100 h-100 position-relative" style={{ lineHeight: "0 !important" }}>
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-100 h-100"
              >
              <SwiperSlide className="w-100 h-100">
                <video
                  className="w-100 h-100 object-fit-cover d-md-block d-none"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/desktop-home-video.png"
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
                  preload="metadata"
                  poster="/images/mobile-home-video.png"
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
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
                  <div className="micrositeslidertext">
                    <h1 className="display-4 fw-bold mb-0">
                      Luxury villa plots in Kaggalipura
                    </h1>
                    <p className="lead mb-0 text-center">Crafted for serene living and timeless value.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
