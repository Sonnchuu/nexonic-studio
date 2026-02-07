import React, { useState } from "react";
import { supabase } from "../services/supabaseClient";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    project_details: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      if (supabase) {
        await supabase.from("project_inquiries").insert([formData]);
      }

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          customer_name: formData.customer_name,
          customer_email: formData.customer_email,
          project_details: formData.project_details,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({
        customer_name: "",
        customer_email: "",
        project_details: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div
      id="contact"
      className="bg-white text-min-black border-b border-min-black"
    >
      {/* Header */}
      <div className="border-b border-min-black px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex justify-between items-end">
        <ScrollReveal>
          <h2 className="font-sans text-4xl sm:text-6xl md:text-8xl font-medium tracking-tighter uppercase">
            Contact
          </h2>
        </ScrollReveal>
        <span className="font-mono text-sm tracking-widest hidden md:block">
          INIT/SEQ
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Info */}
        <div className="lg:border-r border-min-black p-6 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 border-min-black">
          <ScrollReveal>
            <p className="font-sans text-2xl sm:text-3xl font-light mb-8 max-w-md">
              Ready to structure your digital presence? Initiate the sequence.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-mono text-xs uppercase tracking-widest sm:w-20">
                  Email
                </span>
                <a
                  href="mailto:contact@nexonic-studio.com"
                  className="font-sans text-base sm:text-lg underline decoration-1 underline-offset-4 px-2 py-1 hover:bg-[#282828] hover:text-white transition-colors duration-500 break-all sm:break-normal"
                >
                  contact@nexonic-studio.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-mono text-xs uppercase tracking-widest sm:w-20">
                  Loc
                </span>
                <span className="font-sans text-base sm:text-lg">Global / Remote</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Form Grid */}
        <form onSubmit={handleSubmit} className="grid grid-rows-3">
          <ScrollReveal
            delay={0.1}
            className="border-b border-min-black p-0 group focus-within:bg-[#282828] focus-within:text-white transition-colors duration-300"
          >
            <input
              type="text"
              name="customer_name"
              required
              value={formData.customer_name}
              onChange={handleChange}
              placeholder="NAME / ORGANIZATION"
              className="w-full h-full px-8 sm:px-12 bg-transparent text-xl font-sans placeholder-current focus:outline-none uppercase tracking-wide"
            />
          </ScrollReveal>
          <ScrollReveal
            delay={0.2}
            className="border-b border-min-black p-0 group focus-within:bg-[#282828] focus-within:text-white transition-colors duration-300"
          >
            <input
              type="email"
              name="customer_email"
              required
              value={formData.customer_email}
              onChange={handleChange}
              placeholder="EMAIL ADDRESS"
              className="w-full h-full px-8 sm:px-12 bg-transparent text-xl font-sans placeholder-current focus:outline-none uppercase tracking-wide"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="p-0 flex flex-col sm:flex-row border-b border-min-black lg:border-b-0">
            <div className="flex-1 sm:border-r border-min-black group focus-within:bg-[#282828] focus-within:text-white transition-colors duration-300">
              <textarea
                name="project_details"
                required
                rows="1"
                value={formData.project_details}
                onChange={handleChange}
                placeholder="BRIEF"
                className="w-full h-full p-6 sm:px-12 sm:py-8 bg-transparent text-lg sm:text-xl font-sans placeholder-current focus:outline-none uppercase tracking-wide resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-48 h-16 sm:h-auto bg-white text-min-black hover:bg-[#282828] hover:text-white transition-colors duration-500 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-min-black"
            >
              <span className="font-mono text-sm tracking-widest uppercase">
                {status === "loading" ? "WAIT" : "SEND"}
              </span>
            </button>
          </ScrollReveal>
        </form>
      </div>
    </div>
  );
};

export default Contact;
