'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="logo">
          <div className="logo-icon">V</div>
          Vzone
        </Link>
        <nav className="nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
            Trang chủ
          </Link>
          <Link href="/bai-viet" className={`nav-link ${pathname.startsWith('/bai-viet') ? 'active' : ''}`}>
            Trang bài viết
          </Link>
          <Link href="/gioi-thieu" className={`nav-link ${pathname === '/gioi-thieu' ? 'active' : ''}`}>
            Giới thiệu
          </Link>
          <Link href="/lien-he" className={`nav-link ${pathname === '/lien-he' ? 'active' : ''}`}>
            Liên hệ
          </Link>
          <button className="nav-search" aria-label="Search">
            🔍
          </button>
        </nav>
        <button className="mobile-toggle" aria-label="Menu">
          ☰
        </button>
      </div>
    </header>
  );
}
