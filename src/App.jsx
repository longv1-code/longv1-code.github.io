import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home          from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
<<<<<<< HEAD
import ProjectArchive from "./pages/ProjectArchive";
=======
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
import Nav           from "./components/Nav";
import Footer        from "./components/Footer";
import SocialBar     from "./components/SocialBar";

<<<<<<< HEAD
const ENABLE_CASE_STUDY = false;

=======
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
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
<<<<<<< HEAD
        <Route path="/archive"       element={<ProjectArchive />} />
        {ENABLE_CASE_STUDY && (
          <Route path="/project/:id"   element={<ProjectDetail />} />
        )}
=======
        <Route path="/project/:id"   element={<ProjectDetail />} />
>>>>>>> 5497c8642e42b4f2d05127ada2002c38b8832d3d
      </Routes>
      <Footer />
      <SocialBar />
    </>
  );
}
