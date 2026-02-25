import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/Homepage";
import AboutPage from "./Pages/Aboutpage";
import EventsPage from "./Pages/EventsPage";
import GalleryPage from "./Pages/GalleryPage";
import ResourcePage from "./Pages/ResourcePage";
import TeamPage from "./Pages/TeamPage";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
export default function App() {
  const [theme, setThemeMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loader
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <ScrollToTop />
      <Navbar theme={theme} setThemeMode={setThemeMode} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
