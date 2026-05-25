import { NavLink } from "react-router-dom";

function Navbar() {

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (

    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md overflow-hidden">

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO */}

        <NavLink
          to="/"
          className="text-sm sm:text-xl font-bold tracking-wide text-white whitespace-nowrap"
        >
          Rayan Ahmad
        </NavLink>

        {/* NAVBAR */}

        <nav className="flex flex-wrap items-center justify-end gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300">

          {/* NORMAL NAV ITEMS */}

          {navItems.map((item) => (

            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `transition duration-200 hover:text-white whitespace-nowrap ${
                  isActive
                    ? "text-white"
                    : "text-slate-300"
                }`
              }
            >
              {item.label}
            </NavLink>

          ))}

          {/* PROJECTS */}

          <NavLink
            to="/projects"
            className="cursor-pointer hover:text-white whitespace-nowrap transition duration-200"
          >
            Projects
          </NavLink>

          {/* RESUME */}

          <a
            href="/portfo/public/resume.pdf"
            download
            className="cursor-pointer hover:text-white whitespace-nowrap"
          >
            Resume
          </a>

        </nav>

      </div>

    </header>

  );
}

export default Navbar;