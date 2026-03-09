'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const testimonials = [
  {
    text: "Nature is at the heart of this community, not just an afterthought. The preservation of trees, the native landscaping, and the peaceful ambiance make Amidst Nature feel like home even before I build. The thoughtful design and value offered truly justify the Eara Group Price for such a premium living experience.    ",
    name: "Ravi Kaushik",
  },
  {
    text: "What EARA is creating isn't just another plotted layout, it's a lifestyle upgrade. We were impressed by the thoughtful planning, open spaces, and how seamlessly nature is woven into every corner. Can't wait to build our home here and wake up to fresh air every day!",
    name: "Priya Mehta",
  },
  {
    text: "I see Amidst Nature as the perfect escape from the hustle, not too far from the city, yet totally unplugged from the chaos. EARA has nailed the balance of lifestyle, nature, and investment potential. This is the future of premium living.",
    name: "Arjun Verma",
  },
  {
    text: "I've been waiting for a project that truly respects nature without compromising on modern living, EARA's Amidst Nature is exactly that. The moment I saw their plan, I knew this is where I want to build my forever home. A green, peaceful sanctuary that's still so well connected to the city!",
    name: "Neha Iyer",
  },
  {
    text: "Eara's Amidst Nature is a thoughtful design which completely blends with real environment consciousness. More than a plotted development, it's a vision for peaceful, healthy living that feels just right.",
    name: "Suresh Nair",
  },
  {
    text: "What stood out to me was EARA's commitment to sustainability. Amidst Nature isn't just another real estate project, it's a green investment for future generations. I'm happy to be part of something so mindful and long-term.",
    name: "Ananya Reddy",
  },
];

const TestimonialSlider = ({
  sectionClass = "px-md-5 px-3 bg-light theme-bg-dark testimonials-light",
  headingClass = "text-center mb-4 fw-bold theme-color-light",
  cardClass = "info-box px-5 py-5 bg-white theme-bg-light shadow-sm h-100 rounded d-flex flex-column justify-content-between mb-md-5",
  textClass = "theme-color-dark my-3 lh-lg",
  nameClass = "text-center fw-bold theme-color-dark fw-bold mt-auto ",
}) => {
  return (
    <section className={sectionClass}>
      <h2 className={headingClass}>SUCCESS STORIES </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className=""
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div >
              <div className={cardClass}>
                <p className={textClass}>{item.text}</p>
                <h6 className={nameClass}>- {item.name}</h6>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSlider;
