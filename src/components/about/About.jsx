// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import "./about.scss"

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

// const About = () => {
//   const ref = useRef();

//   const isInView = useInView(ref, { margin: "-100px" });

//   return (
//     <motion.div
//       className="about-me" // Update the class name to match the new SCSS file
//       variants={variants}
//       initial="initial"
//       ref={ref}
//       animate={"animate"}
//     >
//       <motion.div className="introContainer" variants={variants}>
//         <p>
//           Hello! I'm [Your Name], a passionate individual focused on personal and professional growth.
//           <br /> Let me tell you a bit about myself.
//         </p>
//         <hr />
//       </motion.div>
//       <motion.div className="experienceContainer" variants={variants}>
//         <div className="experience">
//           <img src="/profile-picture.jpg" alt="Profile" />
//           <h1>
//             <motion.b whileHover={{ color: "orange" }}>Experienced</motion.b> Professional
//           </h1>
//           <p>
//             I have [X years] of experience in [Your Field], working on [notable projects or achievements].
//           </p>
//         </div>
//       </motion.div>
//       <motion.div className="skillsContainer" variants={variants}>
//         <motion.div
//           className="skill"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Skills</h2>
//           <p>
//             I specialize in [Your Skills], and I am proficient in [Other Skills]. My goal is to [Your Goal or Mission].
//           </p>
//           <button>View Resume</button>
//         </motion.div>
//         <motion.div
//           className="skill"
//           whileHover={{ background: "lightgray", color: "black" }}
//         >
//           <h2>Education</h2>
//           <p>
//             I graduated from [Your University] with a degree in [Your Major]. Education has equipped me with [Key Learnings].
//           </p>
//           <button>View Certificates</button>
//         </motion.div>
//         {/* Add more sections as needed */}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./about.scss"

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const handleResumeClick = () => {
    // Redirect to the Resume page when the button is clicked
    window.location.href = "/#Resume"; // Replace "/Resume" with your desired URL
  };

  return (
    <motion.div 
    className='about'
    variants={variants}
    initial="initial"
    // animate="animate"
    // whileInView="animate"
    ref={ref}
    animate={"animate"}
    >
      <motion.div className='textContainer' variants={variants}>
        <p>Hello! I'm Mohamed Kharma, a passionate individual focused on personal and professional growth.
          <br /> Let me tell you a bit about myself!</p> <hr />
      </motion.div>
      <motion.div className='titleContainer' variants={variants}>
      <div className="title">
          <img src="/me.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Experienced</motion.b> Professional
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
          </h1>
          <button onClick={handleResumeClick}>MY RESUME</button>
        </div>
      </motion.div>

      <motion.div className='descriptionText' variants={variants}>
        <h2> WHO AM I? </h2>
        <p>
          • I am a <strong>graduate student</strong> with a B.S. degree in Computer Science from The City College of New York.
          <br />
          • I have built up a <strong>strong repertoire of skills</strong> in multiple programming languages.
          <br />
          • I hold a <strong>strong command of technical and creative writing</strong>.
          <br />
          • I aspire to be a <strong>Software Engineer</strong>, but nonetheless, I am open to any role that would allow me to further apply my programming and technical skills.
        </p>
      </motion.div>

      {/* <motion.div className='listContainer'>
        <motion.div className='box' whileHover={{background:"lightgray", color: "black"}}>
          <h2>FrontEnd</h2>
          <p>
            put logos of react, vite, scss, css
          </p>
          <button>GO</button>
        </motion.div>

        <motion.div className='box' whileHover={{background:"lightgray", color: "black"}}>
          <h2>Backend</h2>
          <p>
            Porject Description
          </p>
          <button>GO</button>
        </motion.div>

        <motion.div className='box' whileHover={{background:"lightgray", color: "black"}}>
          <h2>Education</h2>
          <p>
            Porject Description
          </p>
          <button>GO</button>
        </motion.div>

        <motion.div className='box' whileHover={{background:"lightgray", color: "black"}}>
          <h2>Contact me</h2>
          <p>
            Porject Description
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div> */}

    </motion.div>
  )
}

export default About