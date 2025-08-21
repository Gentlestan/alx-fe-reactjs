import React from "react";
import { MessageCircle } from "lucide-react"; // WhatsApp-like icon

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-1 sm:px-2 py-10 w-full text-gray-50"
    >
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start shadow-lg px-6 py-8 rounded-2xl bg-slate-800">
        {/* Contact Text / Info */}
        <div className="w-full md:w-2/5">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
            Let’s Connect
          </h2>
          <p className="text-slate-400 mb-6">
            Got a project idea or just want to say hi? Feel free to reach out
            through this form or via my contact details below.
          </p>

          <div className="space-y-4 text-slate-300">
            <p>
              📧 <span className="text-slate-100">yourmail@example.com</span>
            </p>
            <p>
              📱 <span className="text-slate-100">+234 800 000 0000</span>
            </p>
            <p>
              🌐{" "}
              <a
                href="https://github.com/Gentlestan"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>{" "}
              |{" "}
              <a
                href="https://www.linkedin.com/in/ohazulike-stanley/"
                className="text-cyan-400 hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="w-full md:w-3/5 space-y-4"
        >
          {/* Required hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />

          <div>
            <label className="block mb-1 text-slate-300">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-300">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-md bg-slate-700 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 transition px-6 py-2 rounded-md text-white font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2348062991395"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
};

export default Contact;
