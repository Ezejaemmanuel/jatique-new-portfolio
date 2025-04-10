
import React from "react";
import { motion } from "framer-motion";
import { Book, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  id: number;
  title: string;
  journal: string;
  date: string;
  abstract: string;
  link: string;
  tags: string[];
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Advancing Decentralized Finance: A Comprehensive Study of Smart Contract Security",
    journal: "Journal of Blockchain Technology",
    date: "March 2024",
    abstract: "This paper examines the latest approaches to securing smart contracts in decentralized finance applications, with a focus on formal verification methods and automated security scanning tools.",
    link: "#",
    tags: ["Blockchain", "Security", "DeFi", "Smart Contracts"]
  },
  {
    id: 2,
    title: "Integrating Large Language Models with Web Applications: Architectural Patterns",
    journal: "AI Engineering Review",
    date: "January 2024",
    abstract: "A systematic review of design patterns for effectively integrating large language models into web applications, considering performance, user experience, and ethical considerations.",
    link: "#",
    tags: ["AI", "Web Development", "LLMs", "UX Design"]
  },
  {
    id: 3,
    title: "Responsive UI Frameworks: A Comparative Analysis for Modern Web Applications",
    journal: "Frontend Development Quarterly",
    date: "October 2023",
    abstract: "This study compares the performance, developer experience, and accessibility features of popular UI frameworks for building responsive web interfaces.",
    link: "#",
    tags: ["UI/UX", "Frontend", "Performance", "Accessibility"]
  }
];

const Publications = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Publications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-rose-500 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Selected research papers and articles I&apos;ve authored or co-authored in the fields of blockchain, AI, and web development.
          </p>
        </motion.div>

        <div className="space-y-10">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/90 backdrop-blur-sm border border-orange-500/10 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="p-8">
                <div className="flex items-center gap-2 text-orange-400 mb-4">
                  <Book className="h-4 w-4" />
                  <span className="text-sm">{publication.journal}</span>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-1" />
                    {publication.date}
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">{publication.title}</h3>
                
                <p className="text-gray-300 mb-6">{publication.abstract}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {publication.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-orange-500/10 text-orange-300 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div>
                  <Button asChild variant="ghost" className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 -ml-2 pl-2">
                    <a href={publication.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Read Publication 
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 text-white">
            <a href="#" className="flex items-center gap-1">
              View All Publications
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;
