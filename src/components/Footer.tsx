import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3 className="footer-title">Về Vzone</h3>
              <p className="footer-desc">
                VZone là nền tảng tổng hợp thông tin, đánh giá và chia sẻ về các địa điểm, 
                dịch vụ tại Buôn Ma Thuột - Đắk Lắk. Chúng tôi giúp bạn khám phá những 
                điều tuyệt vời nhất tại thành phố cao nguyên.
              </p>
              <div className="footer-socials">
                <button className="footer-social" aria-label="Facebook">📘</button>
                <button className="footer-social" aria-label="TikTok">🎵</button>
                <button className="footer-social" aria-label="Twitter">🐦</button>
                <button className="footer-social" aria-label="YouTube">📺</button>
              </div>
            </div>
            <div>
              <h3 className="footer-title">Trang chính</h3>
              <ul className="footer-links">
                <li><Link href="/gioi-thieu">→ Giới thiệu</Link></li>
                <li><Link href="/lien-he">→ Liên hệ</Link></li>
                <li><Link href="/bai-viet">→ Trang bài viết</Link></li>
                <li><Link href="/">→ Chính sách bảo mật</Link></li>
                <li><Link href="/">→ Điều khoản sử dụng</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Thông tin liên hệ</h3>
              <ul className="footer-links">
                <li><a href="mailto:contact@vzone.vn">✉️ contact@vzone.vn</a></li>
                <li><a href="#">📍 TP. Buôn Ma Thuột, Đắk Lắk</a></li>
                <li><a href="#">📞 0123 456 789</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2024 VZone. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
