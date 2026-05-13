import { useState } from "react";
import axios from "axios";

function ContactPreview() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // HANDLE SUBMIT

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
      className="border-t border-white/10 bg-slate-900/40"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">

        {/* LEFT SIDE */}

        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Contact Me
          </h2>

          <p className="mt-4 max-w-xl text-slate-300 leading-7">
            Use this form to send me a message. You can connect
            with me for freelance work, internships,
            collaborations, or project feedback.
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <p>
              <span className="font-semibold text-white">
                📧
              </span>{" "}
              ansarirayan86@gmail.com
            </p>

            <p>
              <span className="font-semibold text-white">
                📍
              </span>
              Sion, Mumbai(Maharashtra)-400017
            </p>

            <p>
              <span className="font-semibold text-white">
                🟢
              </span>{" "}
              Looking for Internships and Opportunities in
              Web Development
            </p>
          </div>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl sm:p-8"
        >
          <div className="grid gap-5">

            {/* NAME */}

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              required
            />

            {/* EMAIL */}

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              required
            />

            {/* MESSAGE */}

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
              required
            />

            {/* BUTTON */}

            <button
              type="submit"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Send Message
            </button>

            {/* SUCCESS MESSAGE */}

            {sent && (
              <p className="text-sm text-cyan-300">
                Thanks for contacting us 
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactPreview;