import { FaCode, FaLaptopHouse, FaServer } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "React Developer Intern",
      company: "Jamia Institute",
      type: "Hybrid",
      duration: "Apr 2025 – Aug 2025",
      desc: "Spearheaded the front-end architecture and implementation of a comprehensive, production-grade institutional web portal. Designed to modernize the institute's digital presence, this application required close synchronization with an enterprise-level .NET backend infrastructure to deliver zero-lag data updates and seamless user workflows.",
      bullets: [
        "Crafted a custom UI system utilizing React component hierarchies, writing highly organized, semantic, and reusable code with advanced Tailwind utility layers.",
        "Engineered pixel-perfect layouts optimizing rendering performance across modern mobile, tablet, and ultra-wide desktop displays.",
        "Collaborated natively with a backend engineering team to bridge complex .NET Web API data objects into client-side state models, handling asynchronous responses safely.",
        "Implemented rigorous client-side input validation workflows and responsive modal trees to clean up user booking actions.",
        "Managed deployment routines over Azure Static Web Apps, configuring client-side routing structures to avoid standard sub-directory reload issues.",
        "Participated actively in dynamic Agile sprint structures, logging engineering updates inside team code reviews and scrum standups."
      ],
      icon: <FaLaptopHouse />,
      tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
    {
      role: "MERN Full-Stack Developer Intern",
      company: "Vector India Institute",
      type: "On-site",
      duration: "Jul 2024 – Feb 2025",
      desc: "Immersed in deep practical development cycles focused on scaling server-side business logic and engineering responsive web solutions. Gained comprehensive exposure managing relational application flows, database scaling, and authentication frameworks.",
      bullets: [
        "Designed and implemented production-ready RESTful APIs using Express.js and Node.js environments to handle multi-tier data requests.",
        "Built and maintained complex MongoDB data structures, utilizing indexing strategies and schema aggregations to support rapid search operations.",
        "Integrated robust authorization controls by building custom JSON Web Token (JWT) validation middlewares to block malicious endpoint access.",
        "Connected state-driven React interfaces with underlying backend structures, eliminating redundant client-side re-renders.",
        "Tested api routing logic across rigorous Postman profiling environments to isolate backend bottleneck processes before code generation."
      ],
      icon: <FaServer />,
      tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      role: "Web Developer Intern",
      company: "APLMS Portal",
      type: "On-site",
      duration: "Feb 2025 – Apr 2025",
      desc: "Contributed to frontend development efforts and code optimization routines for a public service web layout platform.",
      bullets: [
        "Transformed functional layout blueprints into structured, interactive web pages using performant modern styling rules.",
        "Identified cross-browser layout inconsistencies and refactored critical interface segments to match web accessibility guidelines.",
        "Cleaned old style classes to support smooth rendering timelines across low-end mobile devices."
      ],
      icon: <FaCode />,
      tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-[#0b1220] text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold mb-2 text-center">
          CAREER PATH
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
          Work Experience
        </h2>
        <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full mb-16"></div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-[#1d293d] ml-4 md:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[21px] top-1 bg-[#111827] border-2 border-[#222e45] group-hover:border-purple-500 p-2 text-gray-400 group-hover:text-purple-400 rounded-xl text-lg transition duration-300 shadow-md">
                {exp.icon}
              </div>

              {/* Card Container */}
              <div className="bg-[#111827]/50 border border-[#222e45] rounded-2xl p-8 hover:border-purple-500/40 transition duration-300">
                
                {/* Header Metadata */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* Badges */}
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium border ${exp.tagColor}`}>
                      {exp.type}
                    </span>
                    <span className="text-sm text-gray-400 font-light bg-[#1d293d] px-3 py-1 rounded-md border border-[#2e3b52]">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Main Short Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                  {exp.desc}
                </p>

                {/* Technical Bullet Points */}
                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-gray-300 flex items-start gap-3">
                      <span className="text-purple-500 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full"></span>
                      <span className="leading-relaxed font-light">{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}