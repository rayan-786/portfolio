import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* LEFT */}
          <div className="text-center md:text-left">

            <h2 className="text-2xl font-bold text-white">
              Rayan Ahmad
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-400 max-w-xs mx-auto md:mx-0">
              Full Stack Developer passionate about building
              modern, responsive and scalable web applications.
            </p>

          </div>

          {/* CENTER */}
          <div className="text-center">

            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-wrap justify-center gap-4 md:flex-col md:gap-3">

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

          {/* RIGHT */}
          <div className="text-center md:text-right">

            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <p className="text-sm break-all">
              📧 ansarirayan86@gmail.com
            </p>

            <p className="mt-3">
              📍 Mumbai, India
            </p>

            <p className="mt-3 text-green-400 font-medium">
              🟢 Available for Internships
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-end gap-3 mt-5">

              <a
                href="https://linkedin.com/in/rayan-ahmad786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-blue-500 transition"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://github.com/rayan-786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="mailto:ansarirayan86@gmail.com"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-red-400 transition"
              >
                <FaEnvelope size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center">

          <p className="text-sm">
            © 2026 Rayan Ahmad. All rights reserved.
          </p>

          <p className="text-sm mt-2 text-slate-400">
            Built with React, Tailwind CSS & Node
          </p>

        </div>

        {/* GRADIENT LINE */}
        <div className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

      </div>

    </footer>
  );
}

export default Footer;