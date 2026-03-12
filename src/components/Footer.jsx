import { Facebook, Music2, Mail, Phone, Heart, MapPin } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/CongTacXaHoiHUIT",
    icon: <Facebook size={20} />,
  },
  {
    name: "Tiktok",
    url: "https://www.tiktok.com/@clbctxhhuit",
    icon: <Music2 size={20} />,
  },
];

const contactInfo = [
  {
    name: "Email",
    value: "clb.congtacxahoi.huit@gmail.com",
    href: "mailto:clb.congtacxahoi.huit@gmail.com",
    icon: <Mail size={18} />,
  },
  {
    name: "Hotline",
    value: "0353.477.440 (Minh Tâm)",
    href: "tel:0353477440",
    icon: <Phone size={18} />,
  },
  {
    name: "Địa chỉ",
    value: "140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, TP.HCM",
    href: "#",
    icon: <MapPin size={18} />,
  },
];

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-6 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Cột 1: Giới thiệu */}
        <div className="space-y-4">
          <h2 className="text-lg font-extrabold text-green-700 tracking-tight">
            CLB CÔNG TÁC XÃ HỘI - HUIT
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed text-justify">
            Trực thuộc trường ĐH Công Thương TP.HCM. Được thành lập từ 2012,
            chúng tôi là nơi kết nối những trái tim thiện nguyện, mang yêu
            thương lan tỏa đến mọi miền tổ quốc.
          </p>
          <div className="flex gap-4 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-green-100 text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Cột 2: Thông điệp & Slogan */}
        <div className="flex flex-col items-start md:items-center justify-start space-y-4">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest italic">
            — Thông điệp —
          </h2>
          <div className="text-center md:text-center">
            <p className="text-xl font-medium text-gray-800 italic">
              "Triệu trái tim - Một ngọn lửa"
            </p>
            <div className="flex justify-center gap-1 mt-2 text-red-500">
              <Heart fill="currentColor" size={20} />
              <div className="w-1 h-1 rounded-full bg-gray-300 self-center mx-1"></div>
              <span className="text-orange-500">🔥</span>
            </div>
          </div>
        </div>

        {/* Cột 3: Liên hệ */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-green-700 uppercase tracking-wider">
            THÔNG TIN LIÊN HỆ
          </h2>
          <div className="flex flex-col gap-4">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group flex items-start gap-3 text-gray-600 hover:text-green-700 transition-colors"
              >
                <span className="text-green-600 mt-0.5 group-hover:scale-110 transition-transform">
                  {info.icon}
                </span>
                <span className="text-sm">{info.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Dòng bản quyền dưới cùng */}
      <div className="max-w-6xl mx-auto px-4 mt-6 pt-6 border-t border-gray-200">
        <p className="text-center text-gray-400 text-xs">
          © {new Date().getFullYear()} CLB Công Tác Xã Hội HUIT. Phát triển bởi
          Đội ngũ kỹ thuật CLB.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
