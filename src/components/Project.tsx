import React from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "@/constant/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className=" space-y-6 mb-24 md:mb-[8rem]">
      <SectionTitle text="My" emphasis="Portfolio" />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project) => (
          <Link
            href={project.link}
            key={project.title}
            className="space-y-4 bg-primary/5 p-8 block no-underline rounded-sm border-2 border-transparent hover:border-primary/30">
            <div className=" flex justify-end space-x-4 pb-4">
              <Link
                href={project.link}
                target="blank"
                aria-label="Visit the site">
                <FaExternalLinkAlt size="20" />
              </Link>
              <Link
                href={project.linkToRepo}
                target="blank"
                aria-label="Link to repository">
                <FaGithub size="20" />
              </Link>
            </div>
            <Image
              src={project.preview}
              alt=""
              width={500}
              height={180}
              quality={100}
              className=" w-full h-[150px] object-cover rounded-sm"
            />
            <div className=" space-y-3">
              <h3 className=" text-lg font-semibold">{project.title}</h3>
              <p>{project.description}</p>
              <ul className=" flex flex-wrap">
                {project.tools.map((tool, index) => (
                  <li
                    key={tool + index}
                    className=" mr-2 mb-2 space-x bg-primary/20 text-primary py-1.5 px-4 text-xs rounded-sm">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
