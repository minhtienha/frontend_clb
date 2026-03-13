import { Sparkles } from "lucide-react";
import { useState } from "react";

export default function RecruitmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    studentId: "",
    major: "",
    year: "",
    interest: "",
    message: "",
  });

  const handleChange = () => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        studentId: "",
        major: "",
        year: "",
        interest: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-green-500 mb-12 text-center">
          Đơn Đăng Ký
        </h2>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <Sparkles size={48} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-600 mb-2">
              Cảm Ơn Bạn!
            </h3>
            <p className="text-gray-600 mb-4">
              Chúng tôi đã nhận được đơn đăng ký của bạn. Ban tuyển dụng sẽ liên
              hệ với bạn sớm.
            </p>
            <p className="text-sm text-gray-500">
              Cửa sổ sẽ tự động đóng trong vài giây...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Họ và Tên *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập họ và tên"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Số Điện Thoại *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Mã Sinh Viên *
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập mã sinh viên"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Chuyên Ngành *
                </label>
                <input
                  type="text"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Nhập chuyên ngành"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Năm Học *
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Chọn năm học</option>
                  <option value="1">Năm 1</option>
                  <option value="2">Năm 2</option>
                  <option value="3">Năm 3</option>
                  <option value="4">Năm 4</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Bạn Quan Tâm Đến Ban Nào? *
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Chọn ban chuyên môn</option>
                <option value="hoatdong">Ban Hoạt Động</option>
                <option value="taichính">Ban Tài Chính</option>
                <option value="tuyentruyền">Ban Tuyên Truyền</option>
                <option value="nhansự">Ban Nhân Sự</option>
                <option value="doinngoại">Ban Đối Ngoại</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Lý Do Bạn Muốn Tham Gia CLB
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Chia sẻ lý do, mong muốn của bạn..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-green-500-foreground py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
            >
              Gửi Đơn Đăng Ký
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Bằng cách gửi đơn, bạn đồng ý với các điều khoản tuyển dụng của
              chúng tôi
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
