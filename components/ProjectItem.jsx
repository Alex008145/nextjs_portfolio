import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-purple-700 rounded-xl group hover:bg-gradient-to-r from-purple-800 to-blue-400">
      <Image
        className="rounded-xl group-hover:opacity-30"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-white">{title}</h3>
        <h3 className="pt-2 pb-4 text-center text-white">React JS</h3>
        <Link href={projectUrl}>
          <p className="py-3 text-lg font-bold text-center text-purple-700 duration-300 ease-in bg-white rounded-lg cursor-pointer hover:scale-125 dark:bg-[#121212]">
            Подробнее
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
