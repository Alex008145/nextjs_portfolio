import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16">
        <p className="text-xl tracking-widest text-purple-800 uppercase">
          Contact
        </p>
        <h2 className="py-4">Обратная связь</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left side */}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="duration-300 ease-in rounded-xl hover:scale-110"
                  src="/assets/contact.jpg"
                  alt="contact"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h2 className="py-2">Алексей</h2>
                <p>Front-end developer</p>
                <p className="py-4">
                  Я ищу работу на полный рабочий день, удаленно или в офисе в
                  Санкт-Петербурге.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Связаться со мной </p>
                <div className="flex items-center justify-between py-4">
                  <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-125">
                    <FaTelegram />
                  </div>
                  <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-125">
                    <FaGithub />
                  </div>
                  <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-125">
                    <AiOutlineMail />
                  </div>
                  <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-125">
                    <Image
                      src="/assets/hh_logo.png"
                      width={20}
                      height={50}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
