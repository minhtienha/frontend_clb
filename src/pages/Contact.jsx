import { Mail, Phone, MapPin, Facebook, Music } from "lucide-react";
import ContactForm from "../components/contact-from";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-500/10 to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-green-500 mb-6">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Có câu hỏi? Muốn hợp tác? Hãy liên hệ với chúng tôi ngay hôm nay
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-green-500 mb-8">
                Thông Tin Liên Hệ
              </h2>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/10">
                      <Mail className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:clb.congtacxahoi.huit@gmail.com"
                      className="text-gray-600 hover:text-green-500 transition"
                    >
                      clb.congtacxahoi.huit@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/10">
                      <Phone className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Điện Thoại
                    </h3>
                    <a
                      href="tel:0353477440"
                      className="text-gray-600 hover:text-green-500 transition"
                    >
                      0353.477.440 (Minh Tâm)
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500/10">
                      <MapPin className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Địa Chỉ
                    </h3>
                    <p className="text-gray-600">
                      140 Lê Trọng Tấn, Tây Thạnh, Tân Phú, TP.HCM
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Theo Dõi Chúng Tôi
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-green-500 text-green-500-foreground flex items-center justify-center hover:opacity-80 transition"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-green-500 text-green-500-foreground flex items-center justify-center hover:opacity-80 transition"
                      aria-label="TikTok"
                    >
                      <Music size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-500 mb-8 text-center">
            Bản Đồ Vị Trí
          </h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8947255815586!2d106.6338!3d10.7622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d4b3b3b3b3b%3A0x3b3b3b3b3b3b3b3b!2s140%20L%C3%AA%20Tr%E1%BB%8Dng%20T%E1%BA%A5n%2C%20T%C3%A2y%20Th%E1%BA%A1nh%2C%20T%C3%A2n%20Ph%C3%BA%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2svn!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-500 mb-12 text-center">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Làm thế nào để tham gia câu lạc bộ?",
                a: 'Bạn có thể điền biểu mẫu đăng ký trên trang "Tuyển Thành Viên" hoặc liên hệ trực tiếp với ban tuyển dụng qua email hoặc điện thoại.',
              },
              {
                q: "Có phí tham gia không?",
                a: "Câu lạc bộ không có phí tham gia hàng tháng. Bạn chỉ cần đóng góp cho các chiến dịch cụ thể theo khả năng của mình.",
              },
              {
                q: "Tôi có thể tham gia bao nhiêu hoạt động?",
                a: "Bạn có thể tham gia bao nhiêu hoạt động tùy thích tùy theo thời gian và sở thích của mình. Chúng tôi không có hạn chế.",
              },
              {
                q: "Làm thế nào để liên hệ với ban lãnh đạo?",
                a: "Bạn có thể gửi email, gọi điện hoặc liên hệ trực tiếp tại phòng CLB trong giờ hoạt động. Chúng tôi rất sẵn lòng trả lời mọi câu hỏi.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg border border-border"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
