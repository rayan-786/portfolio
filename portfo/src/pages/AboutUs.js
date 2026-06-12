function AboutPreview() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-slate-900/40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        {/* TOP CONTENT */}

        <div className="mb-12 max-w-4xl">

          <h2 className="text-3xl font-bold sm:text-4xl text-orange-300">
            About Me
          </h2>

          <p className="mt-6 mb-4 leading-7 text-sm sm:text-base">
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

          <p className="text-cyan-400 font-medium text-sm sm:text-base">
            Tech Stack: React • TypeScript • Node.js • Express.js • MongoDB • AWS • Docker • Nginx • PM2
          </p>

          <p className="mt-4 text-cyan-400 font-medium text-sm sm:text-base">
            Goal: Become a Full Stack Developer capable of building,
            deploying, and scaling production-ready applications.
          </p>

          <p className="mt-6 italic text-slate-400 text-sm sm:text-base">
            Always learning. Always building. Improving every day 🚀
          </p>

        </div>

        {/* CARDS */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold">
              Full Stack Development
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Building responsive frontend applications with React and scalable backend services using Node.js and Express.js.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold">
              Cloud & Deployment
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Hands-on experience with AWS EC2, AWS S3, Docker, Nginx, and PM2 for deployment, hosting, and server management.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg hover:border-cyan-400/30 transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-semibold">
              Clean & Responsive UI
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Creating modern, mobile-friendly interfaces with reusable components, accessibility, and performance in mind.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutPreview;