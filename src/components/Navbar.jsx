export default function Navbar() {
  const navItems = ["home", "about", "skills", "experience", "projects", "education", "contact"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0b1220]/70 backdrop-blur-md border-b border-[#222e45]/80">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-8 py-5">
        
        {/* Brand Logo matching your desktop screen header */}
        <h1 className="text-xl font-bold text-white tracking-wider cursor-pointer group">
          Meghana<span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">.dev</span>
        </h1>

        {/* Dynamic Nav Links */}
        <ul className="flex gap-6 text-gray-400 text-xs font-semibold tracking-widest">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-purple-400 transition-colors duration-300 uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}