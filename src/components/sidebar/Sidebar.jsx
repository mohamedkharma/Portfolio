import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    // Function to close the sidebar
    const closeSidebar = () => {
      setOpen(false);
    };

    // Event listener to close the sidebar when clicking outside
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".sidebar") && open) {
        closeSidebar();
      }
    };

    // Event listener to close the sidebar when scrolling down
    const handleScroll = () => {
      if (open) {
        closeSidebar();
      }
    };

    // Attach event listeners
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="background" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
