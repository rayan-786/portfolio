import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 w-full">

      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* CONTACT */}
          <div className="text-center md:text-left">

            <h3 className="text-white text-lg font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-2">
              <p className="text-sm break-words">
                📧 ansarirayan86@gmail.com
              </p>

              <p>
                📍 Mumbai, India
              </p>

              <p className="text-green-400 font-medium">
                🟢 Available for Internships
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-4 mt-5">

              <a
                href="https://linkedin.com/in/rayan-ahmad786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-blue-500 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/rayan-786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-white transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="mailto:ansarirayan86@gmail.com"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 hover:text-red-400 transition-all duration-300"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

          </div>

          {/* ABOUT */}
          <div className="text-center px-2">

            <h2 className="text-white text-2xl font-bold mb-4">
              Rayan Ahmad
            </h2>

            <p className="text-sm leading-7 max-w-sm mx-auto">
              Passionate Full Stack Developer building modern,
              responsive and user-friendly web applications
              using React, Node.js and Tailwind CSS.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div className="text-center md:text-right">

            <h3 className="text-white text-lg font-semibold mb-4">
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

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">

          <p className="text-sm">
            © 2026 Rayan Ahmad. All rights reserved.
          </p>

          <p className="text-sm mt-2 text-slate-400">
            Built with React, Tailwind CSS & Node
          </p>

        </div>

        <div className="mt-6 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

      </div>

    </footer>
  );
}

export default Footer;