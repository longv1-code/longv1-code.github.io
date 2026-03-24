import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home          from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectArchive from "./pages/ProjectArchive";
import Nav           from "./components/Nav";
import Footer        from "./components/Footer";
import SocialBar     from "./components/SocialBar";

const ENABLE_CASE_STUDY = false;

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/archive"       element={<ProjectArchive />} />
        {ENABLE_CASE_STUDY && (
          <Route path="/project/:id"   element={<ProjectDetail />} />
        )}
      </Routes>
      <Footer />
      <SocialBar />
    </>
  );
}
