import { Calendar, MapPin, Users, Clock } from "lucide-react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "Chiến Dịch Xuân Tình Nguyện 2026",
      date: "06/02/2026 - 09/02/2026",
      time: "Toàn ngày",
      location: "Làm Đông, Lâm Đồng",
      category: "Chiến dịch",
      attendees: "150+",
      description:
        "Chiến dịch Xuân tình nguyện 2026 là hoạt động lớn nhất của năm, mang yêu thương đến vùng cao nguyên. Các thành viên sẽ cùng xây dựng công trình, tặng quà cho trẻ em, và hỗ trợ cộng đồng địa phương.",
      highlights: [
        "Xây dựng công trình hạ tầng",
        "Tặng quà, dụng cụ học tập",
        "Khám chữa bệnh miễn phí",
        "Tổ chức lớp học thêm",
      ],
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Giờ Trái Đất 2026",
      date: "22/04/2026",
      time: "19:30 - 21:30",
      location: "Toàn trường Đại học Công Thương",
      category: "Hoạt động",
      attendees: "500+",
      description:
        "Giờ Trái Đất là sự kiện toàn cầu để bảo vệ môi trường. Chúng tôi sẽ tắt đèn 1 giờ và tổ chức các hoạt động nâng cao ý thức bảo vệ môi trường.",
      highlights: [
        "Tắt đèn 1 giờ toàn trường",
        "Trồng cây xanh",
        "Hội thảo môi trường",
        "Tuyên truyền giảm chất thải",
      ],
      image:
        "https://images.unsplash.com/photo-1559307892-6f1ddca3d13c?w=500&h=300&fit=crop",
      status: "upcoming",
    },
    {
      id: 3,
      title: "Trại Truyền Thống CLB 2026",
      date: "Tháng 5/2026",
      time: "Tính toán kỹ",
      location: "Nơi chưa xác định",
      category: "Sự kiện gắn kết",
      attendees: "200+",
      description:
        "Trại truyền thống là dịp để các thành viên gặp gỡ, tăng cường sự kết nối, và chia sẻ những giá trị cốt lõi của câu lạc bộ.",
      highlights: [
        "Các trò chơi team building",
        "Hoạt động văn hóa, âm nhạc",
        "Chia sẻ kinh nghiệm",
        "Tuyên dương thành viên xuất sắc",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      status: "upcoming",
    },
    {
      id: 4,
      title: "Sinh Nhật CLB Lần Thứ 14",
      date: "Tháng 11/2026",
      time: "18:00 - 22:00",
      location: "Nhà văn hóa sinh viên",
      category: "Sự kiện kỷ niệm",
      attendees: "300+",
      description:
        "Mừng kỷ niệm 14 năm thành lập câu lạc bộ. Đây là dịp để tôn vinh những đóng góp, chia sẻ thành tựu và hướng tới những mục tiêu mới.",
      highlights: [
        "Tiệc kỷ niệm",
        "Tuyên dương thành viên",
        "Công bố kế hoạch năm mới",
        "Chương trình văn nghệ",
      ],
      image:
        "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=500&h=300&fit=crop",
      status: "upcoming",
    },
    {
      id: 5,
      title: "Trăng Trẻ Thơ 2025",
      date: "15/09/2025",
      time: "14:00 - 18:00",
      location: "Các trung tâm bảo trợ",
      category: "Chiến dịch",
      attendees: "100+",
      description:
        "Hoạt động tặng quà, bánh nước cho trẻ em nhân dịp Trung Thu.",
      highlights: [
        "Tặng quà cho trẻ em",
        "Tổ chức trò chơi vui vẻ",
        "Chia sẻ bánh nước",
        "Ghi nhận mong ước trẻ",
      ],
      image:
        "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=500&h=300&fit=crop",
      status: "past",
    },
  ];

  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const pastEvents = events.filter((e) => e.status === "past");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-500/10 to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-green-500 mb-6">
            Sự Kiện Của Chúng Tôi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Khám phá các sự kiện sắp tới và quá khứ của câu lạc bộ
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-500 mb-12">
            Sự Kiện Sắp Tới
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <div
                  className="h-48 bg-gray-200"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block bg-green-500/10 text-green-500 px-3 py-1 text-sm font-semibold rounded mb-4">
                    {event.category}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-3 mb-6 text-gray-600">
                    <div className="flex gap-3 items-start">
                      <Calendar
                        size={18}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Clock
                        size={18}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin
                        size={18}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Users
                        size={18}
                        className="text-green-500 flex-shrink-0 mt-0.5"
                      />
                      <span>{event.attendees} người tham dự</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">
                      Điểm Nổi Bật:
                    </h4>
                    <ul className="space-y-1">
                      {event.highlights.slice(0, 2).map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex gap-2"
                        >
                          <span className="text-green-500">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-green-500 mb-12">
              Sự Kiện Đã Qua
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white border border-border rounded-lg overflow-hidden"
                >
                  <div
                    className="h-48 bg-gray-200 opacity-70"
                    style={{
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="p-6">
                    <span className="inline-block bg-gray-200 text-gray-700 px-3 py-1 text-sm font-semibold rounded mb-4">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>📅 {event.date}</p>
                      <p>📍 {event.location}</p>
                      <p>👥 {event.attendees}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
