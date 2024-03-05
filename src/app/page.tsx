"use client";
import Image from "next/image";
import { useState } from "react";
import "./styles.css";
import MyForm from "./components/MyForm";
import ProjectSession from "./components/ProjectSession";
import SocialMediaIcons from "./components/SocialMediaIcons";
import Footer from "./components/Footer";
import { READY_TO_CONNECT_MESSAGE, WELCOME_TO_CONNECT_MESSAGE } from './constants'
import Skills from "./components/Skills";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white text-sm font-quicksand dark:bg-gray-900 dark:text-white ">
        <Navbar darkModeOn={darkMode} setDarkMode={setDarkMode} />
        <AboutMe darkModeOn={darkMode} />
        <Services />
        <section className="px-10 lg:px-32">
          <div>
            <h3 className="div-h1">ABOUT ME</h3>
            <p className="text-center text-md text-gray-500 max-w-5xl lg:max-w-2xl mx-auto lg:text-center">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="text-xl text-gray-500 font-bold">
                  Get to know me!
                </h3>
                <p className="text-gray-600 mt-5 lg:text-lg">
                  I am a self thought MERN Full Stack Developer with strong foundation in MERN. Check out some of my work in the Projects section.
                </p>
                <p className="text-gray-600 mt-5 lg:text-lg">
                  { READY_TO_CONNECT_MESSAGE }
                </p>
                <a href="#contact">
                  <div className="flex items-center button-style my-6 w-fit">
                    <p>Contact Me</p>
                  </div>
                </a>
              </div>
              <Skills />
            </div>
          </div>
        </section>

        <section className="px-10 lg:px-32">
          <ProjectSession />
        </section>

        <section id="contact">
          <div className="bg-slate-800 px-10 mt-10 min-h-screen py-10">
            <h3 className="div-h1">CONTACT</h3>
            <p className="text-center text-gray-500">
              { WELCOME_TO_CONNECT_MESSAGE }
            </p>
            <MyForm />
          </div>
        </section>
        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}