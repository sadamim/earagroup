import Image from "next/image";
import Link from "next/link";
import "./../project.css";
import TestimonialSlider from "../components/Home/TestimonialSlider";
export const metadata = {
    title: 'Amidst Nature Location: Luxury Living on Kanakapura Main Road',
    description: 'Discover serenity at Amidst Nature, Kanakapura Main Road. Enjoy lush greenery, peaceful surroundings, and modern comforts in this beautiful, tranquil location.',
    keywords: 'Amidst Nature Address, Amidst Nature Reviews, Amidst Nature Price, Amidst Nature Kanakapura Main Road',
    alternates: {
        canonical: 'https://earagroup.com/project/',
    },
};
export default function Project() {
    return (
        <>
            {/* Header Section */}
            {/* <div id="carouselExampleDark" className="header-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container">
                            <Image
                                src="/images/project-header.webp"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece"
                                alt="Projects Banner"
                            />
                            <div className="overlay2">
                                <div className="text-white d-block">
                                    <h1 className="text-center d-block fs-1 mb-3 text-uppercase">
                                        Our Projects
                                    </h1>
                                    <p className="text-center d-block fs-6">
                                        <Link
                                            className="text-white text-decoration-none"
                                            href="/"
                                        >
                                            Home
                                        </Link>{" "}
                                        / Projects
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="carouselExampleDark" className="header-section position-relative">
                <div className="row">
                    <div className="col-md-12">
                        <div className="video-container position-relative">
                            {/* ✅ Background video */}
                            <video
                                className="w-100 h-100 object-fit-cover d-md-block d-none"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                // poster="/images/project-header.avif" 
                                style={{
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <source src="/images/Our-Project_1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <video
                                className="w-100 h-100 object-fit-cover  d-md-none"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                // poster="/images/project-header.avif" 
                                style={{
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%",
                                }}
                            >
                                <source src="/images/mobileOurProjects.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* ✅ Overlay */}
                            <div className="overlay2 position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-brown">
                                <h1 className="text-center fs-1 mb-0 text-uppercase">Our Projects</h1>
                                <p className="px-md-0 px-3">Discover exclusive residential plots by Eara Group - where nature and luxury coexist in harmony.</p>
                                {/* <p className="text-center fs-6">
                                    <Link
                                        className="text-white text-decoration-none text-brown"
                                        href="/"
                                    >
                                        Home
                                    </Link>{" "}
                                    / Projects
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <section className=" aboutproject theme-bg-light" id="TOP" >
                <div className="container ">
                    <div className="row py-3">
                        {/* <div className="col-md-6">
                            <Image
                                alt="Luxury interior"
                                width={648}
                                height={338}
                                className="img-fluid w-100 d-none rounded-2"
                                src="/images/Our-Project-Section.png"
                                style={{ objectFit: "cover", marginTop: "0% !important", }}
                            />
                        </div> */}
                        <div className="col-md-5 ps-lg-4  offset-md-7  d-flex align-items-center ">
                            <div className="mb-md-0">
                                <h2 className=" theme-color-dark text-center mb-1">Amidst Nature</h2>
                                <p className="fs-5 theme-color-dark text-center mb-1">
                                    Where <span className="text-success">Green</span> is the New <span className="text-gold">Gold</span>
                                </p>
                                <p className=" theme-color-dark text-center mb-2 ">
                                    <strong>

                                        Every plot at &ldquo;Amidst Nature is a promise of green mornings, golden silence, and grounded luxury.

                                    </strong>
                                </p>

                                <p className=" theme-color-dark text-center"><strong></strong>Spread across 18+ lush green acres in Kaggalipura, just Off Kanakapura Main Road, this ultra-luxury plotted development invites you to design your forever home in a place where the city fades and nature speaks. This ultra-luxury plotted development is thoughtfully designed and well executed. Approved by BMRDA.
                                    

                                </p>
                                <p className=" theme-color-dark text-center"><strong></strong>
                                    To know more about the Eara Group property details, our team ensures complete transparency and guidance for every homebuyer.

                                </p>


                                <div className="text-center">
                                    <Link href="/amidstnature" className="btn btn-primary text-light mt-1 mb-5   ">
                                        Explore More
                                    </Link>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </section>

            {/* <section id="TOP" className="section_amenities-hero theme-bg-light ">
                <div className="padding-global">
                    <div className="container-large">
                       
                        <section className="section-1 p-0 row align-items-center">
                            <div className="content col-md-6 page-project  ">
                                <div className="mb-md-5">
                                    <h2 className="mb-3 theme-color-dark text-center">Amidst Nature</h2>
                                    <p className="fs-4 theme-color-dark text-center">
                                        Crafted by Earth. Designed by EARA Group.
                                    </p>
                                    <p className="mt-4 theme-color-dark text-center ">
                                        <strong>
                                            Every plot at &ldquo;Amidst Nature&rdquo; is a promise of green
                                            mornings, golden silence, and grounded luxury.
                                        </strong>
                                        <br />
                                        Spread across 18+ lush acres in Kaggalipura, just off Kanakapura
                                        Road, this premium plotted development invites you to design your
                                        forever home in a place where the city fades and nature speaks.
                                        Thoughtfully approved by BMRDA and connected to every urban
                                        convenience, this is more than a plot - it&rsquo;s a path back to
                                        balance.
                                    </p>

                                    <div className="text-center">
                                        <Link href="/amidstnature" className="btn theme-bg-dark text-light mt-4  mb-md-5">
                                            Know More
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 text-center">
                                <Image
                                    width={400}
                                    height={400}
                                    src="/images/project-img.webp"
                                    loading="lazy"
                                    alt="Amidst Nature Project"
                                    className="home-masterplan_img img-fluid rounded shadow"
                                    style={{ height: "500px", objectFit: "cover" }}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </section> */}
        </>
    );
}
