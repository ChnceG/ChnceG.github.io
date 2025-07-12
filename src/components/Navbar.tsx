import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos === 0) {
        setVisible(false)
      } else if (currentScrollPos < prevScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 bg-[#eee]/5 backdrop-blur p-4 text-[#eee] text-lg flex font-impact transition-transform duration-300 ${
        visible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-[60%] justify-evenly">
        <Link to="home" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
          Home
        </Link>
        <Link to="skills" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
          Projects
        </Link>
        <Link to="about" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
          About
        </Link>
        <Link to="contact" smooth={true} duration={500} spy={true} className="cursor-pointer hover:text-[#d72638] hover:scale-105 duration-300 active:text-[#000]">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
