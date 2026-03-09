'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { posts } from './../data/posts';
//import "./../blog.css";




interface Post {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    image: string;
}

const staticPosts: Post[] = [
    {
        slug: "bmrda-residential-plots-in-kanakapura-road",
        title:
            "BMRDA Residential Plots in Kanakapura Road | Investment Guide",
        date: "2026-02-16",
        image: "/images/bmrda-residential-plots-in-kanakapura-road.webp",
        excerpt:
            "When it comes to plotted developments, the smartest buyers don’t start with aesthetics or “future potential.” They start with legality. In a growth corridor like Kanakapura Road",
    },
    {
        slug: "plots-for-sale-in-kanakapura-road-bangalore",
        title:
            "Plots for Sale in Kanakapura Road Bangalore: Price Trends for Villa Buyers",
        date: "2026-01-06",
        image: "/images/plots-for-sale-in-kanakapura-road-bangalore-price-trends.webp",
        excerpt:
            "Kanakapura Road has steadily transformed into one of Bengaluru’s most preferred corridors for plotted developments. For buyers actively shortlisting Plots for Sale in Kanakapura Road ",
    },
    {
        slug: "how-to-choose-premium-villa-plots-in-kanakapura-road",
        title: "How to Choose Premium Villa Plots in Kanakapura Road",

        excerpt:
            "Investing in Serenity: Why Nature-Focused Developments Promise Better Real estate investment has evolved far beyond square footage and price tags. Today&rsquo;s most successful investors ",
          image: "/images/luxury-villa-plots-kaggalipura-2).webp",
        date: "2026-01-02",
    },
    {
        slug: "luxury-villa-plots-in-kaggalipura",
        title: "Luxury Villa Plots in Kaggalipura: A Hidden Gem for Peaceful Living ",
        image: "/images/luxury-villa-plots-kaggalipura.webp",
        excerpt:
            "Bengaluru&rsquo;s real estate story is constantly evolving, and while established hubs continue to thrive, discerning homebuyers are now looking beyond the obvious. One location quietly gaining attention is Kaggalipura..    ",
        date: "2025-12-30",
    },
    {
        slug: "bmrda-approved-sites-kanakapura-road-investment",
        title: "Why BMRDA-Approved Sites in Kanakapura Road Are a Smart Investment",
        image: "/images/BMRDA approved layout in Kanakapura Road for safe investment.webp",
        excerpt:
            "Kanakapura Road has quietly become one of Bengaluru&rsquo;s strongest growth corridors. Over the last decade, this stretch has transformed from a peaceful suburban route into a powerful real-estate destination driven by..    ",
        date: "2025-12-15",
    },
    {
        slug: "why-choose-integrated-townships",
        title: "Why Choose Integrated Townships?",
        image: "/images/Blog-img1_eara.avif",
        excerpt:
            "From better infrastructure to enhanced quality of life, integrated townships are the future of urban development. Learn how Kanakapura Road property investment is becoming one of Bengaluru’s most promising growth opportunities..    ",
        date: "2025-05-21",
    },
    {
        slug: "eco-conscious-architecture",
        title: "Eco-Conscious Architecture",
        image: "/images/Blog-img2_eara.avif",
        excerpt:
            "Transform your small balcony into an eco-friendly retreat with space-saving garden elements and sustainable design. Perfect for those exploring residential plots in Bangalore who value harmony between nature and urban life..    ",
        date: "2025-05-22",
    },
    {
        slug: "the-future-of-smart-living",
        title: "The Future of Smart Living ",
        image: "/images/Blog-img3_eara.avif",
        excerpt:
            "From voice-controlled lighting to multifunctional furniture, smart living is shaping the way we design our bedrooms. Dive into the latest real estate insights that define modern comfort and convenience..",
        date: "2025-05-23",
    }
];


