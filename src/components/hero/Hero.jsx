import "./hero.scss";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleSeeLatestWorksClick = () => {
    // Redirect to the page with the latest works when the button is clicked
    window.location.href = "/#Projects"; // Replace "/latest-works" with your desired URL
  };

  const handleContactMeClick = () => {
    // Redirect to the contact page when the button is clicked
    window.location.href = "/#Contact"; // Replace "/contact" with your desired URL
  };

  const handleScrollButtonClick = () => {
    // Scroll to the next page when the scroll button is clicked
    // scroll.scrollTo("About");
    window.location.href = "/#About"; // Replace "/contact" with your desired URL

  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MOHAMED KHARMA</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineer 
            <motion.h3>
              Building Seamless Experiences
            </motion.h3>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={handleSeeLatestWorksClick}>
              See the Latest Works
            </motion.button>
            <motion.button variants={textVariants} onClick={handleContactMeClick}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            onClick={handleScrollButtonClick}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Logical Creative Precision Problem Solver 
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
