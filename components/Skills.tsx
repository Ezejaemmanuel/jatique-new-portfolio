import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Layers, PencilRuler, Braces, Cpu, Shield, Info, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

type SkillCategory = "frontend" | "backend" | "blockchain" | "ai" | "tools" | "languages" | "mobile";

interface SkillItem {
  name: string;
  level: number;
  description: string;
}

const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      setCount(Math.min(Math.floor(start), end));

      if (start >= end) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={nodeRef}>{count}</span>;
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5
    }
  })
};

const AnimatedTitle = ({ text, className }: { text: string, className?: string }) => {
  return (
    <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          className={char === " " ? "mr-2" : ""}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true });
  const isMobile = useIsMobile();

  const categories = [
    { id: "frontend", label: "Frontend", icon: <PencilRuler size={isMobile ? 16 : 20} /> },
    { id: "backend", label: "Backend", icon: <Database size={isMobile ? 16 : 20} /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone size={isMobile ? 16 : 20} /> },
    { id: "blockchain", label: "Blockchain", icon: <Layers size={isMobile ? 16 : 20} /> },
    { id: "ai", label: "AI", icon: <Cpu size={isMobile ? 16 : 20} /> },
    { id: "languages", label: "Languages", icon: <Braces size={isMobile ? 16 : 20} /> },
    { id: "tools", label: "Tools", icon: <Code size={isMobile ? 16 : 20} /> },
  ];

  const skillsData: Record<SkillCategory, SkillItem[]> = {
    frontend: [
      { name: "React", level: 95, description: "A JavaScript library for building user interfaces with component-based architecture." },
      { name: "Next.js", level: 90, description: "React framework for production with server-side rendering and static site generation." },
      { name: "TypeScript", level: 85, description: "JavaScript with syntax for types, enhancing code quality and developer experience." },
      { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework for rapidly building custom user interfaces." },
      { name: "Bootstrap", level: 85, description: "Popular CSS framework with pre-built components and responsive grid system." },
      { name: "Redux", level: 85, description: "Predictable state container for JavaScript apps with a centralized store." },
      { name: "Zustand", level: 95, description: "Small, fast and scalable state-management solution using simplified flux principles." },
      { name: "TanStack Query", level: 91, description: "Powerful data fetching library for React that handles caching, background updates and stale data." },
    ],
    backend: [
      { name: "Node.js", level: 85, description: "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development." },
      { name: "Express.js", level: 70, description: "Fast, unopinionated, minimalist web framework for Node.js applications." },
      { name: "Hono.js", level: 75, description: "Small, simple, and ultrafast web framework for the Edges." },
      { name: "FastAPI", level: 70, description: "Modern, fast web framework for building APIs with Python based on standard Python type hints." },
      { name: "Next.js", level: 90, description: "Full-stack React framework with hybrid static & server rendering, TypeScript support, and route pre-fetching." },
      { name: "Prisma", level: 85, description: "Next-generation ORM for Node.js and TypeScript with type-safety and auto-completion." },
      { name: "Drizzle", level: 90, description: "TypeScript ORM that's lightweight and performant with a focus on developer experience." },
      { name: "PostgreSQL", level: 90, description: "Powerful, open source object-relational database system with reliability and data integrity." },
    ],
    blockchain: [
      { name: "Solidity", level: 80, description: "Object-oriented, high-level language for implementing smart contracts on Ethereum." },
      { name: "Wagmi", level: 85, description: "Collection of React Hooks for Ethereum, making it easy to interact with wallets and smart contracts." },
      { name: "Viem", level: 80, description: "TypeScript interface for Ethereum, providing low-level primitives for interacting with the blockchain." },
      { name: "Ethers.js", level: 75, description: "Complete and compact library for interacting with the Ethereum Blockchain and its ecosystem." },
      { name: "Hardhat", level: 70, description: "Development environment to compile, deploy, test, and debug Ethereum software." },
      { name: "Foundry", level: 89, description: "Blazing fast, portable and modular toolkit for Ethereum application development written in Rust." },
      { name: "Smart Contracts", level: 75, description: "Self-executing contracts with the terms directly written into code." },
      { name: "DApps", level: 70, description: "Decentralized applications that run on a blockchain or P2P network of computers." },
      { name: "Web3 Security Auditing", level: 30, description: "Analyzing smart contracts for vulnerabilities and security threats." },
      { name: "thirdweb", level: 70, description: "Complete web3 development framework for building web3 apps, games and NFT projects." }
    ],
    ai: [
      { name: "LangChain", level: 70, description: "Framework for developing applications powered by language models with chains for complex reasoning." },
      { name: "LLM Integration", level: 75, description: "Incorporating large language models into applications for intelligent text processing." },
      { name: "Vercel AI SDK", level: 70, description: "Library for building AI-powered user interfaces with streaming and edge capabilities." },
      { name: "AI Chatbots", level: 65, description: "Creating conversational interfaces powered by machine learning algorithms." },
      { name: "Prompt Engineering", level: 75, description: "Crafting effective prompts to guide AI models toward desired outputs." },
      { name: "Vector Databases", level: 70, description: "Using databases like Pinecone and Weaviate for AI-powered similarity search." },
      { name: "AI Agents", level: 80, description: "Building autonomous AI agents that can perform complex tasks and reasoning." },
      { name: "RAG Systems", level: 70, description: "Implementing Retrieval Augmented Generation for enhanced AI responses with external data." },
    ],
    languages: [
      { name: "TypeScript", level: 90, description: "Strongly typed programming language that builds on JavaScript with type safety." },
      { name: "JavaScript", level: 95, description: "High-level programming language that conforms to the ECMAScript specification." },
      { name: "Python", level: 75, description: "Interpreted, high-level, general-purpose programming language with readability in mind." },
      { name: "Solidity", level: 80, description: "Statically-typed programming language designed for developing smart contracts on Ethereum." },
      { name: "HTML/CSS", level: 90, description: "Standard markup language for documents and styling language for web page presentation." },
    ],
    tools: [
      { name: "Git", level: 90, description: "Distributed version control system for tracking changes in source code during development." },
      { name: "Docker", level: 75, description: "Platform for developing, shipping, and running applications in isolated environments." },
      { name: "Vercel", level: 85, description: "Platform for frontend frameworks and static sites, built to integrate with headless content, commerce, or database." },
      { name: "VS Code", level: 95, description: "Lightweight but powerful source code editor with built-in support for JavaScript, TypeScript and Node.js." },
      { name: "Figma", level: 70, description: "Cloud-based design tool for collaborative interface design with real-time collaboration." },
      { name: "Cursor AI", level: 85, description: "AI-powered code editor that helps developers write and understand code faster." },
      { name: "pnpm", level: 80, description: "Fast, disk space efficient package manager with strict dependency resolution." },
    ],
    mobile: [
      { name: "React Native", level: 85, description: "Framework for building native apps using React for iOS and Android platforms." },
      { name: "Expo", level: 80, description: "Platform for making universal native apps for Android, iOS, and the web with JavaScript and React." },
      { name: "React Navigation", level: 85, description: "Routing and navigation library for React Native applications." },
      { name: "Native Base", level: 75, description: "Accessible, utility-first component library for React Native applications." },
      { name: "Redux for Mobile", level: 80, description: "State management for React Native apps using the Redux architecture." },
      { name: "Reanimated", level: 70, description: "React Native's Animated library reimplemented for better performance and developer experience." },
      { name: "App Publishing", level: 75, description: "Experience with publishing apps to Google Play Store and Apple App Store." },
      { name: "Mobile UX/UI", level: 80, description: "Designing and implementing intuitive mobile user interfaces for iOS and Android." },
    ],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="container mx-auto px-4" ref={skillsRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <AnimatedTitle
            text="My Skills"
            className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4 font-display flex justify-center flex-wrap"
          />
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base px-2">
            I&apos;ve acquired a diverse set of skills over the years, allowing me to build complete solutions from frontend to backend, including blockchain and AI integration.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6 md:mb-10 overflow-x-auto scrollbar-hide"
        >
          <div className="flex justify-start md:justify-center min-w-max pb-2 px-1">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveCategory(category.id as SkillCategory)}
                  className={cn(
                    "mx-1 flex items-center gap-1.5 transition-all duration-300 text-xs md:text-sm",
                    activeCategory === category.id
                      ? "bg-rose-900/20 text-rose-400 border-b-2 border-rose-500"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  {category.icon}
                  {category.label}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <TooltipProvider>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {skillsData[activeCategory].map((skill, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <motion.div
                    variants={item}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 10px 30px -15px rgba(244, 63, 94, 0.4)",
                    }}
                    className="relative bg-zinc-900/90 rounded-lg p-4 md:p-6 backdrop-blur-sm border border-rose-500/10 cursor-pointer group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-base md:text-lg font-display">{skill.name}</h3>
                      <span className="text-xs md:text-sm text-rose-300">
                        <CountUp end={skill.level} />%
                      </span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2 md:h-2.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-rose-600 to-rose-400 h-2 md:h-2.5 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="text-white flex items-center gap-1.5 text-xs md:text-sm">
                        <Info size={16} className="text-rose-400" />
                        <span>{isMobile ? "Tap for details" : "Hover for details"}</span>
                      </div>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-black border border-rose-500/30 p-3 md:p-4 text-white text-xs md:text-sm">
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Skills;
