'use client';

import Image from "next/image";
import Link from "next/link";

export default function CorporateVideoBanner() {
  return (
    <div className="cv-banner-wrapper">
      <div className="row">
        <div className="col-md-12">
          <div className="cv-banner-container">
           <h1 className="d-none"> Plots for Sale in Kanakapura Road Amidst Nature</h1>
            {/* Desktop Banner */}
            <Image
              src="/images/banner3.webp"
              width={1920}
              height={800}
              className="cv-banner-image d-none d-md-block"
              alt="Corporate Video"
              priority
            />

            {/* Mobile Banner */}
            <Image
              src="/images/banner31-mobile1.webp"
              width={768}
              height={900}
              className="cv-banner-image d-block d-md-none"
              alt="Corporate Video"
              priority
            />

          </div>
        </div>
      </div>
    </div>
  );
}