import './globals.css';
import 'swiper/swiper-bundle.css';
import Script from "next/script";
import ClientWrapper from './components/ClientWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import { Poppins } from 'next/font/google';

export const metadata = {
  title: 'Eara Group - Luxury Villa Plots for Sale in Kanakapura Road.',
  description: "Discover Eara Group's luxury villa plots for sale in Kanakapura Road. Build your dream home amidst nature with premium amenities & great connectivity.",
  robots: {
    index: true,        
    follow: true,       
    nocache: true,      
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Eara Group",
        "url": "https://earagroup.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://earagroup.com/images/logo-dark.webp"
        },
        "description":
          "Eara Group is a Bengaluru-based real estate developer specializing in premium plotted developments and sustainable gated layouts.",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61577460860336",
          "https://www.instagram.com/eara_group__official/",
          "https://www.linkedin.com/company/eara-group/",
          "https://x.com/EaraGroup91213"
        ]
      },
      {
        "@type": "LocalBusiness",
        "name": "Eara Group - Corporate Office",
        "image": "https://earagroup.com/images/logo-dark.webp",
        "url": "https://earagroup.com/",
        "telephone": "+91-9844093977",
        "openingHours": "Mon-Sun 09:00-17:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress":
            "MM-201, 2nd Floor, Manya Mansion #11, Blue Bells Street, 7th Main, 7th Cross, Rajeev Gandhi Nagar",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560092",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "13.069909468052726",
          "longitude": "77.58003765891095"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61577460860336",
          "https://www.instagram.com/eara_group__official/",
          "https://www.linkedin.com/company/eara-group/",
          "https://x.com/EaraGroup91213"
        ]
      },
      {
        "@type": "RealEstateListing",
        "name": "Amidst Nature",
        "url": "https://earagroup.com/amidstnature/",
        "description":
          "Amidst Nature is an 18+ acre RERA-approved plotted development in Kaggalipura, off Kanakapura Main Road, Bengaluru, offering plots from 1,500 to 3,300 sq ft with luxury amenities and lush greenery.",
        "datePosted": "2025-10-27",
        "image": [
          "https://earagroup.com/images/gallery/Image1.avif",
          "https://earagroup.com/images/gallery/Image2.avif"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kaggalipura South Taluka, Off Kanakapura Main Road",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560116",
          "addressCountry": "IN"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceCurrency": "INR",
          "url": "https://earagroup.com/amidstnature/"
        },
        "seller": {
          "@type": "Organization",
          "name": "Eara Group",
          "url": "https://earagroup.com/"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Amidst Nature - Project Site",
        "image": "https://earagroup.com/images/logo-dark.webp",
        "url": "https://earagroup.com/amidstnature/",
        "telephone": "+91-9844093977",
        "priceRange": "Starts From ₹90L *",
        "openingHours": "Mo-Su 09:00-17:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kaggalipura South Taluka, Off Kanakapura Main Road",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "postalCode": "560116",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "12.805351079425376",
          "longitude": "77.5179932146611"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61577460860336",
          "https://www.instagram.com/eara_group__official/",
          "https://www.linkedin.com/company/eara-group/",
          "https://x.com/EaraGroup91213"
        ]
      }
    ]
  };

  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" type="image/png" href="/fevicon.png" />
        <link rel="shortcut icon" type="image/png" href="/fevicon.png" />
        <link rel="apple-touch-icon" href="/fevicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />

        {/* ✅ Schema.org JSON-LD */}
        <Script
          id="eara-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* ✅ Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMFKRDPB');
          `}
        </Script>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2069XCJV7Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2069XCJV7Q');
          `}
        </Script>
      </head>

      <body>
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMFKRDPB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <ClientWrapper>
          <div id="layout-wrapper">
            <Header />
            {children}
            <Footer />
          </div>
        </ClientWrapper>
        <Script
  src="https://backend.livhousing.com/bot/create-script-tag?token=ec6251c2-5916-441c-b0c8-da729b47c649"
  strategy="lazyOnload"
/>
      </body>
    </html>
  );
}
