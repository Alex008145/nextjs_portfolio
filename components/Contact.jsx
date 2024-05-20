import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex items-center justify-center w-full lg:h-screen"
    >
      <div className="max-w-[1240px] m-auto px-2 py-24  ">
        <p className="text-xl tracking-widest text-purple-700 uppercase ">
          Мои контактные данные
        </p>
        <h2 className="py-4">Обратная связь</h2>
        <div className="gap-8 lg:grid-cols-5">
          {/* left side */}
          <div className="w-full h-full col-span-2 p-4 shadow-lg lg:col-span-2 shadow-purple-700 rounded-xl">
            <div className="h-full lg:p-4">
              {/* <div>
                <Image
                  className="rounded-xl"
                  src="/assets/contact.jpg"
                  alt="contact"
                  width={500}
                  height={500}
                />
              </div> */}
              <div>
                <h2 className="py-2 text-purple-700">Алексей</h2>
                <p className="py-4 text-xl">Front-end developer</p>
                <p className="py-4 text-xl">
                  Я ищу работу на полный рабочий день, удаленно или в офисе в
                  Санкт-Петербурге.
                </p>
              </div>
              <div>
                <p className="pt-8 text-purple-700 uppercase">
                  Связаться со мной
                </p>
                <div className="flex items-center justify-between py-4">
                  <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                    <FaTelegram />
                  </div>
                  <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                    <FaGithub />
                  </div>
                  <div className="p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
                    <AiOutlineMail />
                  </div>
                  <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
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
          {/* <div className="w-full h-auto col-span-3 shadow-lg shadow-purple-700 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label htmlFor="text-sm py-2">Имя</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="uppercase text-sm py-2">
                      Номер телефона (в любом формате)
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="uppercase text-sm py-2">Email</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="uppercase text-sm py-2">Тема</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="uppercase text-sm py-2">Сообщение</label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4">Отправить</button>
              </form>
            </div>
          </div> */}
        </div>

        <div className="flex content-center justify-center py-12">
          <Link href="/#home">
            <div className="flex items-center justify-center p-6 text-xl duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-purple-700 hover:scale-125">
              <div className="flex items-center">
                <HiOutlineChevronDoubleUp
                  className="text-purple-700"
                  size={30}
                />
                <p className="ml-2">Наверх</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
