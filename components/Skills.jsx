import Image from "next/image";
import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl font-bold tracking-widest text-purple-700 uppercase">
          Навыки
        </p>
        <h2 className="py-4">Мой стек технологий</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Skill src="/assets/skills/react.png" name="React" />
          <Skill src="/assets/skills/nextjs.png" name="Next.js" />
          <Skill src="/assets/skills/tailwind.png" name="Tailwind" />
          <Skill src="/assets/skills/javascript.png" name="JavaScript" />
          <Skill src="/assets/skills/typescript.png" name="TypeScript" />
          <Skill src="/assets/skills/node.png" name="Node.js" />
          <Skill src="/assets/skills/github1.png" name="GitHub" />
          <Skill src="/assets/skills/firebase.png" name="Firebase API" />
          <Skill src="/assets/skills/html.png" name="HTML" />
          <Skill src="/assets/skills/css.png" name="CSS" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
