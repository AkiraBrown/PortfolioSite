import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6 col-span-1 md:col-span-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2024 Akira Brown. All Rights Reserved.</p>
        <p className="text-teal-400 hover:text-teal-600">
          <NavLink
            target="_blank"
            to={"https://www.linkedin.com/in/akira-watson-brown/"}
            rel="noopener noreferrer"
          >
            Follow Me on LinkedIn
          </NavLink>
        </p>
        <div className="max-w-7xl text-center flex gap-2 mx-auto px-4">
          <a
            href="https://github.com/AkiraBrown"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="size-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/akira-watson-brown/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
