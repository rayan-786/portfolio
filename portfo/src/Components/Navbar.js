import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        <NavLink to="/" className="text-xl font-bold tracking-wide text-white">
          Rayan Ahmad
        </NavLink>

        <nav className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-slate-300">

          {/* NORMAL NAV ITEMS */}
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-200 hover:text-white ${
                  isActive ? "text-white" : "text-slate-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* 🔥 PROJECT DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-white">Projects</span>

            <div className="absolute left-0 mt-2 hidden group-hover:block bg-slate-900 rounded shadow-lg min-w-[150px]">
              <NavLink to="/projects" className="block px-4 py-2 hover:bg-slate-700">
                Project 1
              </NavLink>
              <NavLink to="/project" className="block px-4 py-2 hover:bg-slate-700">
                Project 2
              </NavLink>
              <NavLink to="/project" className="block px-4 py-2 hover:bg-slate-700">
                Project 3
              </NavLink>
              <NavLink to="/project" className="block px-4 py-2 hover:bg-slate-700">
                Project 4
              </NavLink>
            </div>
          </div>

          {/* 🔥 RESUME DROPDOWN */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-white">Resume</span>

            <div className="absolute right-0 mt-2 hidden group-hover:block bg-slate-900 rounded shadow-lg">
              <a
                href="/resume.pdf"
                download
                className="block px-4 py-2 hover:bg-slate-700"
              >
                Download ⬇️
              </a>
            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}

export default Navbar;