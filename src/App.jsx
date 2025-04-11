import { useState } from "react";
import {
  Hero,
  About,
  Experience,
  Footer,
  Header,
  Projects,
  Contact,
  Skills,
} from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
