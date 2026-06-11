import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#0b1220] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Contact Me
        </h2>

        <div className="w-16 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-8 max-w-2xl mx-auto text-lg">
          I&apos;m currently open to new opportunities. Whether you have a role in mind, a project to discuss, or just want to connect — my inbox is always open.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {/* Email */}
          <a
            href="mailto:meghanaroyal17@gmail.com"
            className="w-full max-w-xs bg-[#111827] border border-[#334155] rounded-2xl p-8 hover:border-purple-400 transition duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="text-purple-400 text-3xl flex justify-center">
              <FaEnvelope />
            </div>
            <p className="mt-4 text-sm tracking-[0.3em] text-gray-400">EMAIL</p>
            <p className="mt-3 text-lg font-semibold text-white break-words">
              meghanaroyal17@gmail.com
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/meghana-bandi-09345327a"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-[#111827] border border-[#334155] rounded-2xl p-8 hover:border-purple-400 transition duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="text-purple-400 text-3xl flex justify-center">
              <FaLinkedin />
            </div>
            <p className="mt-4 text-sm tracking-[0.3em] text-gray-400">LINKEDIN</p>
            <p className="mt-3 text-lg font-semibold text-white break-words">
              meghana-bandi-09345327a
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/meghana1310b"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs bg-[#111827] border border-[#334155] rounded-2xl p-8 hover:border-purple-400 transition duration-300 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <div className="text-purple-400 text-3xl flex justify-center">
              <FaGithub />
            </div>
            <p className="mt-4 text-sm tracking-[0.3em] text-gray-400">GITHUB</p>
            <p className="mt-3 text-lg font-semibold text-white break-words">
              meghana1310b
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:917013295291"
            className="w-full max-w-xs bg-[#111827] border border-[#334155] rounded-2xl p-8 hover:border-purple-400 transition duration-300 hover:shadow-lg hover:shadow-purple-500/10 lg:col-start-1"
          >
            <div className="text-purple-400 text-3xl flex justify-center">
              <FaPhone />
            </div>
            <p className="mt-4 text-sm tracking-[0.3em] text-gray-400">PHONE</p>
            <p className="mt-3 text-lg font-semibold text-white break-words">
              +91 7013295291
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}