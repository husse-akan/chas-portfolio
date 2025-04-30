import React from "react";
import { FaBuilding, FaLocationDot } from "react-icons/fa6";

const EduCard = ({ edu }) => {
  return (
    <article className="pt-8 border-b-2 border-dark-content pb-5 dark:border-light-content border-opacity-20 dark:border-opacity-20">
      <div className="flex justify-between items-center">
        <h3 className="text-content text-lg">{edu.School}</h3>
        <div className="bg-violet-100 dark:bg-violet-400 text-xs inline-block rounded-3xl px-3 py-1 min-w-fit text-black dark:text-white">
          {edu.Type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5">
            <FaBuilding className="fill-black dark:fill-white" />
            <p className="text-content text-xs md:text-sm font-light pl-1">
              {edu.Section}
            </p>
          </div>
          <div className="flex items-center">
            <FaLocationDot className="fill-black dark:fill-white" />

            <p className="text-content text-xs md:text-sm font-light pl-1">
              {edu.Location}
            </p>
          </div>
        </div>
        <p className="text-content text-xs md:text-sm font-light pl-1 min-w-fit">
          {edu.Duration}
        </p>
      </div>
    </article>
  );
};

export default EduCard;
