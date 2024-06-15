"use client";
import { useState } from "react";
import "./styles.css";
import {
  AboutMe,
  Banner,
  Contact,
  Footer,
  Navbar,
  OngoingProject,
  ProjectSession,
  Services,
} from "./components"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white text-sm font-quicksand dark:bg-gray-900 dark:text-white ">
        <Navbar darkModeOn={darkMode} setDarkMode={setDarkMode} />
        <Banner darkModeOn={darkMode} />
        <Services />
        <AboutMe />
        <ProjectSession />
        {/* <OngoingProject /> */}
        <Contact />
        <Footer />
      </main>
    </div>
  );
}