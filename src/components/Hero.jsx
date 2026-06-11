import { useState } from "react";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const socials = [
    {
      icon: <FaEnvelope />,
      url: "mailto:meghanaroyal17@gmail.com",
      label: "Email",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/meghana-bandi-09345327a",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/meghana1310b",
      label: "GitHub",
    },
  ];

  const metrics = [
    { value: "2+", label: "Roles & Internships" },
    { value: "30%", label: "UI Performance Gain" },
    { value: "3", label: "Live Platforms" },
    { value: "4+", label: "Core Technologies" },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section
      id="home"
      className="w-full bg-[#0b1220] text-white pt-24 sm:pt-28 md:pt-32 pb-16 px-4 sm:px-6 overflow-hidden relative"
    >
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden fixed top-4 right-4 z-[200] w-11 h-11 rounded-xl bg-[#111827] border border-[#222e45] text-white flex items-center justify-center shadow-lg"
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {menuOpen && (
        <div className="md:hidden fixed top-16 right-4 z-[200] w-56 bg-[#111827] border border-[#222e45] rounded-2xl shadow-2xl p-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm text-gray-300 hover:bg-[#1d293d] hover:text-purple-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-6xl w-full mx-auto flex flex-col gap-12 md:gap-16">
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-emerald-400 font-bold mb-4">
              Available for opportunities
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight tracking-tight">
              Bandi Sai <span className="text-purple-400">Meghana</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl text-purple-300 mt-3 font-light tracking-wide h-8 w-full">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "React Developer",
                    "Frontend Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </div>

            <p className="text-gray-400 mt-5 leading-relaxed text-xs sm:text-sm md:text-base font-light max-w-md sm:max-w-lg md:max-w-xl">
              Passionate Software Engineer specialized in crafting scalable full-stack web architectures,
              responsive front-end interfaces, and complex interactive systems.
            </p>

            <div className="flex gap-3 sm:gap-4 mt-8 w-full justify-center md:justify-start flex-wrap">
              <a
                href="#contact"
                className="flex-1 sm:flex-initial text-center bg-purple-600 px-5 sm:px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 text-xs sm:text-sm font-medium tracking-wide shadow-lg min-h-[44px] flex items-center justify-center"
              >
                Get In Touch
              </a>

              <a
                href="#experience"
                className="flex-1 sm:flex-initial text-center border border-[#334155] px-5 sm:px-6 py-3 rounded-lg hover:bg-purple-500 hover:border-purple-600 transition duration-300 text-xs sm:text-sm font-medium tracking-wide min-h-[44px] flex items-center justify-center"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-4 mt-10 pt-5 border-t border-[#1d293d] w-full justify-center md:justify-start">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-[#111827]/50 border border-[#222e45] text-gray-400 hover:text-purple-400 hover:border-purple-500/40 text-base sm:text-lg rounded-xl transition duration-300 shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative p-1 bg-[#111827] border border-[#222e45] rounded-2xl shadow-2xl hover:border-purple-500/50 transition duration-300 max-w-[260px] sm:max-w-sm md:max-w-none">
              <img
                src="/1696932575680.jpg"
                alt="Meghana Bandi Sai"
                className="w-full h-auto aspect-square object-cover rounded-xl"
              />
              <div className="absolute -inset-0.5 bg-purple-500 rounded-2xl opacity-5 blur-xl pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="w-full pt-8 border-t border-[#1d293d]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:text-left">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#111827]/30 border border-[#222e45]/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-400 tracking-tight">
                  {metric.value}
                </p>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 font-medium mt-1 uppercase tracking-wider">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}