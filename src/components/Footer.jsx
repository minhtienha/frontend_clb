import { NavLink } from "react-router-dom"; // Thay đổi ở đây
import { Mail, Phone, MapPin, Facebook, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg text-green-500 mb-4">
              CLB CÔNG TÁC XÃ HỘI - HUIT
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Triều trái tim - Một ngon lửa. Câu lạc bộ hoạt động với tinh thần
              tình nguyện, mang yêu thương lan tỏa đến mọi miền của đất nước.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg text-green-500 mb-4">
              THÔNG TIN LIÊN HỆ
            </h3>
            <div className="space-y-3">
              <div className="flex gap-3 text-sm text-gray-600">
                <Mail
                  size={18}
                  className="text-green-500 flex-shrink-0 mt-0.5"
                />
                <a
                  href="mailto:clb.congtacxahoi.huit@gmail.com"
                  className="hover:text-green-500 transition"
                >
                  clb.congtacxahoi.huit@gmail.com
                </a>
              </div>
              <div className="flex gap-3 text-sm text-gray-600">
                <Phone
                  size={18}
                  className="text-green-500 flex-shrink-0 mt-0.5"
                />
                <a
                  href="tel:0353477440"
                  className="hover:text-green-500 transition"
                >
                  0353.477.440
                </a>
              </div>
              <div className="flex gap-3 text-sm text-gray-600">
                <MapPin
                  size={18}
                  className="text-green-500 flex-shrink-0 mt-0.5"
                />
                <span>140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Social & Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-green-500 mb-4">
              THEO DÕI CHÚNG TÔI
            </h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-500 text-green-500-foreground flex items-center justify-center hover:opacity-80 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-green-500 text-green-500-foreground flex items-center justify-center hover:opacity-80 transition"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
            </div>
            <nav className="flex flex-col gap-2 text-sm">
              <NavLink
                href="/about"
                className="text-gray-600 hover:text-green-500 transition"
              >
                Về chúng tôi
              </NavLink>
              <NavLink
                href="/contact"
                className="text-gray-600 hover:text-green-500 transition"
              >
                Liên hệ
              </NavLink>
              <NavLink
                href="/recruitment"
                className="text-gray-600 hover:text-green-500 transition"
              >
                Tuyển thành viên
              </NavLink>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-gray-600">
          <p>© 2026 CLB Công Tác Xã Hội HUIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
