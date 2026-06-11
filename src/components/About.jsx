import { FaCode, FaReact, FaRocket, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaReact className="text-purple-400" />,
      title: "Frontend & MERN Stack",
      desc: "Deeply passionate about modern web engineering, specializing in building interactive interfaces with React.js and creating full-stack web architectures.",
    },
    {
      icon: <FaCode className="text-cyan-400" />,
      title: "Cross-Tech Collaboration",
      desc: "Experienced in frontend development and collaborating efficiently with cross-functional engineering teams utilizing enterprise .NET backend systems.",
    },
    {
      icon: <FaRocket className="text-emerald-400" />,
      title: "Modern Web Workflow",
      desc: "Skilled in drafting clean code structures, leveraging Agile environments, implementing JWT authentication, and managing cloud portal deployments.",
    },
  ];

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

  return (
    <section id="about" className="py-24 px-6 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold mb-2">
          INTRODUCTION
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          About Me
        </h2>
        <div className="w-16 h-1 bg-purple-500 mt-4 rounded-full mb-14"></div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Bio Paragraph */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="text-gray-400 space-y-6 text-lg leading-relaxed font-light">
              <p>
                I am a dedicated web engineer with a strong focus on crafting responsive, 
                highly interactive user interfaces and performance-driven web applications. 
                With a primary passion for frontend engineering and the MERN stack ecosystem, 
                I love turning visual layouts into robust production-ready code.
              </p>
              <p>
                Through hands-on internship environments, I have specialized in taking full 
                ownership of frontend systems. This includes translating institutional requirements 
                into pixel-perfect layouts and ensuring smooth client-side integration alongside 
                disparate server architectures, such as .NET teams. 
              </p>
            </div>

            {/* Social Links Row */}
            <div className="flex gap-4 mt-8">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target={social.url.startsWith("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-[#111827]/50 border border-[#222e45] text-gray-400 hover:text-purple-400 hover:border-purple-500/40 text-xl rounded-xl transition duration-300 shadow-md"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Feature Highlight Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                className="flex gap-5 bg-[#111827]/50 border border-[#222e45] rounded-2xl p-6 hover:border-purple-500/30 transition duration-300"
              >
                <div className="p-3 bg-[#1d293d] rounded-xl text-xl shrink-0 h-fit border border-[#2e3b52]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}