import Image from "next/image";
import React from "react";

import eatsImg from "../public/assets/projects/eats.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import promptopiaImg from "../public/assets/projects/promptopia.png";
import tetrisImg from "../public/assets/projects/tetris.png";
import cartImg from "../public/assets/projects/cart.png";
import quotesImg from "../public/assets/projects/quotes.png";
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
            title="Promptopia"
            backgroundImg={promptopiaImg}
            projectUrl="/promptopia"
          />
          <ProjectItem
            title="Tetris App"
            backgroundImg={tetrisImg}
            projectUrl="/tetris"
          />
          <ProjectItem
            title="Shopping Cart"
            backgroundImg={cartImg}
            projectUrl="/cart"
          />
          <ProjectItem
            title="Great Quotes"
            backgroundImg={quotesImg}
            projectUrl="/quotes"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
