import React from "react";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <div className=" space-y-4 mb-12 md:mb-24 mt:8rem">
      <SectionTitle text="About" emphasis="Me" />
      <p>
        As a full-stack developer, I have experience in developing and
        maintaining web applications using a range of technologies including
        ReactJS, NextJS, TypeScript, NodeJS, ExpressJS, TailwindCSS,
        Styled-Components, MongoDB, and Storybook. My expertise in these
        technologies allows me to deliver high-quality and scalable solutions
        that meet the needs of my clients. I am always eager to learn and stay
        up-to-date with the latest industry trends and best practices to ensure
        that my skills remain relevant and valuable
      </p>
    </div>
  );
};

export default About;
