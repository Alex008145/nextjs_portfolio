import Image from "next/image";

const Skill = ({ src, name }) => {
  return (
    <div className="p-6 duration-300 ease-in shadow-md shadow-purple-700 rounded-xl hover:scale-110 dark:bg-gray-800">
      <div className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-1 ">
        <div className="m-auto">
          <Image src={src} height={64} width={64} alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
