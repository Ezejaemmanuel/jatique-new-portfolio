
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCategory = "all" | "web" | "blockchain" | "ai";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory[];
  liveUrl?: string;
  repoUrl?: string;
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "DeFi Exchange Platform",
      description: "A decentralized exchange built with React, Next.js and Solidity smart contracts enabling token swaps and liquidity provision.",
      image: "bg-gradient-to-br from-orange-500 to-purple-700",
      tags: ["React", "Next.js", "Solidity", "Web3.js", "Tailwind CSS"],
      category: ["web", "blockchain"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      id: 2,
      title: "AI-Powered Content Creator",
      description: "Web app that leverages LLMs to generate and optimize content for marketing teams with customizable prompts and templates.",
      image: "bg-gradient-to-br from-green-600 to-blue-600",
      tags: ["React", "TypeScript", "LangChain", "Node.js", "PostgreSQL"],
      category: ["web", "ai"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      id: 3,
      title: "NFT Marketplace",
      description: "Full-stack NFT marketplace allowing users to mint, buy, sell and trade digital collectibles with wallet integration.",
      image: "bg-gradient-to-br from-orange-500 to-pink-600",
      tags: ["React", "Ethers.js", "Solidity", "Hardhat", "IPFS"],
      category: ["web", "blockchain"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      id: 4,
      title: "Developer Portfolio",
      description: "Modern, responsive developer portfolio showcasing projects and skills with dark mode and animations.",
      image: "bg-gradient-to-br from-gray-600 to-blue-800",
      tags: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: ["web"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      id: 5,
      title: "AI Code Assistant",
      description: "Developer tool that integrates with IDEs to provide intelligent code suggestions and refactoring options.",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      tags: ["Python", "TypeScript", "LLMs", "VS Code Extension"],
      category: ["ai"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform built on blockchain technology for organizations to conduct tamper-proof elections.",
      image: "bg-gradient-to-br from-teal-600 to-blue-600",
      tags: ["React", "Solidity", "Hardhat", "Web3.js", "Tailwind CSS"],
      category: ["web", "blockchain"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "blockchain", label: "Blockchain" },
    { id: "ai", label: "AI Projects" },
  ];
  
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Featured Projects</h2>
          <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg">
            A selection of my recent work across web development, blockchain, and AI integration.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={cn(
                  "text-xs md:text-base px-3 md:px-5 py-2 md:py-6 h-auto",
                  activeCategory === category.id 
                    ? "bg-gradient-to-r from-orange-600 to-rose-600 border-none text-white shadow-lg shadow-orange-900/20" 
                    : "border-orange-500/30 text-gray-300 hover:bg-orange-950/30"
                )}
                onClick={() => setActiveCategory(category.id as ProjectCategory)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>
        
        <div className="space-y-12">
          {filteredProjects.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={project.id} 
              className="bg-gray-900/40 rounded-2xl overflow-hidden hover:transform hover:scale-[1.01] transition-all duration-300 shadow-xl shadow-black/20 border border-orange-500/20 backdrop-blur-sm"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className={`h-80 md:h-96 lg:h-auto lg:w-2/5 ${project.image} flex items-center justify-center relative overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <span className="text-white text-8xl md:text-9xl font-bold opacity-90 z-10 tracking-tighter group-hover:scale-110 transition-transform duration-300">
                    {project.title.charAt(0)}
                  </span>
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-10 lg:w-3/5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-lg leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 mb-6 md:mb-8">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs md:text-sm bg-gray-800/70 text-orange-300 px-2 md:px-4 py-1 md:py-1.5 rounded-full border border-orange-500/20 font-medium hover:bg-gray-800/90 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-4 pt-2">
                    {project.liveUrl && (
                      <Button 
                        asChild 
                        size="sm"
                        variant="orange" 
                        className="text-xs md:text-base font-medium px-4 md:px-6 py-2 md:py-6 h-auto"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={16} className="hidden sm:inline" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button 
                        asChild 
                        size="sm"
                        variant="outline" 
                        className="border-orange-500/30 hover:bg-orange-950/30 text-white text-xs md:text-base font-medium px-4 md:px-6 py-2 md:py-6 h-auto"
                      >
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github size={16} className="hidden sm:inline" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button 
            asChild 
            size="default"
            className="bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white font-medium px-6 md:px-10 py-2 md:py-7 h-auto text-sm md:text-base shadow-lg shadow-orange-900/20"
          >
            <a href="https://github.com/Ezejaemmanuel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3">
              <Github size={18} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
