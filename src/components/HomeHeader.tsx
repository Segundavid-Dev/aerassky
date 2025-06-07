import { NavLink } from "react-router";

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
  return (
    <nav>
      <ul className="flex gap-8 items-center justify-center py-7">
        {navLinks.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <NavLink to={item.link}>{item.section}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
