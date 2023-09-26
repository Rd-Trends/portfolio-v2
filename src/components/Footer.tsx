import Link from "next/link";
import React from "react";
import { RiGithubFill } from "react-icons/ri";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" mb-8 flex flex-col items-center space-y-4">
      <ul className=" flex items-center justify-center space-x-2">
        <li>
          <Link
            target="blank"
            href="https://github.com/Rd-Trends"
            className="text-4xl lg:text-5xl"
            aria-label="View my projects on github">
            <RiGithubFill />
          </Link>
        </li>
        <li>
          <Link
            target="blank"
            href="https://www.linkedin.com/in/ikoyo-daniel-0334981a6"
            className="text-4xl lg:text-5xl"
            aria-label="Follow my updates on LinkedIn">
            <AiOutlineLinkedin />
          </Link>
        </li>
        <li>
          <Link
            target="blank"
            href="https://twitter.com/Rd_Trendz"
            className="text-4xl lg:text-5xl"
            aria-label="Join me on twitter">
            <AiOutlineTwitter />
          </Link>
        </li>
        <li>
          <Link
            target="blank"
            href="https://www.facebook.com/danni.rowland.0419"
            className="text-4xl lg:text-5xl"
            aria-label="Let's have an amazing time on facebook">
            <AiOutlineFacebook />
          </Link>
        </li>
        <li>
          <Link
            target="blank"
            href="https://instagram.com/ikoyo_daniel_omovigho"
            className="text-4xl lg:text-5xl"
            aria-label="Checkout my latest on instagram">
            <AiOutlineInstagram />
          </Link>
        </li>
        <li>
          <Link
            target="blank"
            href="https://wa.me/2348161827754"
            className="text-4xl lg:text-5xl"
            aria-label="I'm just a DM away, let's chat on whatsapp">
            <AiOutlineWhatsApp />
          </Link>
        </li>
      </ul>
      <span className="text-lg font-semibold">
        &copy; Daniel Ikoyo
      </span>
    </footer>
  );
};

export default Footer;
