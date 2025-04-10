
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Braces, Terminal, LayoutGrid, Cpu, Clock, Brush, CheckCircle } from "lucide-react";

const DetailedAbout = () => {
  // Array of tools and technologies I use
  const toolsAndTechnologies = [
    {
      category: "Frontend",
      icon: <LayoutGrid className="text-rose-400" />,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      icon: <Braces className="text-orange-400" />,
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"]
    },
    {
      category: "Blockchain",
      icon: <Cpu className="text-blue-400" />,
      items: ["Solidity", "Ethers.js", "Hardhat", "IPFS", "The Graph","Wagmi/Viem"]
    },
    {
      category: "AI & ML",
      icon: <Terminal className="text-green-400" />,
      items: ["Python",  "LangChain", "HuggingFace","Fastapi"]
    },
  ];
  // Array of personal values
  const values = [
    {
      title: "Adaptability",
      description: "I embrace new technologies and leverage AI tools to write more efficient, effective, and high-quality code at an accelerated pace.",
      icon: <Terminal />
    },
    {
      title: "Attention to Detail", 
      description: "I believe the small details make a big difference in the quality of the final product.",
      icon: <Code />
    },
    {
      title: "Continuous Learning",
      description: "Technology changes rapidly, and I'm committed to staying ahead of the curve.",
      icon: <Clock />
    },
    {
      title: "Creative Problem Solving",
      description: "I approach challenges from multiple angles to find the most elegant solution.",
      icon: <Brush />
    },
    {
      title: "Quality & Excellence",
      description: "I don't just deliver code that works — I deliver code that's maintainable and performant.",
      icon: <CheckCircle />
    },
    {
      title: "Future Growth",
      description: "I'm excited about the endless possibilities ahead and committed to growing both personally and professionally in this ever-evolving tech landscape.",
      icon: <Terminal />
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 font-display">My Journey & Approach</h2>
          <div className="w-24 md:w-28 h-1 bg-gradient-to-r from-rose-500 to-orange-500 mx-auto mb-4 md:mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-lg">
            A deeper dive into who I am as a developer and what drives my passion for building exceptional digital experiences.
          </p>
        </motion.div>

        {/* Development Philosophy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="bg-gray-900/40 backdrop-blur-lg rounded-2xl p-6 md:p-12 border border-rose-500/20 shadow-xl shadow-black/20">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-rose-400">My Development Philosophy</h3>
            
            <div className="space-y-4 md:space-y-6 text-gray-200 text-sm md:text-lg">
              <p>
                I approach every project with a blend of <span className="text-rose-300 font-semibold">creativity</span> and <span className="text-rose-300 font-semibold">analytical thinking</span>, always keeping the end user in mind. My goal is to create digital experiences that are not only visually impressive but also intuitive, accessible, and performant.
              </p>
              
              <p>
                As a full-stack developer with a passion for emerging technologies, I pride myself on staying at the forefront of web development, blockchain, and AI innovations. I believe in the power of technology to solve real-world problems and create meaningful impact.
              </p>
              
              <p>
                Whether I&apos;m building decentralized applications that leverage the security and transparency of blockchain, creating AI-powered tools that automate complex processes, or designing responsive web interfaces that delight users, I approach each challenge with excitement and dedication.
              </p>
              
              <div className="pt-4">
                <Button asChild className="bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 text-white text-xs md:text-base font-medium py-2 md:py-6 px-4 md:px-8 h-auto">
                  <a href="#contact">Let&apos;s Create Something Amazing</a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tools and Technologies */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-white">Tools & Technologies I Love</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {toolsAndTechnologies.map((tech, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gray-900/40 backdrop-blur-lg rounded-xl p-4 md:p-6 border border-orange-500/20 hover:border-orange-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-900/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-1.5 md:p-2 bg-gray-800/70 rounded-lg">
                    {tech.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold">{tech.category}</h4>
                </div>
                
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {tech.items.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-800/70 text-gray-200 rounded-full text-xs md:text-sm border border-gray-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-white">My Core Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/30 backdrop-blur-lg rounded-xl p-5 md:p-6 border border-rose-500/20 shadow-lg hover:shadow-rose-900/10 hover:border-rose-400/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                  <div className="p-1.5 md:p-2 bg-rose-500/20 text-rose-400 rounded-lg">
                    {value.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold">{value.title}</h4>
                </div>
                <p className="text-gray-300 text-xs md:text-sm ml-8 md:ml-12">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailedAbout;
