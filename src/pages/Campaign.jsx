import { NavLink } from "react-router-dom"; // Thay đổi ở đây
import { Target, Users, Heart, Calendar } from "lucide-react";

export default function Campaigns() {
  const campaigns = [
    {
      id: 1,
      title: "Chiến Dịch Xuân Tình Nguyện",
      subtitle: "Làm Đông - Vùng cao nguyên yên bình",
      season: "Xuân",
      date: "06/02/2026 - 09/02/2026",
      location: "Làm Đông, Lâm Đồng",
      description:
        "Chiến dịch Xuân tình nguyện là sự kiện trọng tâm hàng năm của câu lạc bộ, nơi các thành viên mang yêu thương đến các vùng cao nguyên khó khăn.",
      goals: [
        "Xây dựng công trình hạ tầng cho cộng đồng",
        "Tặng quà, dụng cụ học tập cho trẻ em",
        "Hỗ trợ y tế cho người già",
        "Tổ chức các buổi ngoại khóa cho trẻ",
      ],
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Mùa Hè Xanh",
      subtitle: "Mang xanh đến mọi miền",
      season: "Hè",
      date: "Tháng 6-7 hàng năm",
      location: "Các tỉnh miền Tây, Trung, Tây Nguyên",
      description:
        "Mùa hè xanh là chiến dịch hè của câu lạc bộ, kéo dài cả tháng hè, với mục tiêu mang xanh đến các vùng khó khăn.",
      goals: [
        "Xây dựng nhà vệ sinh, hệ thống nước sạch",
        "Trồng cây xanh cho cộng đồng",
        "Dạy kỹ năng sống cho trẻ em",
        "Tổ chức các hoạt động giáo dục cộng đồng",
      ],
      image:
        "https://images.unsplash.com/photo-1559307892-6f1ddca3d13c?w=500&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Trăng Trẻ Thơ",
      subtitle: "Tặng nụ cười cho trẻ em",
      season: "Thu",
      date: "Tháng 9 hàng năm",
      location: "Các trung tâm bảo trợ, nhà toàn dân",
      description:
        "Chiến dịch Trăng trẻ thơ được tổ chức nhân dịp Trung Thu, mang yêu thương đến trẻ em có hoàn cảnh khó khăn.",
      goals: [
        "Tặng quà, bánh nước, đồ chơi cho trẻ em",
        "Tổ chức các trò chơi vui vẻ",
        "Ghi nhận những tâm tư, mong ước của trẻ",
        "Xây dựng kế hoạch giúp đỡ dài hạn",
      ],
      image:
        "https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=500&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Mái Ấm 1/6",
      subtitle: "Tặng yêu thương cho trẻ em",
      season: "Hè",
      date: "01/06 hàng năm",
      location: "Toàn thành phố",
      description:
        "Chiến dịch Mái ấm 1/6 là chương trình hỗ trợ trẻ em nhân ngày Quốc tế thiếu nhi, lan tỏa yêu thương tình nguyện.",
      goals: [
        "Tặng quà cho trẻ em có hoàn cảnh đặc biệt",
        "Tổ chức các buổi ngoại khóa vui vẻ",
        "Kết nối các em với nguồn hỗ trợ giáo dục",
        "Khuyến khích các em phát triển tài năng",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-500/10 to-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-green-500 mb-6">
            Chiến Dịch Thiện Nguyện
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Các chiến dịch thiện nguyện hàng năm mang yêu thương đến những người
            cần giúp đỡ
          </p>
        </div>
      </section>

      {/* Campaigns */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {campaigns.map((campaign, idx) => (
              <div
                key={campaign.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:grid-cols-2" : ""}`}
              >
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <div
                        className="h-64 bg-gray-200 rounded-lg"
                        style={{
                          backgroundImage: `url(${campaign.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                    <div>
                      <span className="inline-block bg-green-500/10 text-green-500 px-3 py-1 text-sm font-semibold rounded mb-4">
                        Mùa {campaign.season}
                      </span>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {campaign.title}
                      </h2>
                      <p className="text-lg text-green-500 font-semibold mb-4">
                        {campaign.subtitle}
                      </p>

                      <div className="space-y-2 mb-6 text-gray-600">
                        <div className="flex gap-3">
                          <Calendar
                            size={20}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span>{campaign.date}</span>
                        </div>
                        <div className="flex gap-3">
                          <Target
                            size={20}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span>{campaign.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">
                        {campaign.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-bold text-foreground mb-3">
                          Mục Tiêu Chính:
                        </h4>
                        <ul className="space-y-2">
                          {campaign.goals.map((goal, i) => (
                            <li key={i} className="flex gap-3 text-gray-600">
                              <Heart
                                size={18}
                                className="text-green-500 flex-shrink-0 mt-0.5"
                              />
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <NavLink
                        href="/contact"
                        className="inline-block bg-green-500 text-green-500-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        Tìm Hiểu Thêm
                      </NavLink>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <span className="inline-block bg-green-500/10 text-green-500 px-3 py-1 text-sm font-semibold rounded mb-4">
                        Mùa {campaign.season}
                      </span>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {campaign.title}
                      </h2>
                      <p className="text-lg text-green-500 font-semibold mb-4">
                        {campaign.subtitle}
                      </p>

                      <div className="space-y-2 mb-6 text-gray-600">
                        <div className="flex gap-3">
                          <Calendar
                            size={20}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span>{campaign.date}</span>
                        </div>
                        <div className="flex gap-3">
                          <Target
                            size={20}
                            className="text-green-500 flex-shrink-0"
                          />
                          <span>{campaign.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6">
                        {campaign.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-bold text-foreground mb-3">
                          Mục Tiêu Chính:
                        </h4>
                        <ul className="space-y-2">
                          {campaign.goals.map((goal, i) => (
                            <li key={i} className="flex gap-3 text-gray-600">
                              <Heart
                                size={18}
                                className="text-green-500 flex-shrink-0 mt-0.5"
                              />
                              <span>{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <NavLink
                        href="/contact"
                        className="inline-block bg-green-500 text-green-500-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        Tìm Hiểu Thêm
                      </NavLink>
                    </div>
                    <div>
                      <div
                        className="h-64 bg-gray-200 rounded-lg"
                        style={{
                          backgroundImage: `url(${campaign.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
