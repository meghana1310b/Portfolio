import { FaGithub, FaExternalLinkAlt, FaRobot, FaHospital, FaBus, FaGraduationCap } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Voice AI Clinical Appointment Agent",
      desc: "A real-time multilingual voice AI agent designed for healthcare settings. Features advanced automated speech recognition (ASR), real-time AI reasoning, deep contextual memory logs, and sophisticated automated scheduling conflict management.",
      tags: ["Python", "AI/ML", "Speech Recognition", "NLP"],
      github: "https://github.com/meghana1310b/Real-Time-Multilingual-Voice-AI-Agent-Clinical-Appointment-Booking",
      icon: <FaRobot />,
    },
    {
      title: "Hospital Appointment Scheduler",
      desc: "A secure MERN full-stack healthcare application utilizing custom JWT authentication frameworks and robust role-based access controls (RBAC) to allow patients and medical personnel to manage visits seamlessly.",
      tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      github: "https://github.com/meghana1310b/Hospital-Appoinment-Scheduler",
      icon: <FaHospital />,
    },
    {
      title: "Django Bus Booking System",
      desc: "A dynamic web-based reservation application built on Python and Django. Features a comprehensive transit interface mapping out active route lookups, conditional seat selection algorithms, and an intuitive admin panel.",
      tags: ["Python", "Django", "SQL", "Tailwind CSS"],
      github: "https://github.com/meghana1310b/BusBooking",
      icon: <FaBus />,
    },
    {
      title: "Online Learning Platform",
      desc: "A centralized full-stack e-learning repository complete with robust analytical student/instructor dashboards, interactive progress-tracking microservices, and modular RESTful API architectures.",
      tags: ["React.js", "Node.js", "Express", "REST API"],
      github: "https://github.com/meghana1310b/Online-Learning-Platform",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold mb-2 text-center">
          What I've Built
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
           Projects
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full mb-14"></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.title}
              className="flex flex-col justify-between bg-[#111827]/50 border border-[#222e45] p-8 rounded-2xl hover:border-purple-500/50 transition duration-300 group"
            >
              <div>
                {/* Top Row: Icon & Github Link */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-3xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                    {p.icon}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                    title="View Source Code"
                  >
                    <FaGithub />
                  </a>
                </div>

                {/* Project Titles */}
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mt-3 text-sm leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>

              {/* Bottom Row: Badges */}
              <div className="mt-8 pt-4 border-t border-[#1d293d] flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-[#1d293d] text-purple-300 px-3 py-1 rounded-md border border-[#2e3b52]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}