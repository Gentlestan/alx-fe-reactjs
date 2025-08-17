import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 mt-12 md:shadow">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand / Name */}
        <h2 className="text-lg font-bold text-emerald-500 tracking-wide">
          Sales Skills-Hub
        </h2>

        {/* Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://youtube.com/your-youtube-channel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors duration-300"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-800 text-center md:text-right">
          © {new Date().getFullYear()} Sales Skills-Hub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
