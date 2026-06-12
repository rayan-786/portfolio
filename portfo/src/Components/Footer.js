import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 px-6 py-10 border-t border-white/10">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* LEFT - ABOUT */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-white text-xl font-semibold">
            Rayan Ahmad
          </h2>

          <p className="text-sm leading-7 max-w-sm mx-auto md:mx-0">
            Passionate Full Stack Developer building modern,
            responsive and user-friendly web applications
            using React & Tailwind CSS.
          </p>
        </div>

        {/* CENTER - QUICK LINKS */}
        <div className="space-y-4 text-center">
          <h3 className="text-white font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">
            <a
              href="/"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="/about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="/projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="/contact"
              className="hover:text-cyan-400 transition"
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

          <p>
            📧 ansarirayan86@gmail.com
          </p>

          <p>
            📍 Mumbai, India
          </p>

          <p className="text-green-400">
            🟢 Available for Internships
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center md:justify-end gap-4 pt-2">

            <a
              href="https://linkedin.com/in/rayan-ahmad786"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://github.com/rayan-786"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="mailto:ansarirayan86@gmail.com"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-red-400 transition duration-300"
            >
              <FaEnvelope size={20} />
            </a>

          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center">
        <p className="text-sm">
          © 2026 Rayan Ahmad. All rights reserved.
        </p>

        <p className="text-sm mt-2">
          Built with React & Tailwind CSS ✨
        </p>
      </div>

      {/* GRADIENT LINE */}
      <div className="mt-6 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

    </footer>
  );
}

export default Footer;