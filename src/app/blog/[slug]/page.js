// app/blog/[slug]/page.js
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts } from '../../data/posts';
import Script from "next/script";
import BlogArticleBody from '../../components/BlogArticleBody';

// 🔹 Static paths
export async function generateStaticParams() {
   return posts.map((post) => ({
      slug: post.slug,
   }));
}

// 🔹 Metadata Generation
export async function generateMetadata({ params }) {
   const { slug } = await params; // ✅ Awaited

   const post = posts.find((p) => p.slug === slug);

   if (!post) {
      return {};
   }

   const siteUrl = 'https://earagroup.com';
   const canonicalUrl = `${siteUrl}/blog/${post.slug}`;

   return {
      metadataBase: new URL(siteUrl),
      title: post.meta_title || post.title,
      description: post.description,
      keywords: post.keywords,
      ...(post.author ? { authors: [{ name: post.author }] } : {}),
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
      alternates: {
         canonical: canonicalUrl,
      },

      openGraph: {
         title: post.og_title || post.meta_title || post.title,
         description: post.og_description || post.description,
         url: canonicalUrl,
         images: [
            {
               url: post.image,
               width: 1200,
               height: 630,
               alt: post.title,
            },
         ],
         type: 'article',
      },

      twitter: {
         card: 'summary_large_image',
         title: post.og_title || post.meta_title || post.title,
         description: post.og_description || post.description,
         images: [post.image],
      },
   };
}



// 🔹 Split the article HTML into the main body and the FAQ list (same as the live site)
const decodeEntities = (str) =>
   str
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&rsquo;|&lsquo;/g, "'")
      .replace(/&rdquo;|&ldquo;/g, '"')
      .replace(/&ndash;/g, '–')
      .replace(/&mdash;/g, '—')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');

const toText = (html) => decodeEntities(html.replace(/<[^>]+>/g, '')).trim();

function splitFaqs(content = '') {
   const re = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
   let m;
   while ((m = re.exec(content))) {
      const title = toText(m[1]);
      if (!/faq|frequently asked/i.test(title)) continue;
      const mainContent = content.slice(0, m.index).trim();
      const rest = content.slice(m.index + m[0].length);
      const faqs = [...rest.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3[^>]*>|$)/gi)]
         .map((f, i) => ({ id: i + 1, question: toText(f[1]), answer: toText(f[2]) }))
         .filter((f) => f.question);
      if (faqs.length) return { mainContent, faqTitle: title, faqs };
   }
   return { mainContent: content, faqTitle: '', faqs: [] };
}

// 🔹 Page Component
export default async function BlogPost({ params }) {
   // ✅ FIX: In Next.js 15, params must be awaited before use
   const { slug } = await params;

   const post = posts.find((p) => p.slug === slug);

   if (!post) {
      notFound();
   }

   const { mainContent, faqTitle, faqs } = splitFaqs(post.content);

   return (
      <>
         {/* ✅ SCHEMA (ONLY IF EXISTS) */}
         {post.schema && (
            <Script
               id="post-schema"
               type="application/ld+json"
               strategy="afterInteractive"
               dangerouslySetInnerHTML={{
                  __html: JSON.stringify(post.schema),
               }}
            />
         )}

         {/* Header */}
        <div id="blogheader" className="header-section">
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="image-container position-relative w-100">
                                    <Image
                                        src="/images/blog-header.avif"
                                        height={2880}
                                        width={1920}
                                        className='img-fluid masterpiece d-md-block d-none w-100'
                                        alt="blog"
                                        id='blogheader'
                                        style={{ objectPosition: '100% 100%' }}
                                    />
                                    <Image
                                        src="/images/Mobile_ban_Eara.webp"
                                        height={2880}
                                        width={1920}
                                        className='img-fluid masterpiece blogheadermobile d-md-none w-100'
                                        alt="blog"
                                        id='blogheadermobile'
                                        style={{ objectPosition: '100% 100%' }}
                                    />
        
                                    <div className="overlay2 ">
                                        <div className="text-white d-block">
                                            <h1 className="text-center d-block fs-1 mb-0 text-uppercase">  {post.h1 }</h1>
                                            {/* Removed commented-out Link */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

         {/* Blog Content */}
         <section className="section-padding theme-bg-light blogs">
            <div className="container">
               <Image
                  src={post.image}
                  className="w-100 img-fluid"
                  alt={post.title}
                  width={1296}
                  height={607}
               />

               {/* <h1 className="fs-2 fw-bold mt-4 theme-color-dark m-center">
                  {post.h1 || post.title}
               </h1> */}

               <BlogArticleBody
                  mainContent={mainContent}
                  faqTitle={faqTitle}
                  faqs={faqs}
                  slug={post.slug}
                  authorName={post.author || 'Eara Group'}
               />
            </div>
         </section>
      </>
   );
}