import { Linkedin } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer>
      <div className="flex justify-end pb-5">
        <div className="flex gap-5">
          <p>Follo us on Social Media</p>
          <span className="flex gap-2">
            <Linkedin className="cursor-pointer" />
            <Instagram className="cursor-pointer" />
            <Twitter className="cursor-pointer" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-6 py-10 border-gray-100/20 border-t border-b">
        <ul>
          <p className="pb-5">Home</p>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Benefits
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Our Testimonials
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Partners
            </a>
          </li>
        </ul>

        <ul>
          <p className="pb-5">Services</p>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Web Design
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Web Development
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              App Development
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Digital Marketing
            </a>
          </li>
        </ul>

        <ul>
          <p className="pb-5">Projects</p>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Benefits
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              ABC Tech Solutions
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Green Earth Eco Store
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Global Tech Solutions
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Tech Guru Inc.
            </a>
          </li>
        </ul>

        <ul>
          <p className="pb-5">About us</p>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Our Team
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Achievements
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Awards
            </a>
          </li>
        </ul>

        <ul>
          <p className="pb-5">Careers</p>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Job Openings
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Benefits & Perks
            </a>
          </li>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Employee Refral
            </a>
          </li>
        </ul>

        <ul>
          <p className="pb-5">Blogs</p>
          <li className="pb-3">
            <a href="#" className="text-[#808080]">
              Blogs
            </a>
          </li>
        </ul>
      </div>

      <div className="text-[var(--text-gray)] flex items-center justify-between py-5">
        <div>@{currentYear} Aerassky. All rights Reserved.</div>
        <div>Version 1.0</div>
        <ul className="flex gap-5">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </footer>
  );
}
