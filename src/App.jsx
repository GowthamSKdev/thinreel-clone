import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";
import NotFountPage from "./components/NotFoundPage";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";




function App() {

  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      smooth: 2,
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: true
    });
  }, [])



  const RootLayout = () => {
    return (
      <>
        {/* <Navbar /> */}
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <>
      <IntroScreen />
      <main id="smooth-wrapper" >
        <div id="smooth-content">
          {/* <ReactLenis root /> */}
          <Router>
            <Routes>
              <Route path="/" element={<RootLayout />}>
                <Route index={true} element={<Home />} />
                <Route path="home" element={<Home />} />
              </Route>
              <Route path="/*" element={<NotFountPage />} />
            </Routes>
          </Router>
        </div>
      </main>
    </>
  );
}

export default App;