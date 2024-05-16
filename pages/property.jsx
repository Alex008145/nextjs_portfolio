import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/property.jpg";
import { GiPlayButton } from "react-icons/gi";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative  z-60">
        <div className="fixed top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10 " />
        <Image
          className="absolute z-1"
          objectFit="cover"
          layout="fill"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10">
          <h2 className="py-2">Property Finder</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Проект</p>
          <h2>Описание</h2>
          <p>
            This app was built using React and is hosted on Firebase. Users can
            search properties for sale and rent in their local area. Users can
            also create their own account and save their favorite properties.{" "}
          </p>
          <button className="px-8 py-2 mt-4 mr-8 ">Demo</button>
          <button className="px-8 py-2 mt-4 ">Code on GitHub</button>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p>Technologies</p>
            <div>
              <p>
                <GiPlayButton />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default property;
