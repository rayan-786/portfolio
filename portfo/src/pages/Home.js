import  {Link}  from "react-router-dom";
function Hero() {
  return (
    <section className="mx-auto items-start gap-10 px-4 py-16 sm:px-6 lg:py-24">
      
      {/* LEFT SIDE */}
      <div className="flex gap-10 justify-center items-center">
        <div>
          <p className="mb-4  inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
            Full Stack Developer Portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I am <span className="text-cyan-400">RAYAN AHMAD</span>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            I build modern, responsive, and user-friendly websites using HTML5,
            CSS3, JavaScript, Tailwind CSS, and React.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/project"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="rounded-xl border border-white/15 px-6 py-3 font-semibold text-white hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
        </div>
        {/* SMALL IMAGE */}
        <div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
              alt="Developer workspace"
              className="h-[240px] w-full rounded-2xl object-cover"
            /> 
          </div>
       </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex gap-20 ml-10 mt-7 justify-center items-center ">

        <div>
            <img
              src="https://imgs.search.brave.com/B92HUfvNDEgPNESfT__Xia9dwAcV_arUrijZsQ-jOmI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzE0LzkyLzc1/LzM2MF9GXzMxNDky/NzU3NV95cUZNQXVY/RlROQzZnQmZsUjJu/alJaNGJRYjhkQWI3/eS5qcGc"
              alt="coding setup"
              className="h-[275px] w-full rounded-2x1 object-cover"
            />
        </div>

        <div>
            <p className="mt-[170px] font-bold text-lg ">
                I am Rayan Passioante Web developer currently learning full stack web development by adding new skills in my personal portfolio
            </p>
          <Link to="/about">
              <button className="mt-6 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black hover:bg-cyan-300">
                Click More
              </button>
          </Link>
        </div>
     
      </div>
    </section>
  )
}

export default Hero;