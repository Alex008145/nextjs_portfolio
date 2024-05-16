import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-110">
          <img className="rounded-xl" src="/assets/about.jpg" alt=""></img>
        </div>
        <div className="col-span-2">
          <p className="text-xl font-bold tracking-widest text-purple-800">
            Обо мне
          </p>
          <h2 className="py-4">Кто я</h2>
          <p className="py-2 text-gray-600">Im not your normal developer</p>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quae, veniam rerum eos neque laudantium necessitatibus
            dolores nulla dolorem aliquam possimus deserunt error praesentium
            fugiat, consequuntur saepe! Asperiores vero placeat impedit neque
            deleniti officia possimus dolorum laboriosam cumque, dolore quasi
            voluptates suscipit nobis porro necessitatibus ipsum quae, velit a!
            Minus.
          </p>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            aspernatur aliquam similique et harum, explicabo vitae veritatis
            quidem debitis commodi accusantium quaerat! Neque praesentium maxime
            molestiae dignissimos velit, ipsam harum nemo, recusandae obcaecati
            culpa fugit quibusdam, eos inventore reprehenderit totam!
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
