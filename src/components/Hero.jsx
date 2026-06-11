import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
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

  // Smooth mobile scroll fallbacks
  const handleMobileScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="w-full bg-[#0b1220] text-white pt-24 pb-16 md:pt-32 px-4 sm:px-6 overflow-x-hidden content-start">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* UPPER CONTENT: TEXT AND IMAGE SPLIT */}
        <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
          
          {/* LEFT TEXT CONTENT */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left balance-text">
            
            <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] md:tracking-[0.25em] text-emerald-400 font-bold mb-3 md:mb-4">
              Available for opportunities
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Bandi Sai <span className="text-purple-400">Meghana</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl text-purple-300 mt-2 md:mt-3 font-light tracking-wide h-8">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "MERN Stack Developer",
                    "React Developer",
                    "Frontend Engineer"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </div>

            <p className="text-gray-400 mt-4 md:mt-5 leading-relaxed text-xs sm:text-sm md:text-base font-light max-w-md sm:max-w-lg md:max-w-xl">
              Passionate Software Engineer specialized in crafting scalable full-stack web architectures, 
              responsive front-end interfaces, and complex interactive systems.
            </p>

            {/* ACTION BUTTONS - Optimized with Touch Event Handlers */}
            <div className="flex flex-row gap-3 sm:gap-4 mt-6 md:mt-8 w-full justify-center md:justify-start">
              <a
                href="#contact"
                onClick={(e) => handleMobileScroll(e, "contact")}
                className="flex-1 sm:flex-initial text-center bg-purple-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-purple-700 active:bg-purple-800 transition duration-300 text-xs sm:text-sm font-medium tracking-wide shadow-lg min-h-[44px] flex items-center justify-center"
              >
                Get In Touch
              </a>

              <a
                href="#projects"
                onClick={(e) => handleMobileScroll(e, "projects")}
                className="flex-1 sm:flex-initial text-center border border-[#334155] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-purple-500 hover:border-purple-600 active:bg-purple-600 transition duration-300 text-xs sm:text-sm font-medium tracking-wide min-h-[44px] flex items-center justify-center"
              >
                View Work
              </a>
            </div>

            {/* SOCIAL LINKS ROW */}
            <div className="flex gap-4 mt-8 md:mt-10 pt-5 border-t border-[#1d293d] w-full justify-center md:justify-start">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-[#111827]/50 border border-[#222e45] text-gray-400 hover:text-purple-400 hover:border-purple-500/40 active:text-purple-400 text-base sm:text-lg rounded-xl transition duration-300 shadow-xl min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT PROFILE IMAGE - Scaled for smaller mobile screens */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
            <div className="relative p-1 bg-[#111827] border border-[#222e45] rounded-2xl shadow-2xl transition duration-300 max-w-[240px] sm:max-w-none">
              <img
                src="/1696932575680.jpg" 
                alt="Meghana Bandi Sai"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-xl"
              />
              <div className="absolute -inset-0.5 bg-purple-500 rounded-2xl opacity-5 blur-xl pointer-events-none"></div>
            </div>
          </div>

          {/* LOWER CONTENT: METRICS PANEL */}
          <div className="w-full pt-6 md:pt-8 border-t border-[#1d293d]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:text-left">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-[#111827]/30 border border-[#222e45]/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
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
      </div>
    </section>
  );
}