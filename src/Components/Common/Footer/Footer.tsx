import { NavLink } from "react-router-dom";
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
      </div>
    </footer>
  );
}

export default Footer;
