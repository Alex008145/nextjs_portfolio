import React from "react";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="flex items-center justify-center w-full h-full p-2 mx-auto max-w-[1240px]">
        <div>
          <p className="text-xl tracking-wide text-gray-600 uppercase">
            Добро пожаловать
          </p>
          <h1 className="py-4 text-gray-700">
            Здравствуйте, я <span className="text-purple-800">Алексей</span>
          </h1>
          <h1 className="py-5 text-gray-700">Frontend developer</h1>
          <p className="text-xl tracking-wide text-gray-600 max-w-[70%] m-auto">
            Мой основной стек технологий:{" "}
            <span className="font-bold text-purple-800">
              HTML, CSS, JavaScript, React.
            </span>
            <br /> В настоящее время я изучаю Next.js и Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
