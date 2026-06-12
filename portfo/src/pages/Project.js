import { motion } from "framer-motion";

function ProjectsPreview() {

  const projects = [
    {
      tag: "Task-Management System",
      desc:
        "Built a full-stack task management application using React.js, Node.js, Express.js and MongoDB with JWT authentication, OTP-based password reset, protected routes role base access control.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      demoLink: "https://rayan-auth.vercel.app",
      GitHubLink: "https://github.com/rayan-786/task-management",
    },
    {
     
      tag: "ATS Resume Checker",
      desc:
        "Built an AI-powered Resume Analyzer using React, Typescript, and Gemini AI API, enabling users to upload resumes and receive ATS scores with detailed AI-generated recommendations..",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
        demoLink: "https://resumetest.duckdns.org",
        GitHubLink: "https://github.com/rayan-786/resume.ai",
    },
    {
  
      tag: "Portfolio Website",
      desc:
        "Built and developed a responsive portfolio website using React.js, and TailwindCSS to showcase projects, technical skills, and contact information.Integrated SMTP-based contact form and stored user messages in MongoDB.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        demoLink: "https://rayan.website",
        GitHubLink: "https://github.com/rayan-786/portfolio",
    },
    {
     
      tag: "GitHub Profile Finder",
      desc:
        "Developed GitHub Finder web application that allows users  search and explore GitHub profiles in real time using the Github API.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        demoLink: "/github",
        GitHubLink: "/github",
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
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Live Demo
                </motion.a>

               <motion.a
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.GitHubLink}
                className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                GitHub
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