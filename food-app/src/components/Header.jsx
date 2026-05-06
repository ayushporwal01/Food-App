import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { Menu } from 'react-feather';

export default function Header() {
  return (
    <div className="w-full max-w-8xl h-18 px-10 md:px-20 lg:px-25 flex justify-between items-center border border-black bg-white sticky top-0 left-0 right-0 z-100">
      <img
        className="w-15 cursor-pointer"
        src={LOGO_URL}
        alt="Namaste Food Logo"
      />
      <ul className="hidden md:flex gap-x-10 text-lg [&_li]:cursor-pointer">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Menu size={35} className="md:hidden cursor-pointer" />
    </div>
  );
}
