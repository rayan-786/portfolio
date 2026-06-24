import { Link } from "react-router-dom";
import rayanImage from "../assets/rayan.jpg.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">

      {/* TOP SECTION */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* LEFT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs sm:text-sm text-cyan-300">
            Full Stack Developer | Exploring Cloud & DevOps
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Rayan Ahmad
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-8 text-slate-300 max-w-2xl mx-auto lg:mx-0">
            Full Stack Developer & BSc IT Student passionate about building
            scalable web applications using React, Node.js, MongoDB, AWS,
            Docker and modern cloud technologies.

            <br />
            <br />

            🟢 Open to Full Stack & Software Development Internships.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a
              href="/projects"
              className="w-full sm:w-auto rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="w-full sm:w-auto rounded-xl border border-white/15 px-6 py-3 text-center font-semibold text-white hover:bg-white/5 transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">

          <div className="relative max-w-sm w-full rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">

            <img
              src={rayanImage}
              alt="Rayan Ahmad"
              className="w-full h-[280px] sm:h-[380px] rounded-2xl object-cover object-[center_15%]"
            />

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="mt-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              3+
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Projects Built
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              AWS EC2 & S3
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Cloud Skills
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              Docker
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Containerization
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              React + Node.js
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Full Stack Skills
            </p>
          </div>

        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-16 text-center max-w-4xl mx-auto">

        <p className="text-base sm:text-lg leading-8 text-slate-300">
          Building modern web applications with React, Node.js, MongoDB,
          AWS, Docker and TypeScript. Focused on creating responsive,
          scalable and production-ready solutions while continuously
          improving through real-world projects.
        </p>

        <Link to="/about">

          <button className="mt-8 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black hover:bg-cyan-300 transition">
            Learn More About Me
          </button>

        </Link>

      </div>

    </section>
  );
}

export default Hero;