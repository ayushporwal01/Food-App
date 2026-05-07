import { Link } from "react-router-dom";
import { X } from "react-feather";
import { motion } from "motion/react";

export default function SideBar({ navLinks, toggleSidebar }) {
  return;
  <motion.div
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 100, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-red-300 fixed top-0 right-0 bottom-0 md:hidden justify-center"
  >
    <ul className="flex flex-col items-center gap-y-4 pt-5">
      {navLinks.map((link) => (
        <li key={link.path} className="text-lg cursor-pointer">
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
      <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
        <X size={30} />
      </button>
    </ul>
  </motion.div>;
}
