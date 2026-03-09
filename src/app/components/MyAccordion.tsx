'use client';

import { useState } from 'react';

interface Item {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  items: Item[];
}

export default function MyAccordion({ items }: AccordionProps) {
  // First item open by default
  const [openId, setOpenId] = useState<number | null>(items[0]?.id || null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="accordion " id="myAccordion">
      {items.map((item) => (
        <div
          className="accordion-item theme-bg-dark border border-dark rounded-0 mb-3"
          key={item.id}
        >
          <h5 className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button fs-6 fw-bold theme-color-dark ${
                openId === item.id ? '' : 'collapsed'
              }`}
              type="button"
              onClick={() => toggle(item.id)}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                position: 'relative',
              }}
            >
              {item.title}
              {/* Custom + / - icon */}
              <span
                className="accordion-icon"
                style={{
                  color: '#fff', // replace with your theme-color-light CSS if needed
                  fontWeight: 'bold',
                  marginLeft: 'auto',
                }}
              >
               
              </span>
            </button>
          </h5>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse ${
              openId === item.id ? 'show' : ''
            }`}
            aria-labelledby={`heading${item.id}`}
          >
            <div
              className="accordion-body bg-white"
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
