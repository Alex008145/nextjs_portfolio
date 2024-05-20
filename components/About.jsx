import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto shadow-lg shadow-purple-700 rounded-xl">
          <Image
            className="rounded-xl"
            src="/assets/about.jpg"
            alt="photo"
            width={350}
            height={50}
          ></Image>
        </div>
        <div className="col-span-2">
          <p className="text-xl font-bold tracking-widest text-purple-700 uppercase mt-7">
            Обо мне
          </p>
          <h2 className="py-4">Кто я</h2>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            Im not your normal developer
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quae, veniam rerum eos neque laudantium necessitatibus
            dolores nulla dolorem aliquam possimus deserunt error praesentium
            fugiat, consequuntur saepe! Asperiores vero placeat impedit neque
            deleniti officia possimus dolorum laboriosam cumque, dolore quasi
            voluptates suscipit nobis porro necessitatibus ipsum quae, velit a!
            Minus.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
            aspernatur aliquam similique et harum, explicabo vitae veritatis
            quidem debitis commodi accusantium quaerat! Neque praesentium maxime
            molestiae dignissimos velit, ipsam harum nemo, recusandae obcaecati
            culpa fugit quibusdam, eos inventore reprehenderit totam!
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer dark:text-gray-400">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
