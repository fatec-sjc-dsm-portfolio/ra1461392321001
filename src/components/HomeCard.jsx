import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../images/rosto.jpg";

const HomeCard = () => {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const photoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <div className="w-full mt-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <motion.h1
            className="text-yellow-500 dark:text-rose-500 text-2xl font-bold w-full px-2"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.5 }}
          >
            OLÁ MEU NOME É ERIK
          </motion.h1>
          <motion.p
            className="text-7xl md:text-8xl font-bold w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.75 }}
          >
            Eu sou
          </motion.p>
          <motion.p
            className="text-7xl md:text-8xl font-bold w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1.0 }}
          >
            desenvolvedor
          </motion.p>
          <motion.p
            className="text-7xl md:text-8xl font-bold w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1.25 }}
          >
            de software
          </motion.p>
          <motion.p
            className="text-4xl font-semibold mt-16 dark:text-cyan-500 w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1.5 }}
          >
            Materializando suas ideias através da magia da programação
          </motion.p>
        </div>
        <motion.div
          className="flex-shrink-0"
          initial="hidden"
          animate="visible"
          variants={photoVariants}
          transition={{ delay: 0.75, duration: 0.75, ease: "easeInOut" }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500 dark:border-rose-500 shadow-2xl">
            <Image
              src={profilePic}
              alt="Erik Camara Yokota"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div className="w-full mt-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1">
          <motion.h1
            className="text-yellow-500 dark:text-rose-500 text-2xl font-bold w-full px-2"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.5 }}
          >
            HELLO MY NAME IS ERIK
          </motion.h1>
          <motion.p
            className="text-7xl md:text-8xl font-bold w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 0.75 }}
          >
            I&apos;m
          </motion.p>
          <motion.p
            className="text-7xl md:text-8xl font-bold w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1.0 }}
          >
            Software
          </motion.p>
          <motion.p
            className="text-7xl md:text-8xl font-bold w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1.25 }}
          >
            Developer
          </motion.p>
          <motion.p
            className="text-4xl font-semibold mt-16 dark:text-cyan-500 w-full"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ delay: 1.5 }}
          >
            Materializing your aspirations through the wizardry of programming.
          </motion.p>
        </div>
        <motion.div
          className="flex-shrink-0"
          initial="hidden"
          animate="visible"
          variants={photoVariants}
          transition={{ delay: 0.75, duration: 0.75, ease: "easeInOut" }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500 dark:border-rose-500 shadow-2xl">
            <Image
              src={profilePic}
              alt="Erik Camara Yokota"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    );
  }
};

export default HomeCard;
