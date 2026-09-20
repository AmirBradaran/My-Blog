import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Process from "./Components/Process/Process";
import CTA from "./Components/CTA/CTA";
import Contact from "./Components/Contact/Contact";
import { LanguageProvider } from "./Utils/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-shell">
        <div className="app-atmosphere" aria-hidden />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Resume />
          <Projects />
          <Process />
          <CTA />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}
