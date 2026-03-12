import { useEffect, useState } from "react";
import { getHomeData } from "../services/api";
// import PostCard from "../components/PostCard";
import Hero from "../components/Hero";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getHomeData().then((res) => {
      setPosts(res.data.latestPosts);
    });
  }, []);

  // Tách bài đầu tiên và các bài còn lại
  const mainPost = posts[0];
  const relatedPosts = posts.slice(1, 5); // Lấy từ bài thứ 2 đến bài thứ 5

  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto mt-6 px-4">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          PHONG TRÀO THIỆN NGUYỆN
        </h2>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* CỘT TRÁI (3/4): Bài viết chính */}
            <div className="md:col-span-3 relative">
              {mainPost && (
                <div className="group cursor-pointer">
                  <div className="overflow-hidden  rounded-lg h-[400px]">
                    <img
                      src={`http://localhost:5000${mainPost.media[0].url}`}
                      alt={mainPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  {/* Lớp phủ màu đen để chữ dễ đọc hơn (Gradient) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Nội dung nằm trên hình */}
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full uppercase font-bold">
                      {mainPost.category?.name || "Tin tức"}
                    </span>

                    <h3 className="text-white text-2xl md:text-4xl font-bold mt-3 leading-tight group-hover:text-green-400 transition">
                      {mainPost.title}
                    </h3>

                    <p className="text-gray-200 mt-3 line-clamp-2 max-w-2xl text-sm md:text-base">
                      {mainPost.content}
                    </p>

                    <div className="text-gray-400 text-xs mt-4">
                      {new Date(mainPost.createdAt).toLocaleDateString("vi-VN")}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* CỘT PHẢI (1/4): Danh sách bài liên quan */}
            <div className="md:col-span-1 flex flex-col gap-4">
              <h4 className="font-bold border-b-2 border-green-500 pb-2 mb-2">
                TIN LIÊN QUAN
              </h4>
              {relatedPosts.map((post) => (
                <div
                  key={post._id}
                  className="flex gap-3 group cursor-pointer border-b border-gray-100 pb-3"
                >
                  <img
                    src={`http://localhost:5000${post.media[0].url}`}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                    alt={post.title}
                  />
                  <h5 className="text-sm font-semibold line-clamp-2 group-hover:text-green-600">
                    {post.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Đang tải bài viết...</p>
        )}
      </section>
    </div>
  );
}

export default Home;
