import Link from "next/link";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface socialProps  {
    containerStyles : string ;
    iconStyles : string ;
}

const Socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaInstagram />, path: "" },
];

const Social : React.FC<socialProps> = ({ containerStyles , iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
