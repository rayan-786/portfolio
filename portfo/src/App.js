import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './Components/Footer';
import ProjectsPage from './pages/Project';
import AboutPage from './pages/AboutUs';
import ContactPage from './pages/ContactUs';
import HomePage from './pages/Home';
import GithubFinder from "./pages/GithubFinder";











function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/github" element={<GithubFinder />} />
            
           
          



           
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;
