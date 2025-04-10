
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    content: "Working with Jatique was an incredible experience. His technical expertise and ability to deliver complex features on time is unmatched.",
    author: "Sarah Johnson",
    position: "CTO, TechInnovate",
    image: "bg-gradient-to-br from-blue-600 to-indigo-700"
  },
  {
    id: 2,
    content: "Jatique's blockchain development skills are exceptional. He created a secure and efficient smart contract system that exceeded our expectations.",
    author: "Michael Chen",
    position: "Founder, DeFi Solutions",
    image: "bg-gradient-to-br from-purple-600 to-pink-600"
  },
  {
    id: 3,
    content: "The AI integration Jatique implemented transformed our product. His attention to detail and innovative approach to problem-solving is impressive.",
    author: "Emily Rodriguez",
    position: "Product Manager, AI Innovations",
    image: "bg-gradient-to-br from-green-600 to-teal-600"
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">Testimonials</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-rose-500 to-rose-600 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            What clients and colleagues have to say about working with me.
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 text-8xl text-rose-500/10 -translate-x-1/4 -translate-y-1/4">
            <Quote size={100} />
          </div>
          
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/90 backdrop-blur-sm border border-rose-500/10 rounded-xl p-8 md:p-12 relative z-10"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold text-white ${testimonials[current].image}`}>
                {testimonials[current].author[0]}
              </div>
              
              <div className="flex-1">
                <p className="text-gray-200 text-lg md:text-xl italic mb-6">{testimonials[current].content}</p>
                <div>
                  <h4 className="font-bold text-white font-display">{testimonials[current].author}</h4>
                  <p className="text-rose-400">{testimonials[current].position}</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button
              onClick={prev}
              variant="outline"
              size="icon"
              className="bg-zinc-900/50 border-rose-500/20 hover:bg-rose-950/30 text-rose-400"
            >
              <ArrowLeft size={20} />
            </Button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-rose-500 w-4' : 'bg-rose-500/30'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
            <Button
              onClick={next}
              variant="outline"
              size="icon"
              className="bg-zinc-900/50 border-rose-500/20 hover:bg-rose-950/30 text-rose-400"
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
