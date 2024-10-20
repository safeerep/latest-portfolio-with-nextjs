import React from 'react'
import Image from 'next/image'
import SocialMediaIcons from './SocialMediaIcons'
import profilePhoto from "../img/profile.jpg";
import { EMAIL, NAME, ROLE, SHORT_DESCRIPTION } from '../constants';

const Banner: React.FC<any> = ({ darkModeOn}: { darkModeOn: boolean}) => {
  return (
    <section className="px-10 pb-10 lg:pb-20 lg:px-32 pt-20">
            <div className="lg:grid lg:grid-cols-3">
                <div className="lg:col-span-2 lg:mt-20">
                    <h3 className="tracking-wider text-teal-600">Hello!</h3>
                    <h2 className="text-xl py-3 font-bold tracking-widest">
                        I&apos;m {NAME}
                    </h2>
                    <h3 className="text-teal-600">
                        { ROLE }
                    </h3>
                    <p className="py-2 leading-6 text-gray-600 max-w-lg ">
                        { SHORT_DESCRIPTION }
                    </p>
                    <p className="text-xs lg:text-sm inline-flex my-6 tracking-wide">
                        Get in touch 👉
                        <a href='mailto:safeerep77@gmail.com' className="border-b-2 border-teal-600">
                            { EMAIL }
                        </a>
                    </p>
                    <div className="flex text-2xl justify-between lg:justify-normal lg:gap-16 text-gray-600 lg:mb-10">
                        <SocialMediaIcons />
                    </div>
                </div>
                <div className="flex justify-center mt-5 lg:mt-20">
                    <Image
                        src={profilePhoto}
                        alt="profilephoto"
                        className="rounded-full w-60 h-60 lg:w-96 lg:h-96 object-cover"
                    />
                </div>
            </div>
            <div className="my-5 text-center hidden lg:block">
                {darkModeOn ? (
                    <a href="#services">
                    <div className="scroll-downs">
                        <div className="mousey">
                            <div className="scroller"></div>
                        </div>
                    </div>
                    </a>
                ) : (
                    <a href="#services">
                    <div className="scroll-downs">
                        <div className="mousey-dark">
                            <div className="scroller-dark"></div>
                        </div>
                    </div>
                    </a>
                )}
                <p className="mt-5 text-gray-700">Scroll Down</p>
            </div>
        </section>
  )
}

export default Banner