import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới Thiệu - VZone',
  description: 'Tìm hiểu về VZone - nền tảng tổng hợp thông tin Buôn Ma Thuột.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">VZone</a>
            <span>—</span>
            <span>Giới thiệu</span>
          </div>
          <h1>Giới Thiệu</h1>
        </div>
      </div>

      <div className="container">
        <section className="about-section">
          <div className="about-content">
            <h2>Chào mừng đến với VZone</h2>
            <p>
              VZone là nền tảng tổng hợp thông tin, đánh giá và chia sẻ về các địa điểm,
              dịch vụ tại Buôn Ma Thuột - Đắk Lắk. Với sứ mệnh giúp người dân và du khách
              khám phá những điều tuyệt vời nhất tại thành phố cao nguyên.
            </p>
            <p>
              Chúng tôi mong muốn trở thành cầu nối giữa các doanh nghiệp địa phương và
              cộng đồng, mang đến những thông tin hữu ích và đáng tin cậy nhất về ẩm thực,
              du lịch, giáo dục, mua sắm, làm đẹp và nhiều lĩnh vực khác tại BMT.
            </p>
            <h2>Tầm nhìn</h2>
            <p>
              Trở thành nền tảng review và chia sẻ hàng đầu tại Tây Nguyên, nơi mọi người
              có thể dễ dàng tìm kiếm thông tin về mọi dịch vụ, địa điểm tại khu vực.
            </p>
            <h2>Giá trị cốt lõi</h2>
            <p>
              🎯 Chính xác - 💡 Hữu ích - 🤝 Tin cậy - ❤️ Tận tâm
            </p>
          </div>
        </section>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
