import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const HomeCard = () => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const { language } = useLanguage();

  if (language === "pt") {
    return (
      <div className="w-full mt-24">
        <motion.h1
          className="text-yellow-500 dark:text-rose-500 text-2xl font-bold w-full px-2"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.5 }}
        >
          OLÁ MEU NOME É ERIK
        </motion.h1>
        <motion.p
          className="text-7xl md:text-8xl font-bold w-full"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.75 }}
        >
          Eu sou
        </motion.p>
        <motion.p
          className="text-7xl md:text-8xl font-bold w-full"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.0 }}
        >
          desenvolvedor
        </motion.p>
        <motion.p
          className="text-7xl md:text-8xl font-bold w-full"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.25 }}
        >
          de software
        </motion.p>
        <motion.p
          className="text-4xl font-semibold mt-16 dark:text-cyan-500 w-full"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.5 }}
        >
          Materializando suas ideas através da magia da programação
        </motion.p>
      </div>
    );
  } else {
    return (
      <div className="w-full mt-24">
        <motion.h1
          className="text-yellow-500 dark:text-rose-500 text-2xl font-bold w-full px-2"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.5 }}
        >
          HELLO MY NAME IS ERIK
        </motion.h1>
        <motion.p
          className="text-7xl md:text-8xl font-bold w-full"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 0.75 }}
        >
          I&apos;am
        </motion.p>
        <motion.p
          className="text-7xl md:text-8xl font-bold w-full"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.0 }}
        >
          Software
        </motion.p>
        <motion.p
          className="text-7xl md:text-8xl font-bold w-full"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.25 }}
        >
          Developer
        </motion.p>
        <motion.p
          className="text-4xl font-semibold mt-16 dark:text-cyan-500 w-full"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ delay: 1.5 }}
        >
          Materializing your aspirations through the wizardry of programming.
        </motion.p>
      </div>
    );
  }
};

export default HomeCard;
