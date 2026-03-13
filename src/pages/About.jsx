import { Award, Users, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-500/10 to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-green-500 mb-6">
            Về Chúng Tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Triều trái tim - Một ngon lửa. Câu lạc bộ được thành lập với mục
            đích lan tỏa yêu thương, tinh thần tình nguyện đến mọi miền của đất
            nước.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-500 mb-12">
            Lịch Sử Hình Thành
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Câu lạc bộ Công Tác Xã Hội được thành lập vào năm 2012 tại
                Trường Đại học Công Thương TP.HCM. Xuất phát từ những tâm hồn
                yêu thương, chúng tôi là nơi kết nối những bạn trẻ có chung một
                lý tưởng: mang yêu thương tình nguyện đến những người cần giúp
                đỡ.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hơn một thập kỷ hoạt động, CLB đã tổ chức hàng trăm chiến dịch,
                chương trình thiện nguyện, giúp đỡ hàng ngàn trẻ em, người già,
                và cộng đồng. Chúng tôi không chỉ làm mà còn lan tỏa tinh thần
                tình nguyện cho thế hệ trẻ.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-green-500 mb-6">
                Những Con Số
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-4xl font-bold text-green-500">200+</p>
                  <p className="text-gray-600">Thành viên tích cực</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-500">12+</p>
                  <p className="text-gray-600">Năm hoạt động</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-500">500+</p>
                  <p className="text-gray-600">Chiến dịch thiện nguyện</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-500 mb-12 text-center">
            Ban Chủ Nhiệm Nhiệm 2025 - 2026
          </h2>

          {/* Sử dụng Flexbox thay vì Grid để dễ dàng căn giữa hàng cuối */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "Nguyễn Minh Tâm",
                image: "../assets/images/tam.jpg",
                role: "Chủ Nhiệm",
              },
              {
                name: "Nguyện Đặng Kiểu Vân",
                image: "../assets/images/van.jpg",
                role: "Phó Chủ Nhiệm",
              },
              {
                name: "Đỗ Thị Mỹ Linh",
                image: "../assets/images/linh.jpg",
                role: "Bí Thư",
              },
              {
                name: "Trần Thanh Quý",
                image: "../assets/images/quy.jpg",
                role: "Uỷ Viên",
              },
              {
                name: "Trần Minh Tân",
                image: "../assets/images/tan.jpg",
                role: "Uỷ Viên",
              },
            ].map((member, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-green-500/10 to-transparent p-8 mb-4 rounded-lg text-center 
                     w-full sm:w-[calc(50%-2rem)] md:w-[calc(33.333%-2rem)] min-w-[280px]"
              >
                <div className="w-full h-full rounded-full bg-green-500/20 mx-auto flex items-center justify-center">
                  <img
                    src={new URL(member.image, import.meta.url).href}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-green-500 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-500 mb-12 text-center">
            Thành Tựu Nổi Bật
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                year: "2015",
                title: "Chương Trình Mùa Hè Xanh Lần Thứ Nhất",
                desc: "Khởi động chiến dịch hè xanh, mang xanh đến 5 tỉnh miền Tây",
              },
              {
                year: "2018",
                title: "Chương Trình Trăng Trẻ Thơ",
                desc: "Tặng quà cho trẻ em khó khăn nhân dịp trung thu",
              },
              {
                year: "2020",
                title: "Mái Ấm 1/6",
                desc: "Chiến dịch ủng hộ trẻ em nhân ngày Quốc tế thiếu nhi",
              },
              {
                year: "2023",
                title: "Giải Thưởng Câu Lạc Bộ Xuất Sắc",
                desc: "Nhận giải thưởng từ nhà trường vì những đóng góp xuất sắc",
              },
            ].map((achievement, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-l-4 border-green-500"
              >
                <p className="text-green-500 font-bold text-lg mb-2">
                  {achievement.year}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
