import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { NAME, SHORT_DESCRIPTION } from '../constants'

const Footer: React.FC = () => {
  return (
    <footer className="px-10 lg:px-40 pt-20 lg:py-16">
      <div className="lg:flex lg:justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-wide">{NAME}</h3>
          <p className="py-6 leading-6 text-gray-600 max-w-lg">
            {SHORT_DESCRIPTION}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-5 tracking-wide pe-8">SOCIAL MEDIA LINKS</h3>
          <div className="text-2xl flex gap-5">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
      <div className="flex justify-end px-4">
        All rights reserved © 2024 SAFEER MON EP
      </div>
      <div className="w-full border-b border-cyan-400 my-2"></div>
    </footer>
  );
};

export default Footer;