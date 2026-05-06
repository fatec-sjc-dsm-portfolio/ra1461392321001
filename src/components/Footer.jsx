import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <footer className="p-8 border-t-2 dark:bg-neutral-800 dark:border-neutral-600 w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-evenly items-center px-6">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2 dark:text-rose-500">
              Redes sociais
            </p>
            <div className="flex gap-4">
              <a
                href="https://br.linkedin.com/in/erik-camara-yokota-685439233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 hover:text-blue-700 dark:text-white"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://github.com/yokotaerik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 hover:text-blue-700 dark:text-white"
              >
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="text-center flex flex-col ">
            <p className="text-lg font-semibold">
              Todos direitos reservados © {new Date().getFullYear()}
            </p>
            <div className="flex justify-center items-center">
              <p className="text-lg font-semibold">por</p>
              <span className="font-black text-2xl mx-2 text-yellow-500 dark:text-cyan-500">
                YOKOTA
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold mb-1 dark:text-rose-500">
              Entre em contato
            </p>
            <p className="text-blue-950 hover:underline">
              erikcamarayokota@gmail.com
            </p>
          </div>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="p-8 border-t-2 dark:bg-neutral-800 dark:border-neutral-600 w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-evenly items-center px-6">
          <div className="text-center">
            <p className="text-lg font-semibold mb-2 dark:text-rose-500">
              Social Medias
            </p>
            <div className="flex gap-4">
              <a
                href="https://br.linkedin.com/in/erik-camara-yokota-685439233"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 hover:text-blue-700 dark:text-white"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://github.com/yokotaerik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-950 hover:text-blue-700 dark:text-white"
              >
                <FaGithub className="text-3xl" />
              </a>
            </div>
          </div>
          <div className="text-center flex flex-col ">
            <p className="text-lg font-semibold">
              All rights reserved © {new Date().getFullYear()}
            </p>
            <div className="flex justify-center items-center">
              <p className="text-lg font-semibold">by</p>
              <span className="font-black text-2xl mx-2 text-yellow-500 dark:text-cyan-500">
                YOKOTA
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold mb-1 dark:text-rose-500">
              Contact Me
            </p>
            <p className="text-blue-950 hover:underline">
              erikcamarayokota@gmail.com
            </p>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
