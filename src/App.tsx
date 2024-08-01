import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Spinner from "./Components/Common/Spinner/Spinner";
import Nav from "./Components/Common/Nav/Nav";
import ModeToggler from "./Components/Common/ModeToggler/ModeToggler";
import Footer from "./Components/Common/Footer/Footer";

//Page Imports
const HomePage = lazy(() => import("./Components/Pages/HomePage/HomePage"));
const ProjectsPage = lazy(
  () => import("./Components/Pages/ProjectsPage/ProjectsPage")
);
const BlogsPage = lazy(() => import("./Components/Pages/BlogsPage/BlogsPage"));
const ContactPage = lazy(
  () => import("./Components/Pages/ContactPage/ContactPage")
);
const BlogIndivPage = lazy(
  () => import("./Components/Pages/BlogIndivPage/BlogIndivPage")
);

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <div className="bg-gray-900 text-white min-h-screen grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 p-4">
            <Nav />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/blogs/:id" element={<BlogIndivPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <ModeToggler />
            <Footer />
          </div>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
