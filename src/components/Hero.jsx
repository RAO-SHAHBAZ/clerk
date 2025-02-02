import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // For animations
import {  SignedOut, SignIn, SignUp } from "@clerk/clerk-react";
import { useSearchParams } from "react-router-dom";

const HeroSection = () => {
  const [ShowClerkBtn, setShowClerkBtn] = useState(false)  // For Show Sign In Button
  const [showSignUp, setshowSignUp] = useState(false) // For Show Sign Up Button

  // When Serch Parms Change ?sign-in=true
  const [search, setsearch] = useSearchParams()

  // When Serch Parms Change ?sign-in=true
  useEffect(()=>{
    if(search.get('sign-in')){
      setShowClerkBtn(true);
    }
  },[search])

  // For whne user click outside of clerck login/signup div 
  const HandleOverlayClick = (e) =>{
    if (e.target === e.currentTarget) {
      setShowClerkBtn(false);
      setshowSignUp(false);
      search({});
    }
  }

  return (
    <div className="relative bg-gradient-to-r from-gray-100 via-white to-gray-200">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-100 opacity-50 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Section: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-5xl           lg:text-6xl font-extrabold text-gray-800 leading-tight tracking-tight">
            Transform Your <span className="text-blue-500">Digital Presence</span> <br />
            with Cutting-Edge Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-600 lg:pr-10">
            We deliver award-winning strategies and innovative designs to elevate your business to the next level. Your success is our mission.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <SignedOut>
            <motion.a
           
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
           onClick={() => setshowSignUp(true)}
           className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-8 py-4 rounded-lg font-bold shadow-lg transform transition hover:shadow-xl"
           
         >
           Sign Up
         </motion.a>
         <motion.a
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.95 }}
           onClick={() => setShowClerkBtn(true)}
           className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-bold shadow-lg transform transition hover:bg-gray-300"
         >
           SignIn
         </motion.a>
            </SignedOut>
           
          </div>
        </motion.div>

        {/* Right Section: Images */}
        <div className="relative lg:w-1/2 flex justify-center">
          {/* Background Animation */}
          <motion.div
            initial={{ scale: 0.8, rotate: 15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute bg-gradient-to-r from-blue-100 to-purple-100 w-96 h-96 rounded-full blur-3xl opacity-50 -z-10"
          ></motion.div>

          {/* Image Slider */}
          <div className="relative w-96 h-96">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Digital Marketing 1"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Digital Marketing 2"
                className="rounded-lg shadow-lg absolute top-16 left-16"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <img
                src="https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Digital Marketing 3"
                className="rounded-lg shadow-lg absolute top-8 right-8"
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* For Showing SIgn In and Signout Conditions */}
      {
        ShowClerkBtn && 
        <div onClick={HandleOverlayClick}
        className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <SignIn/>
        </div>
      }
      {
        showSignUp && 
        <div onClick={HandleOverlayClick}
        className="fixed inset-0 bg-gray-900 bg-opacity-20 flex items-center justify-center">
          <SignUp/>
        </div>
      }
    </div>
  );
};

export default HeroSection;

