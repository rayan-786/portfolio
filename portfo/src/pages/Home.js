import { Link } from "react-router-dom";
import rayanImage from "../assets/rayan.jpg.png"
function Hero() {

  return (

    <section className="mx-auto px-4 py-16 sm:px-6 lg:py-24 overflow-hidden">

      {/* TOP SECTION */}

      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-center">

        {/* LEFT SIDE */}

        <div className="text-center lg:text-left">

          <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs sm:text-sm text-cyan-300">

            Full Stack Developer | Exploring Cloud & DevOps

          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-4xl lg:text-3xl break-words">

            Hi, I'am{" "}

            <span className="text-cyan-400">
              Rayan Ahmad
            </span>

          </h1>

          <p className="mt-6 max-w-xl text-sm sm:text-lg leading-7 text-slate-300 mx-auto lg:mx-0 break-words">
             Full Stack Developer | BSc IT Student

              Building scalable web applications with React, Node.js,
              MongoDB, AWS, Docker and modern cloud technologies.

              🟢 Open to Full Stack & Software Development Internships
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

            <a
              href="/projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 text-sm sm:text-base font-semibold text-slate-950 hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/5"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* SMALL IMAGE */}

        <div className="w-full max-w-sm">

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">

            <img
              src={rayanImage}
              alt="Rayan Ahmad"
             className="h-[220px] sm:h-[240px] w-full rounded-2xl object-cover object-[center_15%]"
            />

          </div>

        </div>

      </div>

      {/* BOTTOM SECTION */}

      <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-center">

        {/* STATS CARDS */}

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">3+Projects</h3>
          <p className="mt-2 text-sm text-slate-300">
            Projects Built
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">AWS EC2&S3</h3>
          <p className="mt-2 text-sm text-slate-300">
            Cloud Skills
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">Docker</h3>
          <p className="mt-2 text-sm text-slate-300">
            Containerization
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-5 text-center">
          <h3 className="text-3xl font-bold text-cyan-400">React + Node.js</h3>
          <p className="mt-2 text-sm text-slate-300">
            Full Stack Skills
          </p>
        </div>

      </div>

        {/* TEXT */}

        <div className="max-w-xl text-center lg:text-left">

          <p className="text-sm sm:text-lg font-bold leading-8 break-words">

           Building modern web applications with React, Node.js, MongoDB, AWS, Docker and TypeScript. Focused on creating responsive, scalable and production-ready solutions while continuously improving through real-world projects.

          </p>

          <Link to="/about">

            <button className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 text-sm sm:text-base font-semibold text-black hover:bg-cyan-300">

              Click More

            </button>

          </Link>

        </div>

      </div>

    </section>

  );
}

export default Hero;