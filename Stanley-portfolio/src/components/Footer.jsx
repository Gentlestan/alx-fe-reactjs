import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-white via-emerald-50 to-white text-gray-800 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <h2 className="text-xl font-extrabold text-emerald-600 tracking-wide">
          Sales Skills-Hub
        </h2>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            <FaGithub />
          </a>
          <a
            href="https://youtube.com/your-youtube-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-md"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center md:text-right">
          © {new Date().getFullYear()} StarnDev. Made with ❤️ for learners.
        </p>
      </div>

      {/* Divider line */}
      <div className="border-t border-gray-200 mt-6"></div>
    </footer>
  );
};

export default Footer;
