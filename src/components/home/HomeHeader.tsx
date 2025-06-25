import { NavLink } from "react-router";

import { Menu } from "lucide-react";

import { useState } from "react";

const navLinks = [
  {
    section: "Home",
    link: "/",
  },
  {
    section: "Services",
    link: "/services",
  },
  {
    section: "Projects",
    link: "/projects",
  },
  {
    section: "About us",
    link: "/about",
  },
  {
    section: "Contact us",
    link: "/contact",
  },
  {
    section: "Careers",
    link: "/careers",
  },
  {
    section: "Blogs",
    link: "/blog",
  },
];

export default function HomeNav() {
  const [navOpen, setnavOpen] = useState<boolean>(false);

  const handleNavOpen = () => {
    setnavOpen((navOpen) => !navOpen);
  };
  return (
    <nav className="flex items-center justify-between py-10">
      <div className="z-20">
        <img src="/images/home/aeraskyy-logo.png" alt="" />
      </div>
      <ul
        className={`flex gap-8 items-center justify-center max-sm:flex-col max-sm:fixed max-sm:left-0 ${
          navOpen ? "top-0" : "max-sm:top-[-100%]"
        } max-sm:w-full max-sm:h-screen max-sm:bg-black/90 duration-300 transition-all`}
      >
        {navLinks.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <NavLink to={item.link}>{item.section}</NavLink>
          </li>
        ))}
      </ul>
      <div className="hidden max-sm:block z-20" onClick={handleNavOpen}>
        <Menu size={40} />
      </div>
    </nav>
  );
}
