import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ProjectsPage from "./pages/Project";
import AboutPreview from "./pages/AboutUs";
import ContactPage from "./pages/ContactUs";
import HomePage from "./pages/Home";
import GithubFinder from "./pages/GithubFinder";
import Chatbot from "./Components/Chatbot";
import useTheme from "./hooks/useTheme";
import WhatsAppButton from "./Components/WhatsAppButton";

function App() {

  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          theme === "light"
            ? "bg-white text-slate-900"
            : "bg-slate-950 text-white"
        }`}
      >
        <Navbar />

        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPreview />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/github" element={<GithubFinder />} />
          </Routes>
        </main>

        <Chatbot />

        <WhatsAppButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;