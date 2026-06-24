import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-white text-lg sm:text-xl font-bold tracking-wide"
          >
            Rayan Ahmad
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `transition duration-200 hover:text-cyan-400 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-slate-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-lg transition"
            >
              Resume
            </a>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "max-h-96 border-t border-white/10"
            : "max-h-0"
        }`}
      >
        <div className="bg-slate-900 px-4 py-4 flex flex-col gap-2">

          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-3 px-4 rounded-lg transition ${
                  isActive
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <a
            href="/resume.pdf"
            download
            className="mt-2 bg-cyan-500 hover:bg-cyan-400 text-white text-center py-3 rounded-lg transition"
          >
            Download Resume
          </a>

        </div>
      </div>

    </header>
  );
}

export default Navbar;