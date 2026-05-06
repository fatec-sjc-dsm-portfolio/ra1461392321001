import Project from "@/components/Project";
import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { FaUniversity, FaUserSecret } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const ProjectsPage = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = { duration: 0.75, ease: "easeInOut" };

  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <motion.div
        className="min-h-screen"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        <Head>
          <title>Projetos | Yokota</title>
        </Head>
        <h1 className="text-7xl text-center md:text-start md:text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-24 mt-16">
          Projetos
        </h1>

        <div className="flex flex-wrap gap-24">
          <Link href={"/projects/academic"}>
            <div className="flex items-center text-center md:text-start gap-10 flex-col md:flex-row">
              <span className="text-blue-950 dark:text-white">
                <FaUniversity size={320} />
              </span>
              <div>
                <h2 className="text-4xl font-bold text-yellow-500 dark:text-cyan-500 mb-4">
                  PROJETOS ACADÊMICOS
                </h2>
                <p className="text-2xl lg:w-3/4">
                  Aqui temos alguns dos projetos que foram desenvolvidos na
                  Fatec, no curso de Desenvolvimento de Software
                  Multiplataforma.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/projects/personal"}>
            <div className="flex items-center text-center md:text-start gap-10 flex-col md:flex-row">
              <span className="text-blue-950 dark:text-white">
                <FaUserSecret size={320} />
              </span>
              <div>
                <h2 className="text-4xl font-bold text-yellow-500 dark:text-cyan-500 mb-4">
                  PROJETOS PESSOAIS
                </h2>
                <p className="text-2xl lg:w-3/4">
                  Aqui temos alguns dos projetos que foram desenvolvidos fora do
                  ambiente acadêmico.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="min-h-screen"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={transition}
      >
        <Head>
          <title>Projects | Yokota</title>
        </Head>
        <h1 className="text-7xl text-center md:text-start md:text-8xl font-bold text-yellow-500 dark:text-rose-500 mb-24 mt-16">
          Projects
        </h1>

        <div className="flex flex-wrap gap-24">
          <Link href={"/projects/academic"}>
            <div className="flex items-center text-center md:text-start gap-10 flex-col md:flex-row">
              <span className="text-blue-950 dark:text-white">
                <FaUniversity size={320} />
              </span>
              <div>
                <h2 className="text-4xl font-bold text-yellow-500 dark:text-cyan-500 mb-4">
                  ACADEMIC PROJECTS
                </h2>
                <p className="text-2xl lg:w-3/4">
                  Here we have my projects developed at FATEC on Multiplatform
                  Software Development.
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/projects/personal"}>
            <div className="flex items-center text-center md:text-start gap-10 flex-col md:flex-row">
              <span className="text-blue-950 dark:text-white">
                <FaUserSecret size={320} />
              </span>
              <div>
                <h2 className="text-4xl font-bold text-yellow-500 dark:text-cyan-500 mb-4">
                  PERSONAL PROJECTS
                </h2>
                <p className="text-2xl lg:w-3/4">
                  Here we have my personal projects developed outside of
                  academic settings.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </motion.div>
    );
  }
};

export default ProjectsPage;
