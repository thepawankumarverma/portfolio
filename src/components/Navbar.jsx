import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center text-white text-4xl font-semibold">

        PKV
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* <a href="https://github.com/thepawankumarverma/">  <FaGithub /></a>
        <FaLinkedin />
      
        <FaInstagram />
        <FaSquareXTwitter /> */}

      </div>
    </nav>
  )
}

export default Navbar