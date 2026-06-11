import { FaLaptopCode, FaServer, FaCloud, FaTools, FaBrain } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaLaptopCode />,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3", "Material UI"],
    },
    {
      title: "Backend",
      icon: <FaServer />,
      skills: ["Node.js", "Express.js", "Python", "Django", "REST API", "MongoDB", "SQL", "Database Integration"],
    },
    {
      title: "Cloud & Storage",
      icon: <FaCloud />,
      skills: ["Azure Static Web Apps", "AWS", "Amazon S3", "Amazon EC2"],
    },
    {
      title: "Tools & Workflow",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Agile/Scrum", "JWT Auth", "CI/CD"],
    },
    {
      title: "AI Tools",
      icon: <FaBrain />,
      skills: ["Claude AI", "Cursor AI", "VAPI", "LLM Integration", "Speech Recognition"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold mb-2 text-center">
          ABILITIES
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Technical Skills
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full mb-16"></div>

        {/* Dynamic Skills Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#111827]/50 border border-[#222e45] rounded-2xl p-6 hover:border-purple-500/30 transition duration-300"
            >
              {/* Category Icon & Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="text-xl text-purple-400 bg-[#1d293d] p-2.5 rounded-xl border border-[#2e3b52]">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Tag/Pill Badges Wrapper */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-purple-950/30 text-purple-300 border border-purple-500/20 px-3 py-1.5 rounded-xl tracking-wide hover:bg-purple-900/40 hover:border-purple-400/40 transition duration-200 cursor-default"
                  >
                    {skill}
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