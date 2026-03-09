'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function MasterPlanSection() {
    const [isOpen, setIsOpen] = useState(false);

    const amenities = [
        { text: 'Entry/Exit', icon: '/icons/Ear Master Plan Icon-06.webp' },
        { text: 'Entrance Archway', icon: '/icons/Ear Master Plan Icon-07.webp' },
        { text: 'Roundabout', icon: '/icons/Ear Master Plan Icon-08.webp' },
        { text: 'Pet Park', icon: '/icons/Ear Master Plan Icon-05.webp' },
        { text: 'Tennis Court', icon: '/icons/Ear Master Plan Icon-04.webp' },
        { text: 'Multipurpose Court', icon: '/icons/Ear Master Plan Icon-03.webp' },
        { text: 'Open Park', icon: '/icons/Ear Master Plan Icon-01.webp' },
        { text: 'Kids Play Area', icon: '/icons/Ear Master Plan Icon-09.webp' },
        { text: 'Clubhouse', icon: '/icons/Ear Master Plan Icon-02.webp' },
        { text: 'Community Seating', icon: '/icons/Ear Master Plan Icon-10.webp' },
        { text: 'Box Cricket', icon: '/icons/Ear Master Plan Icon-06.webp' },
        { text: 'Parking', icon: '/icons/Ear Master Plan Icon-07.webp' },
        { text: 'Bird Watching Zone', icon: '/icons/Ear Master Plan Icon-08.webp' },
        { text: 'Amphitheatre', icon: '/icons/Ear Master Plan Icon-05.webp' },
        { text: 'Multipurpose Lawn', icon: '/icons/Ear Master Plan Icon-04.webp' },
        { text: 'Senior Citizen Park', icon: '/icons/Ear Master Plan Icon-03.webp' },
        { text: 'Padel Tennis', icon: '/icons/Ear Master Plan Icon-01.webp' },
        { text: 'Garden Pavilion', icon: '/icons/Ear Master Plan Icon-09.webp' },
        { text: 'Leisure Park', icon: '/icons/Ear Master Plan Icon-02.webp' },
        { text: 'Miyawaki Forest', icon: '/icons/Ear Master Plan Icon-02.webp' },
        { text: 'Avenue Plantation', icon: '/icons/Ear Master Plan Icon-10.webp' },
        { text: 'Outdoor Gym', icon: '/icons/Ear Master Plan Icon-06.webp' },
        { text: 'Services', icon: '/icons/Ear Master Plan Icon-07.webp' }
    ];

    const col1 = amenities.slice(0, 6);
    const col2 = amenities.slice(8, 14);
    const col3 = amenities.slice(15, 21);

    const renderAmenityColumn = (column, startNumber) => (
        <div className="col-md-4">
            {column.map((item, index) => (
                <div key={index} className="mb-4 d-flex align-items-center m-center ps-0 ps-md-3">
                    <div className="d-flex align-items-center justify-content-center">
                        <span
                            className="accent-bg theme-color-light rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{ width: "34px", height: "34px", fontSize: "14px", flexShrink: 0 }}
                        >
                            {startNumber + index}
                        </span>
                        <div className="amenity-text theme-color-dark fw-semibold d-flex align-items-center justify-content-center">
                            <p className="mb-0 lh-sm text-start m-center">{item.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section className="section_home-masterplan theme-bg-light lifestyle-section py-5" id="master-plan">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12 d-block mx-auto">
                        <div className="row">
                            <div className="col-md-12 mb-5 d-flex align-items-center">
                                <div className="text-center">
                                    <h2 className="text-color-dark-rainforest theme-color-dark mb-md-0 mb-5 m-center">
                                        Master Plan
                                    </h2>
                                    {/* Masterplan Image with Clickable Popup */}
                                    <div
                                        className="position-relative cursor-pointer"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        <Image
                                            width={633}
                                            height={444}
                                            src="/images/Master-Plan_New.avif"
                                            loading="lazy"
                                            alt="Eara Master Plan"
                                            className="w-100 img-fluid mt-md-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Hidden Columns (optional) */}
                            <div className="col-md-12 px-md-4 d-none">
                                <div>
                                    <div className="row justify-content-center text-start d-none">
                                        {renderAmenityColumn(col1, 1)}
                                        {renderAmenityColumn(col2, 9)}
                                        {renderAmenityColumn(col3, 16)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Popup / Modal */}
            {isOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 2000 }}
                    onClick={() => setIsOpen(false)}
                >
                    <div className="position-relative">
                        <Image
                            src="/images/Master-Plan_New.avif"
                            width={900}
                            height={700}
                            alt="Master Plan Popup"
                            className="img-fluid rounded"
                            style={{cursor:"pointer !important"}}
                        />
                        <button
                            className="position-absolute top-0 end-0 btn btn-sm btn-light"
                            style={{ fontWeight: 'bold' }}
                            onClick={() => setIsOpen(false)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
