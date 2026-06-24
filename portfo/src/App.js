import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ProjectsPage from "./pages/Project";
import AboutPreview from "./pages/AboutUs";
import ContactPage from "./pages/ContactUs";
import HomePage from "./pages/Home";
import GithubFinder from "./pages/GithubFinder";
import Chatbot from "./Components/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white flex flex-col">

        <Navbar />

        {/* Navbar fixed hai isliye padding-top */}
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPreview />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/github" element={<GithubFinder />} />
          </Routes>
        </main>

        <Chatbot />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;