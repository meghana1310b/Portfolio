import { FaGraduationCap, FaReact, FaPython, FaCertificate } from "react-icons/fa"; 

export default function EducationAndCertifications() {
  return (
    <section id="education" className="py-24 px-6 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <p className="text-xs uppercase tracking-[0.3em] text-purple-400 font-semibold mb-2">
          BACKGROUND
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Education & Certifications
        </h2>
        <div className="w-16 h-1 bg-purple-500 mt-4 rounded-full mb-14"></div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Education */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">
              EDUCATION
            </h3>
            
            <div className="flex flex-col gap-6">
              {/* College Degree */}
              <div className="bg-[#111827]/50 border border-[#222e45] rounded-2xl p-8 hover:border-purple-500/50 transition duration-300 flex gap-5 items-start">
                <div className="p-4 bg-[#1d293d] text-purple-400 rounded-xl text-2xl shrink-0 mt-1">
                  <FaGraduationCap />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Bachelor of Engineering — Computer Science
                  </h4>
                  <p className="text-purple-400 mt-2 font-medium">
                    Kuppam Engineering College
                  </p>
                  <p className="text-gray-400 mt-4 text-sm font-light">
                    2020 – 2024
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-6">
              PROFESSIONAL CERTIFICATIONS
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Certification 1: Jamia Institute Website */}
              <div className="flex items-center gap-5 bg-[#111827]/50 border border-[#222e45] rounded-2xl p-5 hover:border-purple-500/50 transition duration-300">
                <div className="p-3 bg-[#1d293d] text-cyan-400 rounded-xl text-xl shrink-0">
                  <FaReact />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    React Developer (Institutional Portal Project)
                  </h4>
                  <p className="text-cyan-400 text-xs mt-0.5 font-medium">Jamia Institute</p>
                  <p className="text-gray-400 text-xs mt-1">Certified Project Implementation</p>
                </div>
              </div>

              {/* Certification 2: MERN Stack */}
              <div className="flex items-center gap-5 bg-[#111827]/50 border border-[#222e45] rounded-2xl p-5 hover:border-purple-500/50 transition duration-300">
                <div className="p-3 bg-[#1d293d] text-purple-400 rounded-xl text-xl shrink-0">
                  <FaCertificate />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    MERN Full-Stack Developer
                  </h4>
                  <p className="text-purple-400 text-xs mt-0.5 font-medium">Vector Institute, Hyderabad</p>
                  <p className="text-gray-400 text-xs mt-1">Jul 2024 – Feb 2025</p>
                </div>
              </div>

              {/* Certification 3: Python */}
              <div className="flex items-center gap-5 bg-[#111827]/50 border border-[#222e45] rounded-2xl p-5 hover:border-purple-500/50 transition duration-300">
                <div className="p-3 bg-[#1d293d] text-yellow-500 rounded-xl text-xl shrink-0">
                  <FaPython />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Python Developer Certification
                  </h4>
                  <p className="text-yellow-500 text-xs mt-0.5 font-medium">Vector Institute, Hyderabad</p>
                  <p className="text-gray-400 text-xs mt-1">Jul 2024 – Feb 2025</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}