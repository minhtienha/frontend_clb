import { useState } from "react";
import { NavLink } from "react-router-dom"; // Thay đổi ở đây
import logo from "../assets/images/logo_truoc.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Danh sách các link để code gọn hơn và dễ quản lý
  const menuItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Giới thiệu", path: "/about" },
    { name: "Hoạt động", path: "/activities" },
    { name: "Chiến dịch", path: "/campaigns" },
    { name: "Sự kiện", path: "/events" },
    { name: "Tuyển thành viên", path: "/recruit" },
    { name: "Liên hệ", path: "/contact" },
  ];

  return (
    <nav className="bg-green-500 shadow text-white  fixed top-0 z-50 left-0 w-full">
      <div className="max-w-6xl mx-auto flex md:justify-between items-center h-16">
        <div className="font-bold text-2xl">
          <NavLink to="/">CLB CTXH HUIT</NavLink>
        </div>
        <NavLink to="/" className="h-full flex items-center">
          <img src={logo} alt="Logo" className="md:hidden h-full" />
        </NavLink>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="md:hidden text-2xl absolute right-4 bg-green-50/50 px-2 py-1 rounded-xl shadow-sm backdrop-blur-sm"
        >
          <span>{openMenu ? "✕" : "☰"}</span>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex h-full">
          {menuItems.map((item) => (
            <li key={item.path} className="h-full flex items-center">
              <NavLink
                to={item.path}
                className="h-full flex items-center px-4 transition-all duration-500 hover:bg-green-600 hover:px-6 rounded-md"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <ul className="md:hidden bg-green-500 flex right-0 top-16 flex-col absolute w-[80%] max-w-[300px] z-50 shadow-xl">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpenMenu(false)} // Đóng menu khi chọn
              className={({ isActive }) =>
                `px-6 py-3 text-start transition-all ${
                  isActive
                    ? "bg-green-600 border-l-4 border-yellow-400 font-bold"
                    : "border-l-4 border-transparent"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
