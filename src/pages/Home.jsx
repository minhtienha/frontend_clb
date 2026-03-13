import { useEffect, useState } from "react";
import { getHomeData } from "../services/api";
import { ArrowRight, Heart, Users, Zap, Target } from "lucide-react";
import { NavLink } from "react-router-dom"; // Thay đổi ở đây
import Hero from "../components/Hero";

function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-500 mb-6 text-green-500">
                Về CLB Công Tác Xã Hội
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Triều trái tim - Một ngon lửa, câu lạc bộ là nơi kết nối những
                trái tim tình nguyện, những tâm hồn muốn mang yêu thương lan tỏa
                đến mọi miền của đất nước.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Thành lập vào năm 2012 tại Trường Đại học Công Thương TP.HCM,
                chúng tôi là nơi nuôi dưỡng tinh thần tình nguyện, mang yêu
                thương đến những người cần giúp đỡ.
              </p>
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
              >
                Tìm hiểu thêm <ArrowRight size={20} />
              </NavLink>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg h-80 flex items-center justify-center">
              <div className="text-center">
                <Users size={80} className="mx-auto text-green-500" />
                <p className="text-gray-600 text-lg">Hơn 100+ thành viên</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-green-500 mb-12 text-center">
            Hoạt Động Nổi Bật
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Chiến Dịch Thiện Nguyện",
                desc: "Xuân Tình Nguyện, Mùa Hè Xanh, Trăng Trẻ Thơ, Mái Ấm 1/6",
              },
              {
                icon: Zap,
                title: "Giờ Trái Đất",
                desc: "Bảo vệ môi trường và tăng cường ý thức cộng đồng",
              },
              {
                icon: Target,
                title: "Trại Truyền Thống",
                desc: "Tập trung lực lượng, tăng cường kết nối và giá trị chung",
              },
            ].map((activity, idx) => {
              const Icon = activity.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <Icon size={48} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
