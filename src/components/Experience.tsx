import React from "react";
import SectionTitle from "./SectionTitle";
import { workExperience } from "@/constant/work-experience";
import { FaBriefcase } from "react-icons/fa";
import Link from "next/link";

const WorkExperience = () => {
  return (
    <div className="space-y-8 mb-24 md:mb-[8rem]">
      <SectionTitle text="Work" emphasis="Experience" />
      <div>
        {workExperience.map((experience) => (
          <div
            key={experience.title}
            className=" relative pb-8 space-x-4 after work-experience-wrapper">
            <span className=" absolute left-0 right-0 h-12 z-10 flex items-center justify-center aspect-square rounded-full bg-primary/20 text-primary">
              <FaBriefcase size="20" />
            </span>
            <div className="pl-14 md:pl-16 space-y-2">
              <span className=" inline-block uppercase text-sm">
                {experience.date}
              </span>
              <h3 className=" text-lg lg:text-lg font-semibold">
                {experience.title} ·{" "}
                <Link className=" no-underline" href={experience?.Link || "#"}>{experience.company}</Link>
              </h3>
              <p>{experience.description}</p>
              <ul className=" flex flex-wrap">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className=" bg-primary/20 text-xs mb-2  text-primary py-1.5 px-4 rounded-3xl mr-2 block">
                    {skill}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
