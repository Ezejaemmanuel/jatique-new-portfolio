import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { FaWhatsapp } from "react-icons/fa";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const words = ["Fullstack", "Blockchain", "AI"];
  const isMobile = useIsMobile();

  useEffect(() => {
    let isMounted = true;
    const nextWord = () => {
      if (!isMounted) return;

      setWordIndex(prev => (prev + 1) % words.length);
      setText("");
    };

    if (text.length === words[wordIndex].length) {
      const timeout = setTimeout(nextWord, 2000);
      return () => {
        clearTimeout(timeout);
        isMounted = false;
      };
    }

    const timeout = setTimeout(() => {
      if (!isMounted) return;
      setText(prev => prev + words[wordIndex][prev.length]);
    }, 100);

    return () => {
      clearTimeout(timeout);
      isMounted = false;
    };
  }, [text, wordIndex]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const letters = "Jatique".split("");

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 tracking-tight"
        >
          I&apos;m{" "}
          <span className="inline-flex overflow-hidden">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.5 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                className="bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-medium mb-3 md:mb-4 text-gray-300 h-8 md:h-10"
        >
          <span>{text}</span>
          <span className="inline-block w-1 h-6 sm:h-8 ml-1 bg-rose-500 animate-pulse"></span>
          <span className="sr-only">Developer</span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto px-3"
        >
          {isMobile
            ? "Building high-end, scalable web applications with modern technologies."
            : "Building high-end, scalable web applications, smart contracts, and AI-powered solutions with modern technologies."
          }
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          <Button
            onClick={() => scrollToSection("skills")}
            className="bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 text-white"
            size={isMobile ? "default" : "lg"}
          >
            View My Skills
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size={isMobile ? "default" : "lg"}
            className="border-gray-600 text-gray-200 hover:bg-gray-800 mt-2 sm:mt-0"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-8 sm:mb-12"
        >
          <motion.a
            href="https://github.com/Ezejaemmanuel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Github size={isMobile ? 20 : 24} />
            <span className="sr-only">GitHub</span>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/emmanuel-chibuike-37508b251/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Linkedin size={isMobile ? 20 : 24} />
            <span className="sr-only">LinkedIn</span>
          </motion.a>
          <motion.a
            href="https://x.com/ezejaemmanuel36"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Twitter size={isMobile ? 20 : 24} />
            <span className="sr-only">Twitter</span>
          </motion.a>
          <motion.a
            href="https://wa.me/2349138853790"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <FaWhatsapp size={isMobile ? 20 : 24} />
            <span className="sr-only">WhatsApp</span>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="text-rose-400 hover:text-rose-300 transition-colors focus:outline-none"
          aria-label="Scroll down"
        >
          <ArrowDown size={isMobile ? 24 : 28} />
        </button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-20 h-20 rounded-full bg-rose-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-rose-700/10 blur-3xl"></div>
    </div>
  );
};

export default Hero;
