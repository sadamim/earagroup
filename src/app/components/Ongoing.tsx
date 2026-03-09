'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Scrollbar, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const slides = [
 { src: "/images/upcoming-projects.png", alt: "Gallery Image 1" },
 { src: "/images/upcoming-projects.avif", alt: "Gallery Image 2" },
];

export default function Ongoing() {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  return (
 
     

       <>
          <Swiper
            modules={[Autoplay, Scrollbar, Pagination, Navigation]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            scrollbar={{
              el: '.swiper-scrollbar',
              draggable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            className="rounded-xl overflow-hidden px-md-3 mx-4"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1920}
                  height={1080}
                  className="img-fluid rounded-xl mb-3"
                  loading="lazy"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setPopupImage(slide.src)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

         
          <div
            className="swiper-button-prev"
            style={{
              color: '#000',
              left: '-10px',
              zIndex: 10,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          ></div>
          <div
            className="swiper-button-next"
            style={{
              color: '#000',
              right: '-10px',
              zIndex: 10,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          ></div>
      
      </>

     
  
  );
}
