import React from "react";
import Link from "next/link";

const Project = ({ title, description, stacks, repository, challenges }) => {
  return (
    <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-md flex flex-col gap-4 justify-between h-full">
      <div>
        <h2 className="text-blue-950 dark:text-cyan-500 font-bold text-3xl mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-800">{description}</p>
        <p className="text-lg text-gray-800">{challenges}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {stacks.map((technology, index) => (
          <p
            className="text-lg bg-gray-200 dark:bg-neutral-600 rounded-full px-3 py-1"
            key={index}
          >
            {technology}
          </p>
        ))}
      </div>
      <p className="text-lg font-bold">
        Repository:{" "}
        {repository ? <Link href={repository}>Click here</Link> : "Private"}
      </p>
    </div>
  );
};

export default Project;
