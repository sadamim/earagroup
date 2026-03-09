"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

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

export default function CoreValuesSlider() {
    return (
        <section className="lifestyle-section section theme-bg-light">
            <div className="container-fluid ">
                <div className="row px-md-5 justify-content-center">
                    <div className="title text-center mb-3">
                        <h2 className="text-black mb-4 theme-color-dark fw-bold">
                            Eara Group Core Values
                        </h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 px-3">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={40}
                            slidesPerView={2}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                            }}
                        >
                            {coreValues.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="row mb-5 border border-light shadow ">

                                        <div
                                            className="col-lg-6 text-center corevalue"
                                            style={{
                                                backgroundImage: `url(${item.img})`,
                                               
                                            }}
                                            data-aos="fade-up"
                                            data-aos-duration="1200"
                                        ></div>


                                        {/* Text */}
                                        <div className="col-lg-6 d-flex align-items-center theme-bg-dark py-md-3 py-4" data-aos="fade-left" data-aos-duration="1000">
                                            <div>
                                                <h5 className="theme-color-light text-start m-center fw-bold fs-4 ps-md-4 pe-md-4">
                                                    {item.title}
                                                </h5>
                                                <p className="theme-color-light text-start m-center small ps-md-4 pe-md-4">
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
