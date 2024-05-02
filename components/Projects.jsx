import React from "react";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest text-purple-800 uppercase">
          Проекты
        </p>
        <h2 className="py-4">Примеры моих пет-проектов</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
