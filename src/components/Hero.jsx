import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBanners } from "../services/api";

// Import Swiper React components và Styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Hero.css";

const Hero = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await getBanners();
        setBanners(response.data);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  if (!banners.length) return null;

  return (
    <div className="max-w-6xl mx-auto mt-2 rounded-xl overflow-hidden shadow-2xl">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.order}>
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[450px]">
              <img
                src={`http://localhost:5000${banner.image}`}
                alt={banner.title}
                className="w-full h-full object-cover md:object-contain bg-gray-100"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
