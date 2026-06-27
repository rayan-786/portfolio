import {motion} from "framer-motion";
const fadeLeft = {
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};
function AboutPreview() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 dark:border-white/10 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 pt-2 pb-16 sm:px-6 lg:px-8 lg:pt-6 lg:pb-20">

        {/* TOP CONTENT */}

        <motion.div
          className="mb-12 max-w-4xl"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.h2
  initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-3xl font-bold sm:text-4xl text-black dark:text-white"
              >
            About Me
          </motion.h2>

          <p className="mt-6 mb-4 leading-7 text-sm sm: text-black dark:text-white">
            I am a BSc IT student and Full Stack Developer passionate about
            building scalable web applications and cloud-based solutions.
            I enjoy transforming ideas into real-world products with clean code,
            responsive design, and modern development practices.
          </p>

          <p className="mb-4 leading-7 text-sm sm:text-base">
            My experience includes developing frontend applications using
            React, TypeScript, JavaScript, and Tailwind CSS, along with
            backend development using Node.js and Express.js. I focus on
            creating fast, user-friendly, and maintainable applications.
          </p>

          <p className="mb-4 leading-7 text-sm sm:text-base">
            Beyond development, I have hands-on experience with AWS EC2,
            AWS S3, Docker, Nginx, and PM2 for deployment, hosting,
            and server management. I enjoy learning how modern applications
            are built, deployed, and scaled in production environments.
          </p>

          <p className="text-black dark:text-white font-medium text-sm sm:text-base">
            Tech Stack: React • TypeScript • Node.js && Next.js • Express.js •  MongoDB • AWS • Docker • Nginx • PM2
          </p>

          <p className="mt-4 text-black dark:text-white font-medium text-sm sm:text-base">
            Goal: Become a DevOps Engineer capable of building CI/CD Pipeline,
            deploying, load balancing production-ready applications.
          </p>

          <p className="mt-6 italic text-black dark:text-slate-400 text-sm sm:text-base">
            Always learning. Always building. Improving every day 🚀
          </p>

        </motion.div>

        {/* CARDS */}

       <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

          <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 shadow-lg hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
            >
            <h3 className="text-lg sm:text-xl font-semibold">
              Full Stack Development
            </h3>

            <p className="mt-3 text-sm leading-6 text-black dark:text-white">
              Building responsive frontend applications with React and scalable backend services using Node.js and Express.js.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
            }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 shadow-lg hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Cloud & Deployment
            </h3>

            <p className="mt-3 text-sm leading-6 text-black dark:text-white">
              Hands-on experience with AWS EC2, AWS S3, Docker, Nginx, and PM2 for deployment, hosting, and server management.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{
              duration: 0.4,
            }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-6 shadow-lg hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Clean & Responsive UI
            </h3>

            <p className="mt-3 text-sm leading-6 text-black dark:text-white">
              Creating modern, mobile-friendly interfaces with reusable components, accessibility, and performance in mind.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default AboutPreview;