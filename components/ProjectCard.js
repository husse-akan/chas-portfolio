import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-slate-100 dark:bg-purple-50 rounded-lg shadow-lg hover:shadow-xl dark:shadow-white/20 p-4">
      <div className="mb-4 rounded-lg overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1282}
          height={672}
          quality={100}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition duration-500 object-top"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl mb-2 font-bold dark:text-black">
          {project.title}
        </h2>
        <div className="mb-4 flex flex-wrap">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="mr-1 mb-1 bg-violet-500 text-white px-2 rounded-md
              text-[11px] font-light"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="mb-4 dark:text-black text-[14px]">
          {project.description}
        </p>
        <div className="flex justify-between items-center mt-6 mb-2">
          <Link
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-fuchsia-600 underline-offset-4 flex gap-1 items-center text-[14px] text-black hover:text-fuchsia-600 hover:decoration-3"
          >
            <FaGithub /> github link
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
