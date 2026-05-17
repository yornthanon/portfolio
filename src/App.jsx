import { useEffect } from "react";
import Navbar from "./Component/Navbar.jsx";
import HomePage from "./Component/HomePage.jsx";
import AboutPage from "./Component/AboutPage.jsx";
import BackgroundPage from "./Component/BackgroundPage.jsx";
import ContactPage from "./Component/ContactPage.jsx";
import Footer from "./Component/Footer.jsx";

const App = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HomePage />
        <AboutPage />
        <BackgroundPage />
        <ContactPage />
      </main>
      <Footer />
    </>
  )
}
export default App