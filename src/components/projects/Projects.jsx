import React from 'react'
import { motion } from 'framer-motion'
import './projects.scss'

const Projects = () => {
  return (
    <motion.div className='projects'>
      <motion.div className='testContainer'></motion.div>
        <p>I will add something later <br /> maybe another day</p>
      <motion.div className='titleContainer'></motion.div>
        <div className='title'> 
          <img src='people.webp' alt=''></img>
          <h1><b>Make Your</b> Ideas</h1>
          <h1><b>Become</b> Reality.</h1>
          <button>WHO AM I?</button>
        </div>
        
      <motion.div className='listContainer'>
        <div className='box'>
          <h2>Project Name</h2>
          <p>
            Porject Description
          </p>
          <button>GO</button>
        </div>

        <div className='box'>
          <h2>Project Name</h2>
          <p>
            Porject Description
          </p>
          <button>GO</button>
        </div>

        <div className='box'>
          <h2>Project Name</h2>
          <p>
            Porject Description
          </p>
          <button>GO</button>
        </div>

        <div className='box'>
          <h2>Project Name</h2>
          <p>
            Porject Description
          </p>
          <button>GO</button>
        </div>
      </motion.div>
    
    </motion.div>
  )
}

export default Projects