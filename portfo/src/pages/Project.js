import { motion } from "framer-motion";

function ProjectsPreview() {

  const projects = [
    {
      title: "Project One",
      tag: "Landing Page",
      desc:
        "A clean, modern landing page built with React and Tailwind CSS. It focuses on strong visual hierarchy, smooth spacing, and a mobile-first layout.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Project Two",
      tag: "GitHub Profile Finder",
      desc:
        "A responsive dashboard interface with reusable cards, polished sections, and a practical layout designed for productivity and clarity.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Project Three",
      tag: "Portfolio Website",
      desc:
        "A personal portfolio website that highlights skills, projects, and contact details while keeping the design simple, elegant, and professional.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Project Four",
      tag: "Business Website",
      desc:
        "A business-oriented website section with strong CTA placement, responsive content blocks, and a refined visual style for client-facing work.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (

    <section
      id="projects"
      className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >

      {/* HEADING */}

      <div className="mb-12 max-w-3xl">

        <h2 className="text-3xl font-bold sm:text-4xl break-words">
          Projects
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-7 break-words">

          Here are four projects shown in alternating
          layout so the section feels dynamic and easy
          to read.

        </p>

      </div>

      {/* PROJECTS */}

      <div className="space-y-16">

        {projects.map((project, index) => (

          <motion.div
            key={project.title}

            initial={{ opacity: 0, y: 80 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.7 }}

            viewport={{ once: true }}

            className={`grid items-center gap-8 lg:grid-cols-2 ${
              index % 2 === 1
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }`}
          >

            {/* IMAGE */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={index % 2 === 1 ? "lg:order-2" : ""}
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-[240px] sm:h-[320px] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
              />

            </motion.div>

            {/* CONTENT */}

            <div
              className={`break-words ${
                index % 2 === 1
                  ? "lg:order-1"
                  : ""
              }`}
            >

              <span className="inline-flex rounded-full bg-cyan-400/10 px-4 py-1 text-xs sm:text-sm font-medium text-cyan-300 ring-1 ring-cyan-400/20">

                {project.tag}

              </span>

              <h3 className="mt-4 text-2xl sm:text-3xl font-bold break-words">

                {project.title}

              </h3>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300 leading-7 break-words">

                {project.desc}

              </p>

              {/* BUTTONS */}

              <div className="mt-6 flex flex-wrap gap-4">

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/github"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Demo
                </motion.a>

                <motion.a
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}

                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}

                  href="/about"
                  className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                  Learn More
                </motion.a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}

export default ProjectsPreview;