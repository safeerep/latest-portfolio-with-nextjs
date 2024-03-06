import React from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { NAME } from '../constants';

const Navbar: React.FC<any> = ({ darkModeOn, setDarkMode }: { darkModeOn: boolean, setDarkMode: any }) => {
    const handleDownload = () => {
        const resumeUrl = "/MERN _STACK_DEVELOPER_SAFEER_MON_EP.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "MERN _STACK_DEVELOPER_SAFEER_MON_EP.pdf";
        link.click();
    };

    return (
        <nav className="px-10 lg:px-32 py-5 mb-5 flex justify-between fixed bg-slate-800 w-full backdrop-filter backdrop-blur-lg bg-opacity-30 z-10">
            <h1 className="">{NAME}</h1>
            <ul className="flex items-center">
                <li className="cursor-pointer">
                    {!darkModeOn ? (
                        <BsFillMoonStarsFill
                            onClick={() => setDarkMode(!darkModeOn)}
                            className="icon-style"
                        />
                    ) : (
                        <BsFillSunFill
                            onClick={() => setDarkMode(!darkModeOn)}
                            className="icon-style"
                        />
                    )}
                </li>
                <li>
                    <a className="button-style ml-4 my-0 cursor-pointer" onClick={handleDownload} >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar