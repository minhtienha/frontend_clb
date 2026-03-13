import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Campaigns from "./pages/Campaign";
import Events from "./pages/Events";
import Recruitment from "./pages/Recruiment";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-white">
        <Navbar />
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/events" element={<Events />} />
            <Route path="/recruit" element={<Recruitment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
