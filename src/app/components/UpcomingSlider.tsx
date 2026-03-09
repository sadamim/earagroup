'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
//import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';
import { useRef, useEffect } from 'react';
// Import your reusable ImageCompare component

import Image from 'next/image';

// --- Component Props Interface (Optional, but good practice) ---
interface ProjectData {
    id: number;
    title: string;
    location: string;
    description: string;
    highlights: string[];
    link: string;
    beforeImg: string; // Used for the ImageCompare component
    afterImg: string; // Used for the ImageCompare component
}

interface DynamicProjectSliderProps {
    projects: ProjectData[];
    sectionTitle: string;
}
// -----------------------------------------------------------------

// This component will now manage the data mapping and Swiper structure
export default function DynamicProjectSlider({ projects, sectionTitle }: DynamicProjectSliderProps) {

    // Correctly define refs for custom elements
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            if (typeof swiper.params.navigation !== 'boolean' && swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
            }
        }
    }, [projects]); // Depend on projects to update Swiper if data changes

    return (
        <section className="same-gap position-relative bg-light theme-bg-dark upcomingProjects">
            <div className="container">
                <div id="upcoming-project" className="noclass" >
                    <div className=" row g-0    ">
                        <div className="title text-center mb-3">
                            <h2 className="text-black mb-4 theme-color-light">{sectionTitle}</h2>
                        </div>

                        </div>
                        <div className=''>
                        <div className="swiper-container relative row px-md-5 ">
                            <Swiper
                                ref={swiperRef}
                                modules={[Autoplay,  Navigation]}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: true
                                }}
                                loop={true}
                                slidesPerView={1}
                                navigation={{
                                    prevEl: prevRef.current,
                                    nextEl: nextRef.current,
                                }}
                              spaceBetween={30}
                                className=""
                            >
                                {/* Map over the passed 'projects' data prop */}
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="row">

                                            {/* LEFT COLUMN: Image Compare (FIXED) */}
                                            <div className="col-md-6 d-flex align-items-center  ">
                                                {/* ✅ Use the ImageCompare component with dynamic props */}
                                                <Image
                                                    alt="upcoming projects"
                                                    src={project.afterImg}
                                                    className='img-fluid w-100'
                                                    width={590}
                                                    height={570}
                                                />
                                            </div>

                                            {/* RIGHT COLUMN: Project Details */}
                                            <div
                                                className="col-md-6 d-flex align-items-center justify-content-center px-3 px-md-4"
                                                data-aos="fade-left"
                                                data-aos-duration={1500}
                                            >
                                                <div>
                                                    <div className="title text-left ">
                                                        <h4 className="text-black my-2 fs-4 theme-color-light fw-bold m-center">
                                                            {project.title}
                                                        </h4>
                                                        <p className="m-center">
                                                            <span className="theme-color-light m-center">
                                                                {/* SVG Location Icon */}
                                                                <svg style={{ width: "20px", height: "20px" }} className="w-8 h-8 theme-color-light m-center" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" /></svg>
                                                                {project.location}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="px-3">
                                                        <p className="text-justify m-center lh-md text-black mt-3 theme-color-light " dangerouslySetInnerHTML={{ __html: project.description }} />
                                                    </div>
                                                    <div className="row align-items-start mb-3 mt-4 mob-center">
                                                        <div className="col-12 text-black">
                                                            <h5 className="mb-1 theme-color-light fs-4 m-center">Key Highlights of the Project:</h5>
                                                            <ul className="text-black ps-3 theme-color-light ps-md-3 ps-5 px-md-0 px-4 homeHighlights">
                                                                {project.highlights.map((highlight, hIndex) => (
                                                                    <li key={hIndex} className="">{highlight}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p className="m-center py-md-0 py-1">
                                                        <a
                                                            href={project.link}
                                                            className="btn theme-bg-light"
                                                        >
                                                            Explore More
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Navigation Buttons (Outside Swiper component) - These control the Swiper slider */}
                            <div className="swiper-buttons absolute inset-0 flex justify-between items-center px-4 z-40 pointer-events-none ">
                                <button
                                    ref={prevRef}
                                    className="swiper-button-prev bg-transparent pointer-events-auto btn"
                                    aria-label="Previous"
                                >
                                   
                                </button>
                                <div
                                    ref={nextRef}
                                    className="swiper-button-next cursor-pointer pointer-events-auto"
                                    aria-label="Next"
                                >
                                    
                                </div>
                            </div>

                            {/* Scrollbar */}
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}