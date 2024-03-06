import React from 'react'
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { ONGOING_PROJECT } from '../constants';

const OngoingProject: React.FC = () => {
    return (
        <section className="px-10 lg:px-32">
            <h3 className="div-h1">ONGOING - PROJECT</h3>
            <div className="project-div">
                <div>
                    <h2 className="project-h2">
                        #1 : {ONGOING_PROJECT.title}
                    </h2>
                    <p className="project-p">{ONGOING_PROJECT.description}</p>
                    <div className="flex gap-2">
                        <a
                            className="mb-5 flex w-fit button-style"
                            href={ONGOING_PROJECT.liveLink}
                            target="_blank"
                        >
                            view live
                            <FiArrowUpRight className="ml-1" />
                        </a>
                        <a
                            href={ONGOING_PROJECT.gitLink}
                            target="_blank"
                            className="project-button-no-bg"
                        >
                            Github
                            <AiFillGithub className="text-lg ml-1" />
                        </a>
                    </div>
                </div>
                <div className="relative group">
                    <Image
                        src={ONGOING_PROJECT.img}
                        alt="ecampus project"
                        className="project-img"
                    />
                    <a
                        href={ONGOING_PROJECT.liveLink}
                        target="_blank"
                        className="hidden absolute top-0 group-hover:flex  items-center justify-center w-full h-full bg-gray-500 rounded-md bg-opacity-25"
                    >
                        <div className="button-style flex">
                            View Live
                            <FiArrowUpRight className="ml-1" />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default OngoingProject