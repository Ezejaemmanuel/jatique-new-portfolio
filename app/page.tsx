"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import DetailedAbout from "@/components/DetailedAbout";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extended loading time to 4 seconds as requested
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
      rootMargin: "-50px 0px"
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
          >
            <div className="flex flex-col items-center relative">
              {/* Background design elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-rose-700/30 blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl"
              />

              {/* Main logo animation */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                  scale: [0.8, 1.1, 1],
                  opacity: 1
                }}
                transition={{
                  duration: 1.8,
                  times: [0, 0.6, 1],
                  ease: "easeInOut"
                }}
                className="text-5xl md:text-7xl font-bold font-display relative z-10"
              >
                <span className="bg-gradient-to-r from-rose-500 to-rose-300 bg-clip-text text-transparent">
                  Jatique
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="text-white"
                >.</motion.span>
              </motion.div>

              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "60px", opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.7 }}
                className="h-1 bg-gradient-to-r from-rose-500 to-rose-300 mt-3 rounded-full"
              />

              {/* Enhanced skill tags with staggered animation */}
              <motion.div className="mt-4 flex flex-col items-center">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="text-gray-300 text-sm md:text-base"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.9, duration: 0.3 }}
                    className="text-rose-400 font-semibold"
                  >
                    Full Stack
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.3 }}
                  >
                    |
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.3 }}
                    className="text-rose-400 font-semibold"
                  >
                    Blockchain
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8, duration: 0.3 }}
                  >
                    |
                  </motion.span>{" "}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.1, duration: 0.3 }}
                    className="text-rose-400 font-semibold"
                  >
                    AI
                  </motion.span>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.4, duration: 0.4 }}
                  className="text-gray-400 text-xs md:text-sm mt-1"
                >
                  Developer
                </motion.p>
              </motion.div>

              {/* New tech stack tags with staggered animation */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.6 }}
                className="flex flex-wrap justify-center mt-6 gap-2 px-4 max-w-xs md:max-w-md"
              >
                {["React", "Next.js", "TypeScript", "Node.js", "Solidity", "Python"].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.7 + (i * 0.1), duration: 0.4 }}
                    className="px-2 py-1 text-xs bg-gray-800/70 text-gray-300 rounded-full border border-rose-500/20"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Added tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2, duration: 0.6 }}
                className="text-gray-400 text-xs md:text-sm mt-6 text-center max-w-xs md:max-w-sm"
              >
                Crafting seamless digital experiences with cutting-edge technology
              </motion.p>

              {/* Loading progress indicator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.8, ease: "easeInOut" }}
                className="h-0.5 bg-rose-500/50 rounded-full mt-8 w-32"
              />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(20,20,20,0.4),rgba(0,0,0,1)_70%)] pointer-events-none"></div>

        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10"
        >
          <section id="home" className="min-h-screen pt-16">
            <Hero setActiveSection={setActiveSection} />
          </section>

          <section id="about" className="min-h-screen py-20">
            <About />
          </section>

          <section id="detailed-about" className="min-h-screen py-20 bg-black/90">
            <DetailedAbout />
          </section>

          <section id="experience" className="min-h-screen py-20">
            <Experience />
          </section>

          <section id="skills" className="min-h-screen py-20 bg-black/90">
            <Skills />
          </section>

          {/* <section id="projects" className="min-h-screen py-20">
            <Projects />
          </section> */}

          <section id="contact" className="min-h-screen py-20 bg-black/90">
            <Contact />
          </section>
        </motion.main>

        <Footer />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="fixed bottom-8 right-8 z-30"
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-rose-600 hover:bg-rose-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Index;
