'use client';

import Image from "next/image";
import Link from "next/link";

export default function CorporateVideoBanner() {
  return (
    <div className="cv-banner-wrapper">
      <div className="row">
        <div className="col-md-12">
          <div className="cv-banner-container">

            <Image
              src="/images/banner3.webp"
              width={1920}
              height={800}
              className="cv-banner-image"
              alt="Corporate Video"
            />

           

          </div>
        </div>
      </div>
    </div>
  );
}