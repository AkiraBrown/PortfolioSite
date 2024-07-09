import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Spinner from "./Components/Common/Spinner/Spinner";
import Nav from "./Components/Common/Nav/Nav";
import ModeToggler from "./Components/Common/ModeToggler/ModeToggler";

//Page Imports
const HomePage = lazy(() => import("./Components/Pages/HomePage/HomePage"));
const ProjectsPage = lazy(
  () => import("./Components/Pages/ProjectsPage/ProjectsPage")
);
const BlogsPage = lazy(() => import("./Components/Pages/BlogsPage/BlogsPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <div className="d-flex h-100 text-center text-bg-dark">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
              <Nav />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
              </Routes>
              <ModeToggler />
            </div>
          </div>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
