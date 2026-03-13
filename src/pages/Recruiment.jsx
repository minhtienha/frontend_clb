import { Sparkles, Heart, Users, Target } from "lucide-react";
import RecruitmentForm from "../components/recruiment-from";
export default function Recruitment() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-500/10 to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Sparkles size={48} className="text-green-500 mx-auto mb-4" />
            <h1 className="text-5xl font-bold text-green-500 mb-6">
              Tuyển Thành Viên 2026
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bạn là người có trái tim yêu thương, muốn mang yêu thương đến mọi
              người? Hãy gia nhập chúng tôi!
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-500 mb-12 text-center">
            Tại Sao Gia Nhập Chúng Tôi?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Lan Tỏa Yêu Thương",
                desc: "Mang yêu thương đến những người cần giúp đỡ",
              },
              {
                icon: Users,
                title: "Kết Nối Cộng Đồng",
                desc: "Gặp gỡ những bạn cùng chí hướng",
              },
              {
                icon: Target,
                title: "Phát Triển Kỹ Năng",
                desc: "Nâng cao kỹ năng lãnh đạo và tổ chức",
              },
              {
                icon: Sparkles,
                title: "Trải Nghiệm Ý Nghĩa",
                desc: "Tạo ra những kỷ niệm đáng nhớ",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-b from-green-500/10 to-transparent p-8 rounded-lg text-center"
                >
                  <Icon size={40} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-500 mb-12 text-center">
            Yêu Cầu Để Tham Gia
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-md">
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Yêu Cầu Chính
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Là sinh viên Trường Đại học Công Thương TP.HCM</li>
                  <li>✓ Có trái tim yêu thương, sẵn sàng tình nguyện</li>
                  <li>✓ Có thời gian tham gia hoạt động thường kỳ</li>
                  <li>✓ Cam kết tham gia ít nhất một chiến dịch trong năm</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Các Ban Chuyên Môn
                </h3>
                <p className="text-gray-600 mb-4">
                  CLB có các ban chuyên môn khác nhau, bạn có thể chọn tham gia
                  theo sở thích:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ban Hoạt Động: Lên kế hoạch, tổ chức các sự kiện</li>
                  <li>• Ban Tài Chính: Quản lý nguồn tài chính, gây quỹ</li>
                  <li>
                    • Ban Tuyên Truyền: Chia sẻ thông tin, duy trì liên lạc
                  </li>
                  <li>• Ban Nhân Sự: Quản lý thành viên, tuyển dụng</li>
                  <li>• Ban Đối Ngoại: Xây dựng quan hệ đối tác</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <RecruitmentForm />
      </section>
    </div>
  );
}
