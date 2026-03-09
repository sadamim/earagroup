"use client";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer accent-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-association">
              <Link href="/">
                <Image
                  src="/images/logo-dark.webp"
                  alt="logo"
                  width={150}
                  height={66}
                  className="logo white-png d-block mx-auto"
                />
              </Link>
              <p className="pt-3 text-center">
                RERA No. : PRM/KA/RERA/1251/310/PR/220223/005733
              </p>
            </div>
          </div>
          {/* Project Info */}
          <div className="col-md-3 ps-md-4 ps-0  py-3 py-md-0">
            <h4 className="footer-title m-center">Office Address</h4>
            <p className="m-center">MM-201, 2nd Floor,<br /> MANYA MANSION #11,<br /> Blue Bells Street, 7th Main,<br /> 7th Cross, Rajeevgandhinagar, <br />Bangalore-560097
            </p>
            <p className="pt-3 mb-2 fw-bold fs-6 text-start m-center">
              Follow Us
            </p>

            <div className="footer-social text-center d-flex justify-content-md-start justify-content-center text-white">
              <Link href="https://www.facebook.com/profile.php?id=61577460860336" className="text-white " target="_blank">
                <svg style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" /></svg>

              </Link>
              <Link href="https://www.instagram.com/eara_group__official/" className="text-white " target="_blank">
                <svg style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" /></svg>
              </Link>
              <Link href="https://www.linkedin.com/company/eara-group/" className="text-white " target="_blank">
               
                <svg style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/></svg>

              </Link>
              <Link href="https://x.com/EaraGroup91213" className="text-white " target="_blank">
              <svg style={{ width: "24px", height: "24px" }} className="w-8 h-8 text-white" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z"/></svg>
               

              </Link>
            </div>
          </div>

          {/* Developer Info */}
          <div className="col-md-2 m-center py-3 py-md-0">
            <h4 className="footer-title ">Quick Links</h4>
            <ul className="px-0" style={{ listStyle: "none" }}>
              <li className="noclass">
                <Link href="./" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-decoration-none text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/microsite" className="text-decoration-none text-white">
                  Project
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-decoration-none text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/career"
                  className="text-decoration-none text-white"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-decoration-none text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-decoration-none text-white"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Association */}

          {/* Get In Touch Form */}
          <div className="col-md-3">
            <h4 className="footer-heading m-center">GET IN TOUCH</h4>
            <ContactForm
              inputClass="footer-input rounded-0"
              buttonClass="btn theme-bg-light text-dark mb-3"
              hideMessageField={true} // hides textarea
              defaultMessage="Interested in this project"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p className="text-center">© {new Date().getFullYear()} Eara Group. All rights reserved. Digital Partner : <Link href="https://www.imsolutions.co/" className="f-link text-white" target="_blank">IM Solutions</Link></p>
      </div>
    </footer>
  );
}
