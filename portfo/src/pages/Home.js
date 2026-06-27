import { Link } from "react-router-dom";
import rayanImage from "../assets/rayan.jpg.png";
import { motion } from "framer-motion";

const leftVariant = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const rightVariant = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute top-60 right-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[100px]" />

    </div>

      {/* TOP SECTION */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* LEFT */}
        <motion.div
  variants={leftVariant}
  initial="hidden"
  animate="visible"
  className="w-full lg:w-1/2 text-center lg:text-left"
>

          <p className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs sm:text-sm text-black dark:text-cyan-300">
            Full Stack Developer | Exploring Cloud & DevOps
          </p>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white">
            Hi, I'm{" "}
            <span className="text-black dark:text-white">
              Rayan Ahmad
            </span>
          </h1>

         <p className="mt-6 text-base sm:text-lg leading-8 max-w-2xl mx-auto lg:mx-0 text-slate-700 dark:text-slate-300">
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
              className="
                w-full
                sm:w-auto
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-500
                px-6
                py-3
                text-center
                font-semibold
                text-black
                dark:text-white
                transition-all
                duration-300
                hover:scale-105
                "
            >
              View Projects
            </a>

            <a
              href="/contact"
                            className="
                w-full
                sm:w-auto
                rounded-xl
                 bg-gradient-to-r
                from-cyan-500
                to-blue-500
                px-6
                py-3
                text-center
                font-semibold
               text-slate-900 dark:text-white
                transition-all
                duration-300
                hover:bg-cyan-400/10
                hover:border-cyan-400
                "
            >
              Contact Me
            </a>

          </div>

        </motion.div>

        {/* IMAGE */}
        <motion.div
  variants={rightVariant}
  initial="hidden"
  animate="visible"
  className="w-full lg:w-1/2 flex justify-center"
>

          <div
            className="
            relative
            max-w-sm
            w-full
            rounded-3xl
            border
            border-cyan-400/20
            bg-white/5
            backdrop-blur-md
            p-4
            shadow-2xl
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]
            ">

            <img
              src={rayanImage}
              alt="Rayan Ahmad"
              className="w-full h-[280px] sm:h-[380px] rounded-2xl object-cover object-[center_15%]"
            />

          </div>

        </motion.div>

      </div>

      {/* STATS */}
      <div className="mt-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              3+
            </h3>
            <p className="mt-2 text-sm text-black dark:text-cyan-300">
              Projects Built
            </p>
          </div>
          <div

                className="
                rounded-2xl
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-md
                p-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
                ">
            <h3 className="text-2xl font-bold text-cyan-400">
              AWS EC2 & S3
            </h3>
            <p className="mt-2 text-sm text-black dark:text-cyan-300">
              Cloud Skills
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              Docker
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-cyan-300">
              Containerization
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center">
            <h3 className="text-2xl font-bold text-cyan-400">
              React + Node.js
            </h3>
            <p className="mt-2 text-sm text-black dark:text-cyan-300">
              Full Stack Skills
            </p>
          </div>

        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="mt-16 text-center max-w-4xl mx-auto">

        <p className="text-base sm:text-lg leading-8 text-black dark:text-cyan-300">
          Building modern web applications with React, Node.js, MongoDB,
          AWS, Docker and TypeScript. Focused on creating responsive,
          scalable and production-ready solutions while continuously
          improving through real-world projects.
        </p>

        <Link to="/about">

          <button className="
              mt-8
              rounded-xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              px-6
              py-3
              font-semibold
              text-black
              dark:text-white
              transition-all
              duration-300
              hover:scale-105
              ">
            Learn More About Me
          </button>

        </Link>

      </div>

    </section>
  );
}

export default Hero;