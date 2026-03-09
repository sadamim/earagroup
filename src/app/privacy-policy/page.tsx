
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../../app/components/ContactForm";
import "./../privacy.css";
export default function Contact() {
    return (
        <>
            <div id="carouselExampleDark" className="header-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="image-container position-relative">
                            <Image
                                src="/images/ContactUsHeader.avif"
                                height={2880}
                                width={1920}
                                className="img-fluid masterpiece "
                                alt="masterpiece"
                            />
                            <div className="overlay2 position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                                <div className="text-white d-block text-center">
                                    <h1 className="fs-1 mb-3 text-uppercase">Privacy Policy</h1>
                                    <p className="fs-6 text-center">
                                        <Link className="text-white text-decoration-none" href="/">
                                            Home
                                        </Link>{" "}
                                        / Privacy Policy
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="section-padding bg-white theme-bg-light contact">
                <div className="container">


                    <div className="row">
                        <div className="col-md-12 mx-auto">
                            <div className="row">
                                {/* Contact Form */}
                                <div className="col-md-12">
                                    <div className="contact_form_inner px-md-5 px-3 mb-4">
                                        <div className="contact_field theme-color-light">
                                            <p className="fs-1 text-center">Privacy Policy</p>

                                            <p>This Privacy Policy governs the manner in which EARA GROUP, including its subsidiaries, partners, agents, and affiliates, collects, uses, maintains, and discloses information collected from users of this website and associated microsites. Personal Identification Information We may collect personal identification information such as name, email address, mailing address, and phone number when users visit our site, fill out forms, subscribe to newsletters, or engage in other site activities. Users may visit the site anonymously; however, refusal to provide information may limit access to certain features.</p>

                                            <h2 className="fs-5 mb-2">Non-Personal Identification Information</h2>

                                            <p>We may collect non-personal information including browser type, device details, operating system, internet service provider, and similar technical data.</p>

                                            <h2 className="fs-5 mb-2">Web Browser Cookies</h2>

                                            <p>Our site may use cookies to enhance user experience. Users may refuse cookies through browser settings; however, some site features may not function properly.</p>

                                            <h2 className="fs-5 mb-2">How We Use Collected Information</h2>

                                            <p>Information collected may be used to improve customer service, enhance website performance, run promotions or surveys, and communicate updates or offers.</p>

                                            <h2 className="fs-5 mb-2">How We Protect User Information</h2>

                                            <p>We implement appropriate security measures to protect personal information. While we strive to safeguard data, complete security cannot be guaranteed.</p>

                                            <h2 className="fs-5 mb-2">Sharing of Personal Information</h2>

                                            <p>We do not sell or rent personal information. Aggregated, non-identifiable data may be shared with partners and affiliates.</p>

                                            <h2 className="fs-5 mb-2">Changes to This Privacy Policy</h2>

                                            <p>EARA GROUP reserves the right to update this policy at any time. Continued use of the site signifies acceptance of any changes. Your Acceptance of These Terms By using this site, users agree to this Privacy Policy and its updates.</p>

                                            <h2 className="fs-5 mb-2">Contacting Us</h2>
                                            <p>For questions regarding this Privacy Policy, please contact EARA GROUP, Bengaluru, India</p>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
