import React from "react";
import projectData from "@/pages/api/projectdata";
import NewProjectCard from "./ProjectCard";

const HomeProjects = () => {
  const mainProjects = projectData.filter((project) => project.mainpage);

  return (
    <div className="py-14">
      <div className="text-center mb-14">
        <h3 className="text-3xl font-extrabold mb-3">Latest Projects</h3>
        <p className="text-sm md:text-lg">
          You can see some of my recent projects below. To see all of my
          projects, please visit my{" "}
          <a
            className="underline decoration-fuchsia-600 hover:decoration-4 underline-offset-4"
            href="/projects"
          >
            projects page.
          </a>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {mainProjects.map((project) => (
          <NewProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
