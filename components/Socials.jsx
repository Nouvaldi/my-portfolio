import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Nouvaldi" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/adjinouvaldiramadhan00/" },
  //   { icon: <FaWhatsapp />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.path}
            className={iconStyles}
            passHref
            legacyBehavior
          >
            <a target="_blank" className={iconStyles}>{social.icon}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
