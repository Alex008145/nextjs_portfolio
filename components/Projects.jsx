import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import cryptoImg from "../public/assets/projects/crypto.jpg";
import eatsImg from "../public/assets/projects/eats.png";
import twitchImg from "../public/assets/projects/twitch.jpg";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-32">
        <p className="text-xl font-bold tracking-widest text-purple-700 uppercase">
          Проекты
        </p>
        <h2 className="py-4">Примеры моих пет-проектов</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="React Eats"
            backgroundImg={eatsImg}
            projectUrl="/eats"
          />
          <ProjectItem
            title="Twitch App"
            backgroundImg={twitchImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Twitch App"
            backgroundImg={twitchImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Twitch App"
            backgroundImg={twitchImg}
            projectUrl="/property"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
