export const Header = () => {
  return (
    <div className="flex justify-center items-center mt-3 sticky top-0 z-40">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur md:p-3">
        <a href="#home" className="nav-item">
          Home
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#about" className="nav-item">
          About
        </a>
        <a
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </a>
      </nav>
    </div>
  );
};
