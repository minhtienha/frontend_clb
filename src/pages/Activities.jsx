import { NavLink } from "react-router-dom"; // Thay đổi ở đây
import { Calendar, MapPin } from "lucide-react";

export default function Activities() {
  const activities = [
    {
      id: 1,
      title: "Sinh Hoạt Hàng Tuần",
      type: "Hoạt động thường kỳ",
      schedule: "Mỗi thứ Năm hàng tuần",
      location: "Sân trường Đại học Công Thương",
      description:
        "Gặp gỡ, chia sẻ kinh nghiệm và lên kế hoạch cho các chiến dịch sắp tới. Đây là nơi các thành viên có cơ hội học hỏi, gắn kết và phát triển kỹ năng công tác xã hội.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Hoạt Động Giờ Trái Đất",
      type: "Chiến dịch môi trường",
      schedule: "22/04 hàng năm",
      location: "Toàn bộ trường học và cộng đồng",
      description:
        "Cùng nhau bảo vệ hành tinh xanh thông qua các hoạt động trồng cây, làm sạch môi trường, và nâng cao ý thức bảo vệ môi trường.",
      image:
        "https://images.unsplash.com/photo-1559307892-6f1ddca3d13c?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Trại Truyền Thống",
      type: "Sự kiện gắn kết",
      schedule: "Tháng 5 hàng năm",
      location: "Nơi được xác định hàng năm",
      description:
        "Trại tập trung lực lượng, tăng cường sự kết nối giữa các thành viên. Qua các hoạt động văn hóa, trò chơi, và chia sẻ, chúng tôi nuôi dưỡng tinh thần đoàn kết.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Sinh Nhật Câu Lạc Bộ",
      type: "Sự kiện kỷ niệm",
      schedule: "Tháng 11 hàng năm",
      location: "Nhà văn hóa sinh viên",
      description:
        "Mừng kỷ niệm thành lập câu lạc bộ. Đây là dịp để tôn vinh những đóng góp, chia sẻ thành tựu và hướng tới những mục tiêu mới trong năm tiếp theo.",
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-500/10 to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-green-500 mb-6">
            Hoạt Động Của Chúng Tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Tìm hiểu về các hoạt động thường kỳ và sự kiện đặc biệt của câu lạc
            bộ
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <div
                  className="h-48 bg-gray-200"
                  style={{
                    backgroundImage: `url(${activity.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block bg-green-500/10 text-green-500 px-3 py-1 text-sm font-semibold rounded mb-4">
                    {activity.type}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {activity.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-gray-600">
                    <div className="flex gap-3 items-start">
                      <Calendar
                        size={18}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{activity.schedule}</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin
                        size={18}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Muốn Tham Gia Hoạt Động?
            </h2>
            <p className="text-gray-600 mb-6">
              Tất cả các hoạt động của câu lạc bộ đều mở cho các bạn sinh viên
              có niềm tin và đam mê với công tác xã hội.
            </p>
            <NavLink
              href="/recruitment"
              className="inline-block bg-green-500 text-green-500-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Đăng Ký Tham Gia
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
