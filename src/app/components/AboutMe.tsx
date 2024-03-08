import React from 'react'
import { READY_TO_CONNECT_MESSAGE } from '../constants';
import Skills from './Skills';

const AboutMe: React.FC = () => {
    return (
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
                  I am a self taught MERN Full Stack Developer with strong foundation in MERN. Check out some of my work in the Projects section.
                </p>
                <p className="text-gray-600 mt-5 lg:text-lg">
                  {READY_TO_CONNECT_MESSAGE}
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
    )
}

export default AboutMe