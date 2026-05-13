function AboutPreview() {
  return (
    <section id="about" className="border-t border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl text-orange-300">About Me</h2>
          <p className="mb-4 leading-7">
    I started my journey with HTML and CSS, where I struggled to understand layouts and responsive design. 
    Slowly, I moved to Tailwind CSS which helped me build UI faster and more efficiently.
  </p>

  <p className="mb-4 leading-7">
    Now I use React to build dynamic and reusable components. I focus on writing clean code and creating user-friendly interfaces.
  </p>

  <p className="mb-4 leading-7">
    Currently, I am improving my skills in API integration and real-world project building.
  </p>

  <p className="text-cyan-400 font-medium">
    Goal: Become a full-stack developer and build production-ready applications.
  </p>
  <p className="mt-6 italic text-slate-400">
  Still learning. Still building. Improving every day 🚀
</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Clean UI", "I focus on simple layouts, readable text, and polished design."],
            ["Responsive", "Every section is built to adapt nicely on mobile, tablet, and desktop."],
            ["React + Tailwind", "I use reusable components and utility classes for faster development."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;