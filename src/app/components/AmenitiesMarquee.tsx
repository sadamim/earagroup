'use client';

import Image from 'next/image';

const amenities = [
    {
        icon: '/icons/Landscape Greenery.png',
        title: 'Acupressure Walkway',
        alt: 'Acupressure walkway at Amidst Nature plotted development'
    },
    {
        icon: '/icons/Half Basketball Court.png',
        title: 'Half Basketball Court',
        alt: 'Half basketball court at Amidst Nature Kaggalipura'
    },
    {
        icon: '/icons/CCTV surveillance.png',
        title: 'CCTV Surveillance',
        alt: 'CCTV surveillance and 24/7 security at Amidst Nature'
    },
    {
        icon: '/icons/Landscaped Gardens.png',
        title: 'Landscaped Gardens',
        alt: 'Open landscaped spaces at Amidst Nature plotted community'
    },
    {
        icon: '/icons/Multi-Purpose Court.webp',
        title: 'Multi Purpose Lawn',
        alt: 'Multi purpose lawn at Amidst Nature villa plots'
    },
    {
        icon: '/icons/pool.webp',
        title: 'Swimming Pool',
        alt: 'Luxury swimming pool at Amidst Nature Kaggalipura'
    },
    {
        icon: '/icons/Amphitheater.png',
        title: 'Amphitheater',
        alt: 'Amphitheater at Amidst Nature villa plots community'
    },
    {
        icon: '/icons/Seating Area.png',
        title: 'Sitting Area With Pavillion',
        alt: 'Seating area with pavilion at Amidst Nature'
    },
    {
        icon: '/icons/Play Area for Kids.png',
        title: 'Play Area for Kids',
        alt: 'Kids play area at Amidst Nature plotted development'
    },
    {
        icon: '/icons/elder_s corner.png',
        title: "Elder's Corner",
        alt: 'Wellness-focused lifestyle spaces for elders at Amidst Nature'
    },
    {
        icon: '/icons/Water Feature.png',
        title: 'Gazebos',
        alt: 'Gazebos and serene green surroundings at Amidst Nature'
    },
    {
        icon: '/icons/Event Lawn.png',
        title: 'Event Lawn',
        alt: 'Event lawn at gated community villa plots in Kaggalipura Bangalore'
    },
    {
        icon: '/icons/Jogging track.png',
        title: 'Jogging Tracks',
        alt: 'Jogging tracks for wellness-focused lifestyle at Amidst Nature'
    },
    {
        icon: '/icons/Butterfly Garden.png',
        title: 'Butterfly Garden',
        alt: 'Butterfly garden with serene green surroundings at Amidst Nature'
    },
    {
        icon: '/icons/Community Park & Space.png',
        title: 'Community Park & Space',
        alt: 'Community park and open landscaped spaces at Amidst Nature'
    },
    {
        icon: '/icons/Clubhouse.png',
        title: 'Clubhouse',
        alt: 'Luxury clubhouse at Amidst Nature Kaggalipura'
    },
    {
        icon: '/icons/247 security.png',
        title: '24/7 Security',
        alt: 'Safe gated community with 24/7 security in Kaggalipura'
    },
    {
        icon: '/icons/Devine place.png',
        title: 'Devine Place',
        alt: 'Peaceful divine place at Amidst Nature plotted community'
    },
    {
        icon: '/icons/Pickle ball court.png',
        title: 'Pickle Ball Court',
        alt: 'Pickle ball court at Amidst Nature villa plots'
    },
    {
        icon: '/icons/cricketpractice-pitch.webp',
        title: 'Cricket Pitch',
        alt: 'Cricket pitch at Amidst Nature plotted development'
    },
    {
        icon: '/icons/Half through ball court.png',
        title: 'Half Through Ball Court',
        alt: 'Half throw ball court at Amidst Nature Kaggalipura'
    },
    {
        icon: '/icons/Gym.png',
        title: 'Outdoor Gym',
        alt: 'Outdoor gym for wellness-focused lifestyle at Amidst Nature'
    },
];

export default function AmenitiesSection() {
    return (
        <section className="py-0 mb-3 position-relative blog">
            <div className="container text-center">
                <div className="row g-4 ">
                    {amenities.map((item, idx) => (
                        <div key={idx} className="col-6 col-sm-6 col-md-3 col-lg-2 ">
                            <div className="p-3 border rounded-3 shadow-sm bg-white theme-bg-dark h-100 d-flex flex-column align-items-center justify-content-center amenity-card">
                                <Image
                                    src={item.icon}
                                    alt={item.alt}
                                    width={50}
                                    height={50}
                                />
                                <p className="small mt-2 text-center theme-color-light">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* Master Plan Image */}
                    {/* 
                    <Image
                        width={800}
                        height={200}
                        src="/images/page-2.png"
                        loading="lazy"
                        alt="Amidst Nature master plan — BMRDA approved villa plots layout Kaggalipura"
                        className="home-masterplan_img img-fluid bg-transparent mt-3 rounded-3"
                        style={{
                            marginTop: "30px",
                            maxHeight: "475px",
                            objectFit: "cover",
                            objectPosition: "bottom bottom",
                            position: "absolute",
                            opacity: ".2"
                        }}
                    /> 
                    */}
                </div>
            </div>
        </section>
    );
}