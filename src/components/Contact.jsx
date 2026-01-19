import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_60188xf",
        "template_fkmd21e",
        form.current,
        "p7bPzEwuWvI64lSFF"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        () => {
          setSent(false);
        }
      );
  };

  return (
    <section id="contact" className="px-10 py-20 bg-[#0b0f19]">
      <h2 className="text-4xl font-bold mb-6">Let’s Work Together</h2>

      <p className="text-gray-400 mb-8 max-w-xl">
        I’m open to internships and entry-level roles.  
        Feel free to reach out via email.
      </p>

      <p className="text-gray-300 mb-8">
        📧 <a
          href="mailto:pendyalakavya09@gmail.com"
          className="hover:text-blue-400 transition"
        >
          pendyalakavya09@gmail.com
        </a>
      </p>

      {/* ✅ Custom Success Message */}
      {sent && (
        <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400">
          ✅ Thank you! Your message has been sent successfully.  
          I’ll get back to you soon.
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl space-y-4"
      >
        <input
          type="text"
          name="from_name"
          required
          className="w-full p-3 bg-[#121826] rounded outline-none"
          placeholder="Your Name"
        />

        <input
          type="email"
          name="email"
          required
          className="w-full p-3 bg-[#121826] rounded outline-none"
          placeholder="Your Email"
        />

        <input
          type="hidden"
          name="subject"
          value="New Portfolio Contact"
        />

        <textarea
          name="message"
          rows="4"
          required
          className="w-full p-3 bg-[#121826] rounded outline-none"
          placeholder="Tell me about your project..."
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
