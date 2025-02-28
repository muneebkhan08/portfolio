"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const Projects = () => {
    const testimonials = [
        {
          key: 1,
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Sarah Chen",
          designation: "Product Manager at TechFlow",
          src: "/ss.png",
        },
        {
            key: 2,
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Michael Rodriguez",
          designation: "CTO at InnovateSphere",
          src: "/ts.png",
        },
      ];

  return (
    <motion.div initial="hidden" animate="visible" className='flex flex-col px-20 mt-40 w-full z-[20]'>
        <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-7xl font-bold text-white max-w-[600px] w-auto h-auto'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 pb-10 mb-10'>
                            Projects
                        </span>
        </motion.div>
        
        <motion.div variants={slideInFromLeft(0.8)} className='flex flex-col items-center border-[1px] bg-[#140b21] border-gray-800 rounded-xl z-[30] md:mx-[5rem]'>
            <div className='flex flex-col items-center text-5xl mt-[5rem]'>
            <motion.div variants={slideInFromLeft(0.8)} className='font-bold text-white pb-5'>
                Interview AI
            </motion.div>
            <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 max-w-[1000px]'>
                            I'm a Full-Stack software Engineer with experience in Website, Mobile, Generative AI, AI agents and Software developement. Check out my projects and skills
            </motion.p>
            </div>            
            <AnimatedTestimonials testimonials={testimonials} />
        </motion.div>
        
        <div className='border bg-black text-white z-[20] rounded-full mx-[6rem] mt-14'>jsd</div>
    </motion.div>    
  )
}

export default Projects