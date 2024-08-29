import Link from "next/link";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

const socials = [
  { icon: <SiGithub />, path: "https://github.com/Nouvaldi" },
  { icon: <SiLinkedin />, path: "https://www.linkedin.com/in/nouvaldiar00/" },
  //   { icon: <SiWhatsapp />, path: "" },
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
