import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    // Xóa phần : React.ChangeEvent...
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-green-500 mb-8">Gửi Tin Nhắn</h2>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h3 className="text-xl font-bold text-green-600 mb-2">Cảm Ơn!</h3>
          <p className="text-gray-600">
            Chúng tôi đã nhận được tin nhắn của bạn. Chúng tôi sẽ liên hệ với
            bạn sớm.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Họ và Tên *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Nhập tên của bạn"
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
              placeholder="Nhập email của bạn"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Tiêu Đề *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Nhập tiêu đề tin nhắn"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Tin Nhắn *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              placeholder="Nhập tin nhắn của bạn"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-green-500-foreground py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition"
          >
            Gửi Tin Nhắn
          </button>
        </form>
      )}
    </div>
  );
}
