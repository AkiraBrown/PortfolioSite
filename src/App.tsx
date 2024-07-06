import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Spinner from "./Components/Common/Spinner/Spinner";
import Nav from "./Components/Common/Nav/Nav";
import ModeToggler from "./Components/Common/ModeToggler/ModeToggler";
const HomePage = lazy(() => import("./Components/Pages/HomePage/HomePage"));

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <main className="cover-container d-flex h-100 text-center text-bg-dark">
            <div className="d-flex w-100 h-100 p-3 mx-auto flex-column">
              <Nav />
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
              <ModeToggler />
            </div>
          </main>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
