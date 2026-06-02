import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./routes/HomePage";
import ProjectDetailPage from "./routes/ProjectDetailPage";
import NotFoundPage from "./routes/NotFoundPage";
import ScrollToTop from "./utils/scrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden antialiased selection:bg-indigo-600 selection:text-white">
        
        {/* Unifying Head navigation */}
        <Header />

        {/* Dynamic page viewport content */}
        <main className="min-h-[calc(100vh-64px-160px)]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Professional Footer */}
        <Footer />
      </div>
    </Router>
  );
}
