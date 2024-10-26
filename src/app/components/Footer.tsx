import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import { NAME, SHORT_DESCRIPTION } from '../constants'

const Footer: React.FC = () => {
  return (
    <footer className="px-10 lg:px-40 pt-20 lg:py-16">
      <div className="w-full border-b border-cyan-400 my-2"></div>
      <div className="flex text-xs justify-center">
        All rights reserved © 2024 SAFEER MON EP
      </div>
    </footer>
  );
};

export default Footer;