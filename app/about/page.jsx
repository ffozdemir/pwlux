'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
   return (
      <div className="container mx-auto py-16 px-4">
         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
         >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-red-500">About Us</h1>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
               We are dedicated to delivering exceptional products and services that exceed your expectations.
            </p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7 }}
            >
               <h2 className="text-3xl font-bold mb-6 text-red-500">Our Mission</h2>
               <p className="text-gray-600 mb-4">
                  At PWLUX, our mission is to create innovative solutions that transform the way people interact with technology. 
                  We strive to combine cutting-edge design with exceptional functionality.
               </p>
               <p className="text-gray-600 mb-4">
                  Founded in 2023, we've quickly established ourselves as leaders in our industry, with a commitment to quality, 
                  sustainability, and customer satisfaction at the core of everything we do.
               </p>
               <div className="flex items-center mt-8">
                  <div className="flex space-x-4">
                     <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-red-500">200+</span>
                        <span className="text-sm text-gray-500">Projects</span>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-red-500">15+</span>
                        <span className="text-sm text-gray-500">Team Members</span>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-red-500">99%</span>
                        <span className="text-sm text-gray-500">Client Satisfaction</span>
                     </div>
                  </div>
               </div>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7 }}
               className="relative h-[400px] rounded-lg overflow-hidden"
            >
               <Image
                  src="/about-image.jpg"
                  alt="About Us"
                  fill
                  className="object-cover"
               />
            </motion.div>
         </div>

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-20"
         >
            <h2 className="text-3xl font-bold mb-10 text-center text-red-500">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                  {
                     title: "Innovation",
                     description: "We constantly push boundaries and explore new ideas to stay ahead in a rapidly evolving world.",
                     icon: "💡",
                  },
                  {
                     title: "Quality",
                     description: "We are committed to excellence in everything we create, from code to design and user experience.",
                     icon: "✨",
                  },
                  {
                     title: "Integrity",
                     description: "We uphold the highest standards of honesty and transparency in all our business relationships.",
                     icon: "🤝",
                  },
               ].map((value, index) => (
                  <div 
                     key={index} 
                     className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                     <div className="text-4xl mb-4">{value.icon}</div>
                     <h3 className="text-xl font-bold mb-3 text-blue-400">{value.title}</h3>
                     <p className="text-gray-600">{value.description}</p>
                  </div>
               ))}
            </div>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
         >
            <h2 className="text-3xl font-bold mb-8 text-red-500">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
               Have questions about our company or services? We'd love to hear from you. Reach out to our team today.
            </p>
            <button className="bg-red-500 text-white py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300">
               Contact Us
            </button>
         </motion.div>
      </div>
   );
};

export default About;
