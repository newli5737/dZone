import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VZone - Khám phá Buôn Ma Thuột",
  description: "Tổng hợp toplist nhà hàng, quán ăn, dịch vụ tại Buôn Ma Thuột được VZone bình chọn và chia sẻ.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
