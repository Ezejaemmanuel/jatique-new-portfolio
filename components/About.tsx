import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

const About = () => {
  const isMobile = useIsMobile();

  // Animation for letters
  const letterAnimation = {
    hidden: { opacity: 0, y: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  // Split "Jatique" into individual letters for animation
  const letters = "Jatique".split("");

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 font-display">About Me</h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-2/5"
          >
            <div className="relative">
              <motion.div
                className="aspect-square rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="https://jwhzs4mj71.ufs.sh/f/ZdXbAB3jlHwtvAIY7XdDhKegd50Sso4EYkHC3tyIq6QO8jBf"
                  alt="Ezeja Emmanuel Chibuike"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 w-14 md:w-16 lg:w-24 h-14 md:h-16 lg:h-24 rounded-xl bg-gradient-to-br from-black to-gray-900 border-4 border-rose-500/20 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex">
                  {letters.map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`text-xs md:text-sm lg:text-xl font-bold ${i % 2 === 0 ? "text-rose-400" : "text-white"
                        }`}
                      style={{ display: "inline-block" }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 font-display">
              Hi, I&apos;m <span className="text-rose-400">Ezeja Emmanuel Chibuike</span>
            </h3>
            <p className="text-gray-300 mb-2 md:mb-3 text-xs md:text-sm lg:text-base">
              I go by <span className="font-semibold">Jatique</span> (/jatik/) — that&apos;s the name I love to be called.
            </p>
            <p className="text-gray-300 mb-2 md:mb-3 text-xs md:text-sm lg:text-base">
              I&apos;m a passionate and enthusiastic <span className="font-semibold">Fullstack Web Developer</span>, <span className="font-semibold">Mobile Developer</span>, <span className="font-semibold">Blockchain Developer</span>, and <span className="font-semibold">AI Developer</span> with over <span className="font-semibold">three years of experience</span> building high-end, scalable applications.
            </p>
            <p className="text-gray-300 mb-4 md:mb-5 text-xs md:text-sm lg:text-base">
              I thrive in environments where I can solve complex problems, build meaningful solutions across web and mobile platforms, and keep pushing the boundaries of what&apos;s possible with code.
            </p>

            <div className="flex flex-wrap gap-2 md:gap-4">
              {/* <Button asChild variant="outline" className="text-xs md:text-sm text-white border-rose-800/30 hover:bg-rose-900/20 transition-all duration-300 h-8 md:h-10">
                <a href="#" download="resume.pdf">
                  Download Resume
                </a>
              </Button> */}
              <Button asChild className="text-xs md:text-sm bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 transition-all duration-300 h-8 md:h-10">
                <a href="#contact">
                  Let&apos;s Talk
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