export default function Blog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;

    // 🔍 Filter by title
    const filteredPosts = staticPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // 📅 Sort by date
    const sortedPosts = [...filteredPosts].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        const timeA = dateA.getTime();
        const timeB = dateB.getTime();

        return sortBy === 'newest' ? timeB - timeA : timeA - timeB;
    });

    // 📄 Paginate
    const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const paginatedPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage);

    return (
        <>
            {/* Banner Section */}
            <div id="blogheader" className="header-section">
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="image-container">
                            <Image
                                src="/images/blog-header.avif"
                                height={2880}
                                width={1920}
                                className='img-fluid masterpiece d-md-block d-none'
                                alt="blog"
                                id='blogheader'
                                style={{ objectPosition: '100% 100%' }}
                            />
                            <Image
                                src="/images/Mobile_ban_Eara.webp"
                                height={2880}
                                width={1920}
                                className='img-fluid  d-md-none'
                                alt="blog"
                                id='blogheadermobile'
                                style={{ objectPosition: '100% 100%' }}
                            />

                            <div className="overlay2 ">
                                <div className="text-white d-block">
                                    <h1 className="text-center d-block fs-1 mb-0 text-uppercase"> Blog</h1>
                                    {/* Removed commented-out Link */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <section className="section-padding theme-bg-light blog-main-page" style={{ marginTop: '0px' }}>
                <div className="container">
                    <div className="row justify-content-end mb-4">
                        <div className='col-md-12'>
                            <h4 className="text-center">
                                Explore real estate insights, trends, and lifestyle stories that shape smarter living.
                            </h4>
                        </div>
                        {/* Search and Sort controls are currently hidden with d-none */}
                        <div className="col-md-2 d-none">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="col-md-2 d-none">
                            <select className="form-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="newest">Sort by Newest</option>
                                <option value="oldest">Sort by Oldest</option>
                            </select>
                        </div>
                    </div>
                    {/* 🛑 FIX: Use d-flex and align-items-stretch on the row to make columns equal height */}
                    <div className="row d-flex align-items-stretch">
                        {paginatedPosts.length > 0 ? paginatedPosts.map((post) => (
                            // Use h-100 on the column to fill the row's stretched height
                            <div className="col-md-4 mb-3" key={post.slug}>
                                {/* 🛑 FIX: Use d-flex and flex-column to enable vertical stretching inside the card */}
                                <div className="services-item shine-animate-item bg-white shadow-sm py-3 px-3 theme-bg-dark d-flex flex-column h-100">
                                    <div className="services-thumb">
                                        <Link href={`/blog/${post.slug}`}>
                                            <Image
                                                src={post.image}
                                                className="img-fluid"
                                                alt={post.title}
                                                width={500}
                                                height={500}
                                                style={{  objectFit: "cover" }}
                                            />
                                        </Link>
                                    </div>
                                    {/* 🛑 FIX: Use flex-grow-1 to make this content block take up all remaining vertical space */}
                                    <div className="services-content flex-grow-1 d-flex flex-column">
                                        <h6 className="title my-3 text-center fw-bold">
                                            <Link className='text-dark fw-bold text-decoration-none theme-color-light fs-4' href={`/blog/${post.slug}`} style={{ fontWeight: "600" }}>
                                                {post.title}
                                            </Link>
                                        </h6>
                                        {/* The excerpt needs flex-grow to push the button down, or margin auto */}
                                        <p className=' mb-0 theme-color-light' dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                                        {/* Use mt-auto on the button container to push it to the bottom */}
                                        <div className="text-center pt-5 mb-3 mt-5 small mt-auto">
                                            <Link href={`/blog/${post.slug}`} className="btn btn-primary">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-12 text-center">
                                <p>No blog posts found.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination Controls */}
                    <div className="row mt-4">
                        <div className="col text-center">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li
                                            key={i}
                                            className={`page-item mx-1 bg-black ${currentPage === i + 1 ? 'active' : ''}`}
                                            onClick={() => setCurrentPage(i + 1)}
                                        >
                                            <button className="page-link btn text-black rounded-0 theme-bg-dark border-dark">{i + 1}</button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}