import { useState } from "react";
import axios from "axios";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ContactPreview() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/api/contact`,
        form
      );

      alert(response.data.message);

      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200 dark:border-white/10bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-4 pt-6 pb-16 sm:px-6 md:pt-8 lg:px-8 lg:pt-10 lg:pb-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

         <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >

            <motion.h2
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            transition={{ duration:0.7 }}
            viewport={{ once:true }}className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
              Contact Me
            </motion.h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-black dark:text-white">
              Use this form to send me a message.
              You can connect with me for freelance
              work, internships, collaborations,
              or project feedback.
            </p>

            <div className="mt-10 space-y-5 text-black dark:text-white">

              <p className="flex items-center gap-3 break-all">
                <span>📧</span>

                <span>
                  ansarirayan86@gmail.com
                </span>
              </p>

              <p className="flex items-center gap-3">
                <span>📍</span>

                <span>Mumbai, India</span>
              </p>

              <p className="flex items-center gap-3">
                <span>🟢</span>

                <span>
                  Open to Full Stack &
                  Software Development
                  Internships
                </span>
              </p>

              <div className="flex gap-4 pt-4">

                <a
                  href="https://linkedin.com/in/rayan-ahmad786"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-cyan-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/40 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>

                <a
                  href="https://github.com/rayan-786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-whitehover:bg-slate-700 hover:-translate-y-1 hover:shadow-lg hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={20} 
                   className="text-slate-800 dark:text-white"/>
                </a>

                <a
                  href="mailto:ansarirayan86@gmail.com"
                  className="p-3 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-red-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/40 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaEnvelope size={20} />
                </a>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
            onSubmit={handleSubmit}
           className="w-full rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 shadow-xl hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] dark:shadow-2xl transition-all duration-300"
          >

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 text-slate-900 dark:text-white px-4 py-3 outline-none placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-cyan-400 
                focus:ring-2
                transition-colors duration-300"></input>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
               className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 text-slate-900 dark:text-white px-4 py-3 outline-none placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-cyan-400 
               focus:ring-2
focus:ring-cyan-400/20 transition-all duration-300"
              />

              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 text-slate-900 dark:text-white px-4 py-3 resize-none outline-none placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2
focus:ring-cyan-400/20 transition-all duration-300"
              />

              <button
                type="submit"
                className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:from-cyan-400
hover:to-blue-500 hover:scale-105 hover:shadow-cyan-500/50 active:scale-95"
              >
                Send Message
              </button>

              {sent && (
                <p className="text-cyan-600 dark:text-cyan-300">
                  ✅ Thanks for contacting me.
                  I'll get back to you soon.
                </p>
              )}

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default ContactPreview;