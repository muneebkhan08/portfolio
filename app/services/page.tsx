"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { slideInFromLeft } from '@/utils/motion';

const Services = () => {
  return (
    <motion.div initial="hidden" animate="visible" className='flex flex-col px-20 mt-40 w-full z-[20]'>
        <motion.div variants={slideInFromLeft(0.5)} className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 pb-10'>
                            Skills & Services
                        </span>
        </motion.div>
        
        
    </motion.div>
  )
}

export default Services