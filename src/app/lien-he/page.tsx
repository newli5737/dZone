import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Liên Hệ - VZone',
  description: 'Liên hệ với VZone để được hỗ trợ.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <a href="/">VZone</a>
            <span>—</span>
            <span>Liên hệ</span>
          </div>
          <h1>Liên Hệ</h1>
        </div>
      </div>

      <div className="container">
        <section className="about-section">
          <div className="about-content">
            <h2>Liên hệ với chúng tôi</h2>
            <p>
              Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, đừng ngần ngại liên hệ với chúng tôi.
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
            </p>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Họ và tên</label>
                  <input type="text" className="form-input" placeholder="Nhập họ tên..." />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" placeholder="Nhập email..." />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Tiêu đề</label>
                <input type="text" className="form-input" placeholder="Tiêu đề tin nhắn..." />
              </div>
              <div className="form-group">
                <label className="form-label">Nội dung</label>
                <textarea className="form-textarea" placeholder="Nội dung tin nhắn..." />
              </div>
              <button type="submit" className="btn btn-primary" style={{ maxWidth: '200px' }}>
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
}
