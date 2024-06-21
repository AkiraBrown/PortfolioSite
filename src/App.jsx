import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Spinner from "./Component/common/Spinner/Spinner";
import ModeToggler from "./Component/common/ModeToggle/ModeToggler";
import Nav from "./Component/common/Nav/Nav";
function App() {
  const HomePage = lazy(() => import("./Component/Pages/HomePage/HomePage"));

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
