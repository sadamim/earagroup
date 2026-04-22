
import Image from "next/image";
import Link from "next/link";
import ContactForm from "../components/ContactForm";
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
                                    <h1 className="fs-1 mb-3 text-uppercase">Terms & Conditions</h1>
                                    <p className="fs-6 text-center">
                                        <Link className="text-white text-decoration-none" href="/">
                                            Home
                                        </Link>{" "}
                                        / Terms & Conditions
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
                                            <p className="fs-1 text-center">Terms & Conditions</p>

                                            <p>By accessing or using this website and the information, resources, services, products, and tools
                                                provided by EARA GROUP (collectively, the “Resources”), you agree to use the Resources only for
                                                lawful purposes and in accordance with applicable laws and this User Agreement</p>

                                            <h2 className="fs-5 mb-2">User Responsibilities</h2>

                                            <p>You may be required to provide personal information to access certain Resources. You agree that
                                                all information provided will be accurate, complete, and up to date. <br />
                                                You are responsible for maintaining the confidentiality of your account credentials and for all
                                                activities conducted under your account.<br />
                                                Unauthorized access, automated usage, disruption of services, or reproduction of website content
                                                without written permission is strictly prohibited</p>

                                            <h2 className="fs-5 mb-2">Indemnification</h2>

                                            <p>You agree to indemnify and hold harmless EARA GROUP, its affiliates, directors, officers,
                                                employees, and agents from any claims or damages arising from misuse of this website or violation
                                                of these terms.</p>

                                            <h2 className="fs-5 mb-2">Trademark Notice</h2>

                                            <p>All trademarks, logos, and service marks displayed on this website are the property of EARA
                                                GROUP and may not be used without prior written consent.</p>

                                            <h2 className="fs-5 mb-2">Unsolicited Submissions</h2>

                                            <p>All submissions made through this website are considered non-confidential and non-proprietary and
                                                may be used freely by EARA GROUP.</p>

                                            <h2 className="fs-5 mb-2">Limitation of Liability</h2>

                                            <p>Your use of this website is at your own risk. EARA GROUP shall not be liable for any damages
                                                arising from the use or inability to use this website.</p>

                                            <h2 className="fs-5 mb-2">Privacy Policy</h2>

                                            <p>Please refer to our Privacy Policy for details on how personal information is collected and handled</p>

                                            <h2 className="fs-5 mb-2">Entire Agreement</h2>
                                            <p>This Agreement constitutes the entire agreement between you and EARA GROUP concerning your
                                                use of this website</p>

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
