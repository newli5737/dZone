'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    badge: 'ẨM THỰC & TOPLIST',
    title: 'Những Địa Điểm',
    titleHighlight: 'Không Thể Bỏ Lỡ',
    desc: 'Tổng hợp toplist nhà hàng, quán ăn, dịch vụ tại Buôn Ma Thuột được Vzone bình chọn và chia sẻ.',
    bg: '/uploads/hero-1.jpg',
  },
  {
    badge: 'KHÁM PHÁ BMT',
    title: 'Trải Nghiệm',
    titleHighlight: 'Tuyệt Vời Nhất',
    desc: 'Khám phá những trải nghiệm độc đáo, những địa điểm thú vị nhất tại thành phố cà phê.',
    bg: '/uploads/hero-2.jpg',
  },
  {
    badge: 'DU LỊCH & LƯU TRÚ',
    title: 'Điểm Đến',
    titleHighlight: 'Lý Tưởng',
    desc: 'Tìm kiếm khách sạn, nhà nghỉ, homestay tốt nhất cho chuyến du lịch của bạn.',
    bg: '/uploads/hero-3.jpg',
  },
];

interface HeroProps {
  totalPosts: number;
  totalCategories: number;
}

export default function HeroSlider({ totalPosts, totalCategories }: HeroProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="hero">
      <div className="hero-slides">
        {slides.map((slide, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 30%, #0f3460 60%, #533483 100%)`,
              }}
              className="hero-slide-bg"
            />
            <div className="hero-overlay" />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          {slides[current].badge}
        </div>
        <h1 className="hero-title">
          {slides[current].title}{' '}
          <span>{slides[current].titleHighlight}</span>
        </h1>
        <p className="hero-desc">{slides[current].desc}</p>
        <a href="/bai-viet" className="hero-cta">
          Xem toplist →
        </a>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-number">{totalPosts}<sup>+</sup></div>
          <div className="hero-stat-label">Bài viết</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-number">{totalCategories}</div>
          <div className="hero-stat-label">Danh mục</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-number">BMT</div>
          <div className="hero-stat-label">Đắk Lắk</div>
        </div>
      </div>

      <div className="hero-arrows">
        <button className="hero-arrow" onClick={prev} aria-label="Previous">
          ←
        </button>
        <button className="hero-arrow" onClick={next} aria-label="Next">
          →
        </button>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
