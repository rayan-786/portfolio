function Footer() {

  return (

    <footer className="bg-slate-950 text-slate-300 px-4 sm:px-6 py-10 sm:py-12 border-t border-white/10 overflow-hidden">

      {/* MAIN GRID */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-3">

        {/* LEFT - ABOUT */}

        <div className="space-y-4 text-center md:text-left">

          <h2 className="text-white text-lg sm:text-xl font-semibold break-words">
            Rayan Ahmad
          </h2>

          <p className="text-sm leading-6 max-w-md mx-auto md:mx-0 break-words">

            Passionate Full Stack Developer building modern,
            responsive and user-friendly web applications
            using React & Tailwind CSS.

          </p>

        </div>

        {/* CENTER - LINKS */}

        <div className="space-y-4 text-center">

          <h3 className="text-white font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2">

            <a
              href="/"
              className="hover:text-cyan-400 transition break-words"
            >
              Home
            </a>

            <a
              href="/about"
              className="hover:text-cyan-400 transition break-words"
            >
              About
            </a>

            <a
              href="/projects"
              className="hover:text-cyan-400 transition break-words"
            >
              Projects
            </a>

            <a
              href="/contact"
              className="hover:text-cyan-400 transition break-words"
            >
              Contact
            </a>

          </div>

        </div>

        {/* RIGHT - CONTACT */}

        <div className="space-y-4 text-center md:text-right">

          <h3 className="text-white font-semibold">
            Contact
          </h3>

          <p className="break-all sm:break-words">
            📧 ansarirayan86@gmail.com
          </p>

          <p>
            📍 Mumbai, India
          </p>

          <p className="text-green-400 break-words">
            🟢 Available for Internships
          </p>

        </div>

      </div>

      {/* DIVIDER */}

      <div className="border-t border-white/10 mt-10 pt-6 text-center px-2">

        <p className="text-xs sm:text-sm break-words">
          © 2026 Rayan Ahmad. All rights reserved.
        </p>

        <p className="text-xs sm:text-sm mt-2 break-words">
          Built with React & Tailwind CSS ✨
        </p>

      </div>

      {/* ANIMATED LINE */}

      <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></div>

    </footer>

  );
}

export default Footer;