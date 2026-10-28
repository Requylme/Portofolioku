import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Certifikat from "./component/Certifikat";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800
      transition-colors duration-300 dark:bg-slate-950
      dark:text-slate-200">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Certifikat />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}