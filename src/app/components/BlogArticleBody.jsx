"use client";

import { useState } from "react";

function BlogFaqAccordion({ items, accordionId = "blogFaqAccordion" }) {
  const [openId, setOpenId] = useState(null);
  if (!items.length) return null;
  return (
    <div className="accordion blog-faq-accordion" id={accordionId}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const headingId = `${accordionId}-heading-${item.id}`;
        const collapseId = `${accordionId}-collapse-${item.id}`;
        return (
          <div className="accordion-item border rounded-0 mb-3 overflow-hidden" key={item.id}>
            <h3 className="accordion-header mb-0" id={headingId}>
              <button
                className={`accordion-button fw-semibold ${isOpen ? "" : "collapsed"}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={collapseId}
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
              >
                <span className="blog-faq-question-num me-2 text-secondary">{index + 1}.</span>
                <span className="blog-faq-question-text">{item.question}</span>
              </button>
            </h3>
            <div id={collapseId} className={`accordion-collapse collapse ${isOpen ? "show" : ""}`} aria-labelledby={headingId}>
              <div className="accordion-body theme-color-dark">
                <p className="mb-0">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function BlogArticleBody({ mainContent, faqTitle, faqs, slug, authorName = "Eara Group" }) {
  return (
    <div className="theme-color-dark py-2">
      <p className="blog-post-author small text-secondary mb-3 mb-md-4">Authors — {authorName}</p>
      <div className="blog-article-body" dangerouslySetInnerHTML={{ __html: mainContent }} />
      {faqs.length > 0 && (
        <section className="blog-faq-section mt-4 pt-2">
          {faqTitle && <h2 className="fs-4 fw-bold mb-3 theme-color-dark">{faqTitle}</h2>}
          <BlogFaqAccordion items={faqs} accordionId={`blog-faq-${slug}`} />
        </section>
      )}
    </div>
  );
}
