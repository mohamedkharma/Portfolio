import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import './projects.scss'

const items = [
  {
    id:1,
    title:"Walmart Sales Forecasting",
    img:"/walmart.png",
    desc: "This project focuses on sales forecasting for Walmart, employing machine learning models to predict weekly sales accurately. Sales forecasting is crucial for effective resource planning, decision-making, and identifying market trends. ",
    repoLink: "https://github.com/mohamedkharma/Walmart-Sales-Forecasting-Using-Machine-Learning" // Add the GitHub repository link
  },
  {
    id:2,
    title:"Zabegalovka",
    img:"/Zabegalovka.png",
    desc: "Zabegalovka is a restaurant website where people can order food",
    repoLink: "https://github.com/mohamedkharma/Zabegalovka" // Add the GitHub repository link
  },
  {
    id:3,
    title:"CryptoExplorer Pro",
    img:"/CryptoExplorer.png",
    desc: "An app that displays information about cryptocurrencies, such as their value, market cap, and percent change in value, which are accessed using API calls. An search bar is also implemented, which allows users to search for a specific currency. Used ReactRouter to create dynamic URLs for the app.",
    repoLink: "https://github.com/mohamedkharma/CryptoExplorer-Pro/tree/main" // Add the GitHub repository link
  },
  {
    id:4,
    title:"WeatherDash Pro",
    img:"/WeatherDash.png",
    desc: "A pro version of the web app WeatherDash. A data dashboard that show informations about the weather status and history of NYC",
    repoLink: "https://github.com/mohamedkharma/WeatherDash-Pro/tree/main" // Add the GitHub repository link
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const openDemo = () => {
    // Open the GitHub repository link in a new tab/window
    window.open(item.repoLink, "_blank");
  };

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={openDemo}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  
  const ref= useRef()
  
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <motion.div className='projects' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  )
}

export default Projects