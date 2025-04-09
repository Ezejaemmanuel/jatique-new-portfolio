
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Fullstack Developer",
      company: "Tech Innovations Ltd",
      date: "2023 - Present",
      description: "Leading development of enterprise web applications and blockchain solutions. Mentoring junior developers and implementing CI/CD pipelines.",
      technologies: ["React", "TypeScript", "Node.js", "Solidity", "AWS"]
    },
    {
      title: "Blockchain Developer",
      company: "Web3 Solutions",
      date: "2022 - 2023",
      description: "Built decentralized applications and smart contracts for various clients. Implemented token standards and DeFi protocols.",
      technologies: ["Solidity", "Web3.js", "React", "Hardhat", "DApps"]
    },
    {
      title: "Frontend Developer",
      company: "Creative Digital Agency",
      date: "2020 - 2022",
      description: "Developed responsive web applications with modern JavaScript frameworks. Collaborated with designers to implement pixel-perfect UIs.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Redux", "Next.js"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in the tech industry and the companies I've contributed to.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-rose-500 before:via-rose-700 before:to-rose-900 before:opacity-30"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group mb-16 last:mb-0"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-zinc-900 text-rose-500 shadow-md shadow-black/5 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {index % 2 === 0 ? <Building2 className="w-5 h-5" /> : <Calendar className="w-5 h-5" />}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-900/90 backdrop-blur-sm rounded-xl p-6 shadow-xl shadow-black/5 border border-rose-500/10"
              >
                <div className="mb-1 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">{exp.title}</h3>
                    <div className="text-rose-400 flex items-center">
                      <Building2 size={16} className="mr-1" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <time className="text-xs text-gray-400 whitespace-nowrap">{exp.date}</time>
                </div>
                <div className="mt-3">
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs rounded-full bg-rose-500/20 text-rose-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
